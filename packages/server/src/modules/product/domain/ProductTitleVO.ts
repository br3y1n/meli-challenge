import { ValueObject } from "@/shared/domain/ValueObject";

class ProductTitleVO extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}

export { ProductTitleVO };
