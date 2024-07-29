import { ProductTitleVO } from "@modules/product/domain";

describe("ProductTitleVO tests:", () => {
  it("should create an instance with a defined string value", () => {
    const title = new ProductTitleVO("Sample Product Title");

    expect(title).toBeInstanceOf(ProductTitleVO);

    expect(title.getValue()).toBe("Sample Product Title");
  });

  it("should handle an empty string", () => {
    const title = new ProductTitleVO("");

    expect(title).toBeInstanceOf(ProductTitleVO);

    expect(title.getValue()).toBe("");
  });
});
