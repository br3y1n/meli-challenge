import { ProductDescriptionVO } from "@modules/product/domain";

describe("ProductDescriptionVO tests:", () => {
  it("should create an instance with a string value", () => {
    const value = "This is a product description";
    const description = new ProductDescriptionVO(value);

    expect(description).toBeInstanceOf(ProductDescriptionVO);

    expect(description.getValue()).toBe(value);
  });

  test("should create an instance with an undefined value", () => {
    const description = new ProductDescriptionVO();

    expect(description).toBeInstanceOf(ProductDescriptionVO);

    expect(description.getValue()).toBeUndefined();
  });
});
