import { ProductFreeShippingVO } from "@modules/product/domain";

describe("ProductFreeShippingVO tests:", () => {
  it("should create an instance with true value", () => {
    const value = true;
    const productFreeShipping = new ProductFreeShippingVO(value);

    expect(productFreeShipping).toBeInstanceOf(ProductFreeShippingVO);

    expect(productFreeShipping.getValue()).toBe(value);
  });

  it("should create an instance with false value", () => {
    const value = false;
    const productFreeShipping = new ProductFreeShippingVO(value);

    expect(productFreeShipping).toBeInstanceOf(ProductFreeShippingVO);

    expect(productFreeShipping.getValue()).toBe(value);
  });
});
