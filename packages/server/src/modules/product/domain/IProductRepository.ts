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
  sort: ProductSortEnum;
}

interface IProductRepository {
  getOneById: (id: string) => Promise<Product | null>;
  getAll: (filters: ProductsFilters) => Promise<{
    pagination: Pagination;
    products: Product[];
    categories: Category[];
  }>;
}

export { IProductRepository, ProductsFilters, ProductSortEnum };
