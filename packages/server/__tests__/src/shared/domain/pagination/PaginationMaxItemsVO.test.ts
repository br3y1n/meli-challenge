import { PaginationMaxItemsVO } from "@/shared/domain";

describe("PaginationMaxItemsVO tests:", () => {
  it("should create a PaginationMaxItemsVO instance with a given value", () => {
    const maxItemsValue = 100;
    const paginationMaxItems = new PaginationMaxItemsVO(maxItemsValue);

    expect(paginationMaxItems).toBeInstanceOf(PaginationMaxItemsVO);
    expect(paginationMaxItems.getValue()).toBe(maxItemsValue);
  });

  it("should throw an error if a negative value is provided", () => {
    const negativeValue = -5;
    expect(() => new PaginationMaxItemsVO(negativeValue)).toThrow(
      "Invalid value for PaginationMaxItemsVO"
    );
  });

  it("should throw an error if a non-numeric value is provided", () => {
    const invalidValue: any = "invalid";

    expect(() => new PaginationMaxItemsVO(invalidValue)).toThrow(
      "Invalid value for PaginationMaxItemsVO"
    );
  });
});
