import { Product } from "./ProductEntity";
import { ProductIdVO } from "./ProductIdVO";
import { ProductTitleVO } from "./ProductTitleVO";

interface IProductRepository {
  getOneById: (id: ProductIdVO) => Promise<Product | null>;
  getAllByTitle: (title: ProductTitleVO) => Promise<Product[]>;
}

export { IProductRepository };
