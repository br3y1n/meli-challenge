import { ValueObject } from "@/shared/domain/ValueObject";

class ProductIdVO extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}

export { ProductIdVO };
