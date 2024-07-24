import { ValueObject } from "@/shared/domain/ValueObject";

class ProductPictureVO extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}

export { ProductPictureVO };
