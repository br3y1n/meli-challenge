import { PaginationLimitVO } from "@/shared/domain";

describe("PaginationLimitVO tests:", () => {
  it("should create a PaginationLimitVO instance with a given value", () => {
    const limitValue = 10;
    const paginationLimit = new PaginationLimitVO(limitValue);

    expect(paginationLimit).toBeInstanceOf(PaginationLimitVO);
    expect(paginationLimit.getValue()).toEqual(limitValue);
  });

  it("should throw an error if a negative value is provided", () => {
    const negativeValue = -5;
    expect(() => new PaginationLimitVO(negativeValue)).toThrow(
      "Invalid value for PaginationLimitVO"
    );
  });

  it("should throw an error if a non-numeric value is provided", () => {
    const invalidValue: any = "invalid";
    expect(() => new PaginationLimitVO(invalidValue)).toThrow(
      "Invalid value for PaginationLimitVO"
    );
  });
});
