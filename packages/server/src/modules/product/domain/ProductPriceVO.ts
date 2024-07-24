import { ValueObject } from "@/shared/domain/ValueObject";
import { Price } from "./PriceEntity";

class ProductPriceVO extends ValueObject<Price> {
  constructor(value: Price) {
    super(value);
  }
}

export { ProductPriceVO };
