import { ValueObject } from "@/shared/domain/ValueObject";

class ProductDescriptionVO extends ValueObject<string | undefined> {
  constructor(value?: string) {
    super(value);
  }
}

export { ProductDescriptionVO };
