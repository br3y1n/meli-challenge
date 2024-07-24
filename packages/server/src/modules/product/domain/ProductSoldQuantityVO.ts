import { ValueObject } from "@/shared/domain/ValueObject";

class ProductSoldQuantityVO extends ValueObject<number> {
  constructor(value: number) {
    super(value);
  }
}

export { ProductSoldQuantityVO };
