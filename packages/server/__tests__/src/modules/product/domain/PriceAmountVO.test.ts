import { PriceAmountVO } from "@modules/product/domain";

describe("PriceAmountVO tests:", () => {
  it("should create an instance of PriceAmountVO with a number value", () => {
    const value = 123.45;
    const priceAmount = new PriceAmountVO(value);

    expect(priceAmount).toBeInstanceOf(PriceAmountVO);
    expect(priceAmount.getValue()).toBe(value);
  });
});
