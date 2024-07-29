import {
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
} from "@modules/product/domain";

describe("Product tests:", () => {
  let product: Product;

  beforeEach(() => {
    const id = new ProductIdVO("123");
    const title = new ProductTitleVO("Sample Product");
    const categoryId = new ProductCategoryIdVO("456");
    const picture = new ProductPictureVO("/path/to/picture.jpg");
    const condition = new ProductConditionVO("new");
    const freeShipping = new ProductFreeShippingVO(true);
    const soldQuantity = new ProductSoldQuantityVO(100);
    const description = new ProductDescriptionVO("This is a sample product.");
    const price = new ProductPriceVO(
      new Price(
        new PriceCurrencyVO("USD"),
        new PriceAmountVO(200),
        new PriceDecimalsVO(2)
      )
    );

    product = new Product(
      id,
      title,
      categoryId,
      picture,
      condition,
      freeShipping,
      soldQuantity,
      description,
      price
    );
  });

  it("should create an instance with the correct properties", () => {
    expect(product).toBeInstanceOf(Product);

    expect(product.getId()).toBeInstanceOf(ProductIdVO);
    expect(product.getTitle()).toBeInstanceOf(ProductTitleVO);
    expect(product.getCategoryId()).toBeInstanceOf(ProductCategoryIdVO);
    expect(product.getPicture()).toBeInstanceOf(ProductPictureVO);
    expect(product.getCondition()).toBeInstanceOf(ProductConditionVO);
    expect(product.getFreeShipping()).toBeInstanceOf(ProductFreeShippingVO);
    expect(product.getSoldQuantity()).toBeInstanceOf(ProductSoldQuantityVO);
    expect(product.getDescription()).toBeInstanceOf(ProductDescriptionVO);
    expect(product.getPrice()).toBeInstanceOf(ProductPriceVO);
  });

  it("should return the correct values from getter methods", () => {
    expect(product.getId().getValue()).toBe("123");
    expect(product.getTitle().getValue()).toBe("Sample Product");
    expect(product.getCategoryId().getValue()).toBe("456");
    expect(product.getPicture().getValue()).toBe("/path/to/picture.jpg");
    expect(product.getCondition().getValue()).toBe("new");
    expect(product.getFreeShipping().getValue()).toBe(true);
    expect(product.getSoldQuantity().getValue()).toBe(100);
    expect(product.getDescription().getValue()).toBe(
      "This is a sample product."
    );

    expect(product.getPrice().getValue().getCurrency().getValue()).toBe("USD");
    expect(product.getPrice().getValue().getAmount().getValue()).toBe(200);
    expect(product.getPrice().getValue().getDecimals().getValue()).toBe(2);
  });

  it("should handle undefined values for optional fields", () => {
    const productWithUndefinedValues = new Product(
      new ProductIdVO("123"),
      new ProductTitleVO("Sample Product"),
      new ProductCategoryIdVO("456"),
      new ProductPictureVO("/path/to/picture.jpg"),
      new ProductConditionVO("new"),
      new ProductFreeShippingVO(true),
      new ProductSoldQuantityVO(),
      new ProductDescriptionVO(),
      new ProductPriceVO(
        new Price(
          new PriceCurrencyVO("USD"),
          new PriceAmountVO(200),
          new PriceDecimalsVO(2)
        )
      )
    );

    expect(
      productWithUndefinedValues.getSoldQuantity().getValue()
    ).toBeUndefined();
    expect(
      productWithUndefinedValues.getDescription().getValue()
    ).toBeUndefined();
  });
});
