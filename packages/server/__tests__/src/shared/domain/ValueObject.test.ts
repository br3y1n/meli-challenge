import { ValueObject } from "@/shared/domain";

describe("ValueObject tests:", () => {
  it("should create a ValueObject instance with a given value", () => {
    const testValue = 42;
    const valueObject = new ValueObject(testValue);

    expect(valueObject).toBeInstanceOf(ValueObject);
    expect(valueObject.getValue()).toBe(testValue);
  });

  it("should create a ValueObject instance with a string value", () => {
    const testValue = "test string";
    const valueObject = new ValueObject(testValue);

    expect(valueObject).toBeInstanceOf(ValueObject);
    expect(valueObject.getValue()).toBe(testValue);
  });

  it("should create a ValueObject instance with an object value", () => {
    const testValue = { key: "value" };
    const valueObject = new ValueObject(testValue);

    expect(valueObject).toBeInstanceOf(ValueObject);
    expect(valueObject.getValue()).toEqual(testValue);
  });

  it("should create a ValueObject instance with a boolean value", () => {
    const testValue = true;
    const valueObject = new ValueObject(testValue);

    expect(valueObject).toBeInstanceOf(ValueObject);
    expect(valueObject.getValue()).toBe(testValue);
  });

  it("should create a ValueObject instance with a null value", () => {
    const testValue = null;
    const valueObject = new ValueObject(testValue);

    expect(valueObject).toBeInstanceOf(ValueObject);
    expect(valueObject.getValue()).toBeNull();
  });
});
