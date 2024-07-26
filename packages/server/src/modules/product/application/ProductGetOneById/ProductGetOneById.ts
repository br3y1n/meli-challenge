import {
  IProductRepository,
  ProductNoFoundError,
} from "@modules/product/domain";

class ProductGetOneById {
  constructor(private _repository: IProductRepository) {}

  async run(id: string) {
    const product = await this._repository.getOneById(id);

    if (!product) throw new ProductNoFoundError("Product no found");

    return product;
  }
}

export { ProductGetOneById };
