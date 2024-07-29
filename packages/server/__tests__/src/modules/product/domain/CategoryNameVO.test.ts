import { CategoryNameVO } from "@modules/product/domain";

describe("CategoryNameVO tests:", () => {
  it("should create an instance of CategoryNameVO with a string value", () => {
    const value = "Electronics";
    const categoryName = new CategoryNameVO(value);

    expect(categoryName).toBeInstanceOf(CategoryNameVO);
    expect(categoryName.getValue()).toBe(value);
  });
});
