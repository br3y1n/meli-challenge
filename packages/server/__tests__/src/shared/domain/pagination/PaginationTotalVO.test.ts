import { PaginationTotalVO } from "@/shared/domain";

describe("PaginationTotalVO tests:", () => {
  it("should create a PaginationTotalVO instance with a given value", () => {
    const totalValue = 1000;
    const paginationTotal = new PaginationTotalVO(totalValue);

    expect(paginationTotal).toBeInstanceOf(PaginationTotalVO);
    expect(paginationTotal.getValue()).toBe(totalValue);
  });

  it("should throw an error if a negative value is provided", () => {
    const negativeValue = -1;
    expect(() => new PaginationTotalVO(negativeValue)).toThrow(
      "Invalid value for PaginationTotalVO"
    );
  });

  it("should throw an error if a non-numeric value is provided", () => {
    const invalidValue: any = "invalid";
    expect(() => new PaginationTotalVO(invalidValue)).toThrow(
      "Invalid value for PaginationTotalVO"
    );
  });
});
