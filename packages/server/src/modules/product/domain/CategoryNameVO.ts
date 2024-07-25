import { ValueObject } from "@/shared/domain/ValueObject";

class CategoryNameVO extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}

export { CategoryNameVO };
