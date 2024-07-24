import { ValueObject } from "@/shared/domain/ValueObject";

class PriceAmountVO extends ValueObject<number> {
  constructor(value: number) {
    super(value);
  }
}

export { PriceAmountVO };
