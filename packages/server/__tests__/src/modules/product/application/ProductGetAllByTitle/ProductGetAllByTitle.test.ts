import { ProductGetAll } from "@modules/product/application";
import { ProductSortEnum } from "@modules/product/domain";
import { InMemoryProductRepository } from "@modules/product/infrastructure/InMemoryProductRepository";

describe("ProductGetAllByTitle tests:", () => {
  it("When run is called, then getAll is called from repository", () => {
    const repository = new InMemoryProductRepository();
    const filters = {
      category: "123",
      limit: "0",
      offset: "0",
      query: "tester",
      sort: ProductSortEnum.RELEVANCE,
    };

    const mock = jest.spyOn(repository, "getAll");

    new ProductGetAll(repository).run(filters);

    expect(mock).toHaveBeenCalledWith(filters);
  });
});
