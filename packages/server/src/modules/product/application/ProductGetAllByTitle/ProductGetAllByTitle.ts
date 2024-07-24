import { IProductRepository, ProductsFilters } from "@modules/product/domain";

class ProductGetAll {
  constructor(private _repository: IProductRepository) {}

  async run(filters: ProductsFilters) {
    return await this._repository.getAll(filters);
  }
}

export { ProductGetAll };
