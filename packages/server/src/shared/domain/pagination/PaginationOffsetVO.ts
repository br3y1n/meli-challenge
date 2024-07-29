import { ValueObject } from "@/shared/domain/ValueObject";

class PaginationOffsetVO extends ValueObject<number> {
  constructor(value: number) {
    super(value);
    this._validate(value);
  }

  private _validate(value: number): void {
    if (typeof value !== "number" || value < 0) {
      throw new Error("Invalid value for PaginationOffsetVO");
    }
  }
}

export { PaginationOffsetVO };
