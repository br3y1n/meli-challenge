import { meliClient } from "@lib/Axios";
import { ExtractFnReturnType, QueryConfig } from "@lib/ReactQuery";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "./queryKeys";

interface IItem {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
}

interface Pagination {
  offset: number;
  total: number;
  max_items: number;
  limit: number;
}

interface ICategory {
  id: string;
  name: string;
}

interface IAllItemsResponse {
  categories: ICategory[];
  items: IItem[];
  pagination: Pagination;
}

interface GetAllItemsParams {
  filters: string;
}

const getAllItems = ({
  filters,
}: GetAllItemsParams): Promise<IAllItemsResponse> =>
  meliClient.get(`/items?${filters}`).then(({ data }) => data);

type QueryFnType = typeof getAllItems;

interface UseAllItemsParams {
  filters: string;
  config?: QueryConfig<QueryFnType>;
}

const useAllItems = ({ filters, config = {} }: UseAllItemsParams) =>
  useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: queryKeys.items(filters),
    queryFn: () => getAllItems({ filters }),
  });

export { useAllItems };
export type { GetAllItemsParams, IItem, ICategory };
