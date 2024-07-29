import {
  Pagination,
  PaginationLimitVO,
  PaginationMaxItemsVO,
  PaginationOffsetVO,
  PaginationTotalVO,
} from "@/shared/domain";

describe("Pagination tests:", () => {
  let pagination: Pagination;

  beforeEach(() => {
    const maxItems = new PaginationMaxItemsVO(100);
    const limit = new PaginationLimitVO(10);
    const offset = new PaginationOffsetVO(0);
    const total = new PaginationTotalVO(1000);

    pagination = new Pagination(maxItems, limit, offset, total);
  });

  it("should return the correct limit", () => {
    expect(pagination.getLimit()).toBeInstanceOf(PaginationLimitVO);
    expect(pagination.getLimit().getValue()).toBe(10);
  });

  it("should return the correct max items", () => {
    expect(pagination.getMaxItems()).toBeInstanceOf(PaginationMaxItemsVO);
    expect(pagination.getMaxItems().getValue()).toBe(100);
  });

  it("should return the correct offset", () => {
    expect(pagination.getOffset()).toBeInstanceOf(PaginationOffsetVO);
    expect(pagination.getOffset().getValue()).toBe(0);
  });

  it("should return the correct total", () => {
    expect(pagination.getTotal()).toBeInstanceOf(PaginationTotalVO);
    expect(pagination.getTotal().getValue()).toBe(1000);
  });
});
