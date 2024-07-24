class ValueObject<T> {
  private readonly _value: T;

  constructor(value: T) {
    this._value = value;
  }

  public getValue() {
    return this._value;
  }
}

export { ValueObject };
