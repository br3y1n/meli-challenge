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

  public async getAllByTitle(title: ProductTitleVO) {
    return this.products.filter((product) =>
      product
        .getTitle()
        .getValue()
        .toLowerCase()
        .includes(title.getValue().toLowerCase())
    );
  }

  public async getOneById(id: ProductIdVO) {
    const product =
      this.products.find(
        (product) => product.getId().getValue() === id.getValue()
      ) ?? null;

    return product;
  }
}

export { InMemoryProductRepository };
