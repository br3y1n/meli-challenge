import {
  Price,
  PriceAmountVO,
  PriceCurrencyVO,
  PriceDecimalsVO,
} from "@modules/product/domain";

describe("Price tests:", () => {
  it("should create an instance of Price and return the correct values", () => {
    const currency = new PriceCurrencyVO("USD");
    const amount = new PriceAmountVO(100);
    const decimals = new PriceDecimalsVO(2);

    const price = new Price(currency, amount, decimals);

    expect(price).toBeInstanceOf(Price);

    expect(price.getCurrency()).toBe(currency);
    expect(price.getAmount()).toBe(amount);
    expect(price.getDecimals()).toBe(decimals);
  });
});
