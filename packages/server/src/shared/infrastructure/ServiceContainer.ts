import {
  ProductGetAllByTitle,
  ProductGetOneById,
} from "@modules/product/application";
import { InMemoryProductRepository } from "@modules/product/infrastructure/InMemoryProductRepository";

const productRepository = new InMemoryProductRepository();

const ServiceContainer = {
  product: {
    getAllByTitle: new ProductGetAllByTitle(productRepository),
    getOneById: new ProductGetOneById(productRepository),
  },
};

export { ServiceContainer };
