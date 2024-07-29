import { PriceDecimalsVO } from "@modules/product/domain";

describe("PriceDecimalsVO tests:", () => {
  it("should create an instance of PriceDecimalsVO with a number value", () => {
    const value = 2;
    const priceDecimals = new PriceDecimalsVO(value);

    expect(priceDecimals).toBeInstanceOf(PriceDecimalsVO);
    expect(priceDecimals.getValue()).toBe(value);
  });
});
