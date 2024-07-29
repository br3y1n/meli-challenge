import { PaginationLimitVO } from "./PaginationLimitVO";
import { PaginationMaxItemsVO } from "./PaginationMaxItemsVO";
import { PaginationOffsetVO } from "./PaginationOffsetVO";
import { PaginationTotalVO } from "./PaginationTotalVO";

class Pagination {
  constructor(
    private readonly _maxItems: PaginationMaxItemsVO,
    private readonly _limit: PaginationLimitVO,
    private readonly _offset: PaginationOffsetVO,
    private readonly _total: PaginationTotalVO
  ) {}

  public getLimit() {
    return this._limit;
  }

  public getMaxItems() {
    return this._maxItems;
  }

  public getOffset() {
    return this._offset;
  }

  public getTotal() {
    return this._total;
  }
}

export { Pagination };
