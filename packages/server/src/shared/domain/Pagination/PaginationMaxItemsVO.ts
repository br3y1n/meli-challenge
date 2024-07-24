import { ValueObject } from "@/shared/domain/ValueObject";

class PaginationMaxItemsVO extends ValueObject<number> {
  constructor(value: number) {
    super(value);
  }
}

export { PaginationMaxItemsVO };
