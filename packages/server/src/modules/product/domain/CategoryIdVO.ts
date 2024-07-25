import { ValueObject } from "@/shared/domain/ValueObject";

class CategoryIdVO extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}

export { CategoryIdVO };
