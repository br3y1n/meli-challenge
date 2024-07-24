import { Pagination } from "@/shared/domain";
import { Product } from "./ProductEntity";

interface ProductsFilters {
  query: string;
  offset: string;
  limit: string;
}

interface IProductRepository {
  getOneById: (id: string) => Promise<Product | null>;
  getAll: (
    filters: ProductsFilters
  ) => Promise<{ pagination: Pagination; products: Product[] }>;
}

export { IProductRepository, ProductsFilters };
