import { ServiceContainer } from "@/shared/infrastructure/ServiceContainer";
import { logger } from "@/shared/infrastructure/WinstonLogger";
import { Request, Response } from "express";
import { ProductsFilters, ProductSortEnum } from "../domain";

interface IItem {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
}

interface Pagination {
  offset: number;
  total: number;
  max_items: number;
  limit: number;
}

interface ICategory {
  id: string;
  name: string;
}

interface IAllProductsResponse {
  categories: ICategory[];
  items: IItem[];
  pagination: Pagination;
}

interface IProductResponse {
  item: IItem & { sold_quantity: number; description: string };
  categories: ICategory[];
}

class ExpressProductController {
  private readonly _defaultFilters: ProductsFilters = {
    limit: "4",
    offset: "0",
    query: "",
    sort: ProductSortEnum.RELEVANCE,
    category: "",
  };

  constructor() {
    logger.info("ExpressProductController init");
    this.getAll = this.getAll.bind(this);
    this.getOneById = this.getOneById.bind(this);
  }

  public async getAll(req: Request, res: Response) {
    logger.info({
      message: "ExpressProductController - getAll - queryParams",
      data: req.query,
    });

    const {
      products,
      pagination: productPagination,
      categories: productCategories,
    } = await ServiceContainer.product.getAll.run({
      limit: (req.query.limit as string) ?? this._defaultFilters.limit,
      offset: (req.query.offset as string) ?? this._defaultFilters.offset,
      query: (req.query.q as string) ?? this._defaultFilters.query,
      sort: (req.query.sort as ProductSortEnum) ?? this._defaultFilters.sort,
      category: (req.query.category as string) ?? this._defaultFilters.category,
    });

    const items = products.map<IItem>((product) => ({
      id: product.getId().getValue(),
      condition: product.getCondition().getValue(),
      picture: product.getPicture().getValue(),
      free_shipping: product.getFreeShipping().getValue(),
      title: product.getTitle().getValue(),
      price: {
        amount: product.getPrice().getValue().getAmount().getValue(),
        currency: product.getPrice().getValue().getCurrency().getValue(),
        decimals: product.getPrice().getValue().getDecimals().getValue(),
      },
    }));

    const pagination = {
      limit: productPagination.getLimit().getValue(),
      max_items: productPagination.getMaxItems().getValue(),
      offset: productPagination.getOffset().getValue(),
      total: productPagination.getTotal().getValue(),
    };

    const categories = productCategories.map<ICategory>((category) => ({
      id: category.getId().getValue(),
      name: category.getName().getValue(),
    }));

    const response: IAllProductsResponse = {
      categories,
      items,
      pagination,
    };

    return res.json(response).status(200);
  }

  public async getOneById(req: Request, res: Response) {
    logger.info({
      message: "ExpressProductController - getOneById - params",
      data: req.params,
    });

    const { categories, product } =
      await ServiceContainer.product.getOneById.run(req.params.id);

    const newCategories = categories.map<ICategory>((category) => ({
      id: category.getId().getValue(),
      name: category.getName().getValue(),
    }));

    const response: IProductResponse = {
      item: {
        id: product.getId().getValue(),
        condition: product.getCondition().getValue(),
        picture: product.getPicture().getValue(),
        free_shipping: product.getFreeShipping().getValue(),
        title: product.getTitle().getValue(),
        price: {
          amount: product.getPrice().getValue().getAmount().getValue(),
          currency: product.getPrice().getValue().getCurrency().getValue(),
          decimals: product.getPrice().getValue().getDecimals().getValue(),
        },
        description: product.getDescription().getValue()!,
        sold_quantity: product.getSoldQuantity().getValue()!,
      },
      categories: newCategories,
    };

    return res.json(response).status(200);
  }
}

export { ExpressProductController };
