import {
  IProductRepository,
  Product,
  ProductIdVO,
  ProductNoFoundError,
} from "@modules/product/domain";

class ProductGetOneById {
  constructor(private _repository: IProductRepository) {}

  async run(id: string): Promise<Product> {
    const product = await this._repository.getOneById(new ProductIdVO(id));

    if (!product) throw new ProductNoFoundError("Product no found");

    return product;
  }
}

export { ProductGetOneById };
