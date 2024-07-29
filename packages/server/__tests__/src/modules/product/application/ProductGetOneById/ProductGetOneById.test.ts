import { ProductGetOneById } from "@modules/product/application";
import { InMemoryProductRepository } from "@modules/product/infrastructure/InMemoryProductRepository";

describe("ProductGetOneById tests:", () => {
  it("When run is called, then getOneById is called from repository", () => {
    const repository = new InMemoryProductRepository();
    const id = "132";

    const mock = jest.spyOn(repository, "getOneById");

    new ProductGetOneById(repository).run("132");

    expect(mock).toHaveBeenCalledWith(id);
  });
});
