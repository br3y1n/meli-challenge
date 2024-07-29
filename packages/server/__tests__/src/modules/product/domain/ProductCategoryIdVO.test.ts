import { ProductCategoryIdVO } from "@modules/product/domain";

describe("ProductCategoryIdVO tests:", () => {
  it("should create an instance of ProductCategoryIdVO with the correct value", () => {
    const value = "category-id-123";
    const categoryId = new ProductCategoryIdVO(value);

    expect(categoryId).toBeInstanceOf(ProductCategoryIdVO);

    expect(categoryId.getValue()).toBe(value);
  });
});
