import { ValueObject } from "@/shared/domain/ValueObject";

class PaginationLimitVO extends ValueObject<number> {
  constructor(value: number) {
    super(value);
  }
}

export { PaginationLimitVO };
