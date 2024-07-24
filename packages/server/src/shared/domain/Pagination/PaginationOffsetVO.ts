import { ValueObject } from "@/shared/domain/ValueObject";

class PaginationOffsetVO extends ValueObject<number> {
  constructor(value: number) {
    super(value);
  }
}

export { PaginationOffsetVO };
