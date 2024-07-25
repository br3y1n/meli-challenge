import {
  Pagination,
  PaginationLimitVO,
  PaginationMaxItemsVO,
  PaginationOffsetVO,
  PaginationTotalVO,
} from "@/shared/domain";
import { axiosClient } from "@/shared/infrastructure/AxiosClient";
import { logger } from "@/shared/infrastructure/WinstonLogger";
import {
  Category,
  CategoryIdVO,
  CategoryNameVO,
  IProductRepository,
  Price,
  PriceAmountVO,
  PriceCurrencyVO,
  PriceDecimalsVO,
  Product,
  ProductCategoryIdVO,
  ProductConditionVO,
  ProductDescriptionVO,
  ProductFreeShippingVO,
  ProductIdVO,
  ProductPictureVO,
  ProductPriceVO,
  ProductsFilters,
  ProductSoldQuantityVO,
  ProductTitleVO,
} from "../domain";

interface Paging {
  total: number;
  primary_results: number;
  offset: number;
  limit: number;
}

interface Shipping {
  free_shipping: boolean;
}

interface Result {
  id: string;
  title: string;
  condition: string;
  listing_type_id: string;
  category_id: string;
  thumbnail: string;
  currency_id: string;
  price: number;
  available_quantity: number;
  shipping: Shipping;
}

interface Picture {
  id: string;
  url: string;
  secure_url: string;
}

interface FilterValuePath {
  id: string;
  name: string;
}

interface FilterValue {
  id: string;
  name: string;
  path_from_root: FilterValuePath[];
}

interface Filter {
  id: string;
  name: string;
  values: FilterValue[];
}

interface MeliApiSerchResponse {
  paging: Paging;
  results: Result[];
  filters: Filter[];
}

interface MeliApiItemResponse extends Result {
  pictures: Picture[];
  sold_quantity?: number;
}

interface MeliApiDescriptionResponse {
  text: string;
  plain_text: string;
}

const extractValues = (num: number) =>
  num
    .toFixed(2)
    .toString()
    .split(".")
    .map((value) => parseInt(value)) as [number, number];

class MeliApiProductRepository implements IProductRepository {
  constructor() {
    logger.info("MeliApiProductRepository init");
  }

  public async getAll(filters: ProductsFilters) {
    logger.info({
      message: "MeliApiProductRepository - getAll - args",
      data: { filters },
    });

    const { query, ...otherFilters } = filters;

    const params = new URLSearchParams({
      q: query,
      ...otherFilters,
    }).toString();

    const {
      data: {
        results,
        paging: { limit, offset, primary_results, total },
        filters: responseFilters,
      },
    } = await axiosClient.get<MeliApiSerchResponse>(
      `sites/MLA/search?${params}`
    );

    const products = results.map<Product>(
      ({
        id,
        thumbnail,
        title,
        currency_id,
        condition,
        shipping: { free_shipping },
        price,
        category_id,
      }) => {
        const [amount, decimals] = extractValues(price);

        return new Product(
          new ProductIdVO(id),
          new ProductTitleVO(title),
          new ProductCategoryIdVO(category_id),
          new ProductPictureVO(thumbnail),
          new ProductConditionVO(condition),
          new ProductFreeShippingVO(free_shipping),
          new ProductSoldQuantityVO(),
          new ProductDescriptionVO(),
          new ProductPriceVO(
            new Price(
              new PriceCurrencyVO(currency_id),
              new PriceAmountVO(amount),
              new PriceDecimalsVO(decimals)
            )
          )
        );
      }
    );

    const pagination: Pagination = new Pagination(
      new PaginationMaxItemsVO(primary_results),
      new PaginationLimitVO(limit),
      new PaginationOffsetVO(offset),
      new PaginationTotalVO(total)
    );

    const { values: [category] = [] } =
      responseFilters.find((filter) => filter.id === "category") ?? {};

    const categories = (category?.path_from_root ?? []).map<Category>(
      ({ id, name }) =>
        new Category(new CategoryIdVO(id), new CategoryNameVO(name))
    );

    return {
      pagination,
      products,
      categories,
    };
  }

  public async getOneById(id: string) {
    logger.info({
      message: "MeliApiProductRepository - getOneById - args",
      data: { id },
    });

    const {
      data: {
        id: productId,
        title,
        pictures: [picture],
        thumbnail,
        condition,
        shipping: { free_shipping },
        currency_id,
        price,
        sold_quantity,
        category_id,
      },
    } = await axiosClient.get<MeliApiItemResponse>(`/items/${id}`);

    const {
      data: { text, plain_text },
    } = await axiosClient.get<MeliApiDescriptionResponse>(
      `/items/${id}/description`
    );

    const [amount, decimals] = extractValues(price);

    return new Product(
      new ProductIdVO(productId),
      new ProductTitleVO(title),
      new ProductCategoryIdVO(category_id),
      new ProductPictureVO(picture?.secure_url ?? thumbnail),
      new ProductConditionVO(condition),
      new ProductFreeShippingVO(free_shipping),
      new ProductSoldQuantityVO(sold_quantity),
      new ProductDescriptionVO(text || plain_text),
      new ProductPriceVO(
        new Price(
          new PriceCurrencyVO(currency_id),
          new PriceAmountVO(amount),
          new PriceDecimalsVO(decimals)
        )
      )
    );
  }
}

export { MeliApiProductRepository };
