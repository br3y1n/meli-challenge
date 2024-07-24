import { ValueObject } from "@/shared/domain/ValueObject";

class ProductDescriptionVO extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}

export { ProductDescriptionVO };
