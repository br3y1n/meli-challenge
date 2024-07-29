import { IProductRepository } from "@modules/product/domain";

class ProductGetOneById {
  constructor(private _repository: IProductRepository) {}

  async run(id: string) {
    return await this._repository.getOneById(id);
  }
}

export { ProductGetOneById };
