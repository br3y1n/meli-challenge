import {
  ProductGetAllByTitle,
  ProductGetOneById,
} from "@modules/product/application";
// import { InMemoryProductRepository } from "@modules/product/infrastructure/InMemoryProductRepository";
import { MeliApiProductRepository } from "@modules/product/infrastructure/MeliApiProductRepository";

// const productRepository = new InMemoryProductRepository();
const productRepository = new MeliApiProductRepository();

const ServiceContainer = {
  product: {
    getAllByTitle: new ProductGetAllByTitle(productRepository),
    getOneById: new ProductGetOneById(productRepository),
  },
};

export { ServiceContainer };
