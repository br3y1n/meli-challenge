import {
  Price,
  PriceAmountVO,
  PriceCurrencyVO,
  PriceDecimalsVO,
  ProductPriceVO,
} from "@modules/product/domain";

describe("ProductPriceVO tests:", () => {
  it("should create an instance with a valid Price value", () => {
    const price = new Price(
      new PriceCurrencyVO("USD"),
      new PriceAmountVO(100),
      new PriceDecimalsVO(2)
    );

    const productPrice = new ProductPriceVO(price);

    expect(productPrice).toBeInstanceOf(ProductPriceVO);

    expect(productPrice.getValue()).toBe(price);
  });

  it("should handle different Price values", () => {
    const price1 = new Price(
      new PriceCurrencyVO("EUR"),
      new PriceAmountVO(200),
      new PriceDecimalsVO(2)
    );
    const price2 = new Price(
      new PriceCurrencyVO("GBP"),
      new PriceAmountVO(150),
      new PriceDecimalsVO(1)
    );

    const productPrice1 = new ProductPriceVO(price1);
    const productPrice2 = new ProductPriceVO(price2);

    expect(productPrice1).toBeInstanceOf(ProductPriceVO);
    expect(productPrice2).toBeInstanceOf(ProductPriceVO);

    expect(productPrice1.getValue()).toBe(price1);
    expect(productPrice2.getValue()).toBe(price2);
  });
});
