import { ProductGetAll, ProductGetOneById } from "@modules/product/application";
// import { InMemoryProductRepository } from "@modules/product/infrastructure/InMemoryProductRepository";
import { MeliApiProductRepository } from "@modules/product/infrastructure/MeliApiProductRepository";

// const productRepository = new InMemoryProductRepository();
const productRepository = new MeliApiProductRepository();

const ServiceContainer = {
  product: {
    getAll: new ProductGetAll(productRepository),
    getOneById: new ProductGetOneById(productRepository),
  },
};

export { ServiceContainer };
