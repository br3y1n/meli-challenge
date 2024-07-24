import { ValueObject } from "@/shared/domain/ValueObject";

class ProductCategoryIdVO extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}

export { ProductCategoryIdVO };
