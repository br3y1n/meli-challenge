import {
  Pagination,
  PaginationLimitVO,
  PaginationMaxItemsVO,
  PaginationOffsetVO,
  PaginationTotalVO,
} from "@/shared/domain";
import {
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

class InMemoryProductRepository implements IProductRepository {
  private products: Product[] = [
    new Product(
      new ProductIdVO("123"),
      new ProductTitleVO("Cepillo"),
      new ProductCategoryIdVO("456"),
      new ProductPictureVO("/cepillo.jpg"),
      new ProductConditionVO("new"),
      new ProductFreeShippingVO(false),
      new ProductSoldQuantityVO(123),
      new ProductDescriptionVO("Este es un"),
      new ProductPriceVO(
        new Price(
          new PriceCurrencyVO("COP"),
          new PriceAmountVO(456),
          new PriceDecimalsVO(654)
        )
      )
    ),
    new Product(
      new ProductIdVO("456"),
      new ProductTitleVO("Papas"),
      new ProductCategoryIdVO("456"),
      new ProductPictureVO("/papas.jpg"),
      new ProductConditionVO("new"),
      new ProductFreeShippingVO(true),
      new ProductSoldQuantityVO(123),
      new ProductDescriptionVO("Buen momento"),
      new ProductPriceVO(
        new Price(
          new PriceCurrencyVO("USD"),
          new PriceAmountVO(456),
          new PriceDecimalsVO(654)
        )
      )
    ),
    new Product(
      new ProductIdVO("999"),
      new ProductTitleVO("laptop"),
      new ProductCategoryIdVO("456"),
      new ProductPictureVO("/laptop.jpg"),
      new ProductConditionVO("old"),
      new ProductFreeShippingVO(false),
      new ProductSoldQuantityVO(123),
      new ProductDescriptionVO("Para contratarme"),
      new ProductPriceVO(
        new Price(
          new PriceCurrencyVO("COP"),
          new PriceAmountVO(456),
          new PriceDecimalsVO(654)
        )
      )
    ),
  ];

  public async getAll(filters: ProductsFilters) {
    return {
      pagination: new Pagination(
        new PaginationMaxItemsVO(1000),
        new PaginationLimitVO(parseInt(filters.limit)),
        new PaginationOffsetVO(parseInt(filters.offset)),
        new PaginationTotalVO(this.products.length)
      ),
      products: this.products.filter((product) =>
        product
          .getTitle()
          .getValue()
          .toLowerCase()
          .includes(filters.query.toLowerCase())
      ),
      categories: [],
    };
  }

  public async getOneById(id: string) {
    const product =
      this.products.find((product) => product.getId().getValue() === id) ??
      null;

    return product;
  }
}

export { InMemoryProductRepository };
