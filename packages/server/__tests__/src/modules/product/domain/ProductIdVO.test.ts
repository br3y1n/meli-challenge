import { ProductIdVO } from "@modules/product/domain";

describe("ProductIdVO tests:", () => {
  it("should create an instance with a valid string value", () => {
    const value = "12345";
    const productId = new ProductIdVO(value);

    expect(productId).toBeInstanceOf(ProductIdVO);

    expect(productId.getValue()).toBe(value);
  });

  it("should throw an error when creating an instance with an empty string", () => {
    expect(() => new ProductIdVO("")).toThrow("ProductId cannot be empty");
  });

  it("should throw an error when creating an instance with a string containing only whitespace", () => {
    expect(() => new ProductIdVO("   ")).toThrow("ProductId cannot be empty");
  });
});
