import { ValueObject } from "@/shared/domain/ValueObject";

class ProductConditionVO extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}

export { ProductConditionVO };
