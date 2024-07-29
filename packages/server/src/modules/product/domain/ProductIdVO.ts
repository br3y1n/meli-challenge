import { ValueObject } from "@/shared/domain/ValueObject";

class ProductIdVO extends ValueObject<string> {
  constructor(value: string) {
    super(value);
    this._validate(value);
  }

  private _validate(value: string) {
    if (!value.trim()) {
      throw new Error("ProductId cannot be empty");
    }
  }
}

export { ProductIdVO };
