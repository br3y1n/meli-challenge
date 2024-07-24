import { ValueObject } from "@/shared/domain/ValueObject";

class PriceDecimalsVO extends ValueObject<number> {
  constructor(value: number) {
    super(value);
  }
}

export { PriceDecimalsVO };
