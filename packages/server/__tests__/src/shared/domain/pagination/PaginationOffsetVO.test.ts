import { PaginationOffsetVO } from "@/shared/domain";

describe("PaginationOffsetVO  tests:", () => {
  it("should create a PaginationOffsetVO instance with a given value", () => {
    const offsetValue = 10;
    const paginationOffset = new PaginationOffsetVO(offsetValue);

    expect(paginationOffset).toBeInstanceOf(PaginationOffsetVO);
    expect(paginationOffset.getValue()).toBe(offsetValue);
  });

  it("should throw an error if a negative value is provided", () => {
    const negativeValue = -5;
    expect(() => new PaginationOffsetVO(negativeValue)).toThrow(
      "Invalid value for PaginationOffsetVO"
    );
  });

  it("should throw an error if a non-numeric value is provided", () => {
    const invalidValue: any = "invalid";
    expect(() => new PaginationOffsetVO(invalidValue)).toThrow(
      "Invalid value for PaginationOffsetVO"
    );
  });
});
