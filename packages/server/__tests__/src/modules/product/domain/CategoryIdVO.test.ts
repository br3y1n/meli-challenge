import { CategoryIdVO } from "@modules/product/domain";

describe("CategoryIdVO tests:", () => {
  it("should create an instance of CategoryIdVO with a string value", () => {
    const value = "123";
    const categoryId = new CategoryIdVO(value);

    expect(categoryId).toBeInstanceOf(CategoryIdVO);
    expect(categoryId.getValue()).toBe(value);
  });
});
