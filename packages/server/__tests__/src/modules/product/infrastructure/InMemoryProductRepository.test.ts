import { ProductsFilters, ProductSortEnum } from "@modules/product/domain";
import { InMemoryProductRepository } from "@modules/product/infrastructure/InMemoryProductRepository";

describe("InMemoryProductRepository tests:", () => {
  let repository: InMemoryProductRepository;

  beforeEach(() => {
    repository = new InMemoryProductRepository();
  });

  it("should return all products filtered by query", async () => {
    const filters: ProductsFilters = {
      limit: "10",
      offset: "0",
      query: "Cepillo",
      sort: ProductSortEnum.RELEVANCE,
      category: "",
    };

    const result = await repository.getAll(filters);

    expect(result.products).toHaveLength(1);
    expect(result.products[0].getTitle().getValue()).toBe("Cepillo");
  });

  it("should return all products with pagination", async () => {
    const filters: ProductsFilters = {
      limit: "10",
      offset: "0",
      query: "",
      sort: ProductSortEnum.RELEVANCE,
      category: "",
    };

    const result = await repository.getAll(filters);

    expect(result.pagination.getTotal().getValue()).toBe(3);
    expect(result.pagination.getLimit().getValue()).toBe(10);
    expect(result.pagination.getOffset().getValue()).toBe(0);
  });

  it("should return product by id", async () => {
    const id = "123";

    const result = await repository.getOneById(id);

    expect(result.product.getId().getValue()).toBe(id);
    expect(result.product.getTitle().getValue()).toBe("Cepillo");
  });

  it("should return undefined for non-existent product id", async () => {
    const id = "non-existent-id";

    const result = await repository.getOneById(id);

    expect(result.product).toBeUndefined();
  });
});
