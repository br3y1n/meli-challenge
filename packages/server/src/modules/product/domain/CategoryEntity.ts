import { CategoryIdVO } from "./CategoryIdVO";
import { CategoryNameVO } from "./CategoryNameVO";

class Category {
  constructor(
    private readonly _id: CategoryIdVO,
    private readonly _name: CategoryNameVO
  ) {}

  public getId() {
    return this._id;
  }

  public getName() {
    return this._name;
  }
}

export { Category };
