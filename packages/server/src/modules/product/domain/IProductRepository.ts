import { Pagination } from "@/shared/domain";
import { Category } from "./CategoryEntity";
import { Product } from "./ProductEntity";

enum ProductSortEnum {
  PRICE_ASC = "price_asc",
  PRICE_DESC = "price_dsc",
  RELEVANCE = "relevance",
}

interface ProductsFilters {
  query: string;
  offset: string;
  limit: string;
  category: string;
  sort: ProductSortEnum;
}

interface IProductRepository {
  getOneById: (
    id: string
  ) => Promise<{ product: Product; categories: Category[] }>;
  getAll: (filters: ProductsFilters) => Promise<{
    pagination: Pagination;
    products: Product[];
    categories: Category[];
  }>;
}

export { IProductRepository, ProductsFilters, ProductSortEnum };
