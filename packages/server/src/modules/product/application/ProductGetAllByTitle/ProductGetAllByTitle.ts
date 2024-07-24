import { IProductRepository, Product } from "@modules/product/domain";
import { ProductTitleVO } from "@modules/product/domain/ProductTitleVO";

class ProductGetAllByTitle {
  constructor(private _repository: IProductRepository) {}

  async run(title: string): Promise<Product[]> {
    return await this._repository.getAllByTitle(new ProductTitleVO(title));
  }
}

export { ProductGetAllByTitle };
