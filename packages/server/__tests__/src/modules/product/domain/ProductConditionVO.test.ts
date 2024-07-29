import { ProductConditionVO } from "@modules/product/domain";

describe("ProductConditionVO tests:", () => {
  it("should create an instance of ProductConditionVO with the correct value", () => {
    const value = "new";
    const condition = new ProductConditionVO(value);

    expect(condition).toBeInstanceOf(ProductConditionVO);

    expect(condition.getValue()).toBe(value);
  });
});
