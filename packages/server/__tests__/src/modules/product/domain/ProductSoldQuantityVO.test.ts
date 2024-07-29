import { ProductSoldQuantityVO } from "@modules/product/domain";

describe("ProductSoldQuantityVO tests:", () => {
  it("should create an instance with a defined value", () => {
    const quantity = new ProductSoldQuantityVO(10);

    expect(quantity).toBeInstanceOf(ProductSoldQuantityVO);

    expect(quantity.getValue()).toBe(10);
  });

  it("should create an instance with an undefined value", () => {
    const quantity = new ProductSoldQuantityVO();

    expect(quantity).toBeInstanceOf(ProductSoldQuantityVO);

    expect(quantity.getValue()).toBeUndefined();
  });
});
