import { ValueObject } from "@/shared/domain/ValueObject";

class PaginationTotalVO extends ValueObject<number> {
  constructor(value: number) {
    super(value);
  }
}

export { PaginationTotalVO };
