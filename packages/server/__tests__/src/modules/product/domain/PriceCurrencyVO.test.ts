import { PriceCurrencyVO } from "@modules/product/domain";

describe("PriceCurrencyVO tests:", () => {
  it("should create an instance of PriceCurrencyVO with a string value", () => {
    const value = "USD";
    const priceCurrency = new PriceCurrencyVO(value);

    expect(priceCurrency).toBeInstanceOf(PriceCurrencyVO);
    expect(priceCurrency.getValue()).toBe(value);
  });
});
