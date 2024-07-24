import { ValueObject } from "@/shared/domain/ValueObject";

class ProductFreeShippingVO extends ValueObject<boolean> {
  constructor(value: boolean) {
    super(value);
  }
}

export { ProductFreeShippingVO };
