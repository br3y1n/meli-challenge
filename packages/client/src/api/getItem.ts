import { useQuery } from "@tanstack/react-query";

import { meliClient } from "@lib/Axios";
import { ExtractFnReturnType, QueryConfig } from "@lib/ReactQuery";
import { ICategory, IItem } from "./getAllItems";
import { queryKeys } from "./queryKeys";

type TItem = IItem & { sold_quantity: number; description: string };

interface GetItemParams {
  id: string;
}

const getItem = ({
  id,
}: GetItemParams): Promise<{ item: TItem; categories: ICategory[] }> =>
  meliClient.get(`/items/${id}`).then(({ data }) => data);

type QueryFnType = typeof getItem;

interface UseItemParams {
  id: string | null;
  config?: QueryConfig<QueryFnType>;
}

const useItem = ({ id, config = {} }: UseItemParams) =>
  useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    enabled: !!id,
    queryKey: queryKeys.item(id!),
    queryFn: () => getItem({ id: id! }),
  });

export { useItem };
export type { GetItemParams };
