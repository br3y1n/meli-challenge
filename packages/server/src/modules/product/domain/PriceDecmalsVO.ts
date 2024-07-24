import { ValueObject } from "@/shared/domain/ValueObject";

class PriceDecmalsVO extends ValueObject<number> {
  constructor(value: number) {
    super(value);
  }
}

export { PriceDecmalsVO };
