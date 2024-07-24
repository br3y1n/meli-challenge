import { ValueObject } from "@/shared/domain/ValueObject";

class ProductSoldQuantityVO extends ValueObject<number | undefined> {
  constructor(value?: number) {
    super(value);
  }
}

export { ProductSoldQuantityVO };
