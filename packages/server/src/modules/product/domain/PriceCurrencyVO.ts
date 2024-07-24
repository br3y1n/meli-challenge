import { ValueObject } from "@/shared/domain/ValueObject";

class PriceCurrencyVO extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}

export { PriceCurrencyVO };
