import {
  Category,
  CategoryIdVO,
  CategoryNameVO,
} from "@modules/product/domain";

describe("Category tests:", () => {
  let category: Category;

  beforeEach(() => {
    const id = new CategoryIdVO("123");
    const name = new CategoryNameVO("Electronics");

    category = new Category(id, name);
  });

  it("should create an instance with the correct properties", () => {
    expect(category).toBeInstanceOf(Category);

    expect(category.getId()).toBeInstanceOf(CategoryIdVO);
    expect(category.getName()).toBeInstanceOf(CategoryNameVO);
  });

  it("should return the correct values from getter methods", () => {
    expect(category.getId().getValue()).toBe("123");
    expect(category.getName().getValue()).toBe("Electronics");
  });
});
