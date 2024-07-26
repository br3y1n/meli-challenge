import {
  DefaultOptions,
  QueryClient,
  UseInfiniteQueryOptions,
  UseMutationOptions,
  UseQueryOptions,
} from "@tanstack/react-query";
import { AxiosError } from "axios";

const defaultOptions: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: Infinity,
  },
};

const queryClient = new QueryClient({ defaultOptions });

type ExtractFnReturnType<FnType extends (...args: any) => any> = Awaited<
  ReturnType<FnType>
>;

type QueryConfig<QueryFnType extends (...args: any) => any> = Omit<
  UseQueryOptions<ExtractFnReturnType<QueryFnType>>,
  "queryKey" | "queryFn"
>;

type InfiniteQueryConfig<QueryFnType extends (...args: any) => any> = Omit<
  UseInfiniteQueryOptions<ExtractFnReturnType<QueryFnType>>,
  "queryKey" | "queryFn"
>;

type MutationConfig<MutationFnType extends (...args: any) => any> =
  UseMutationOptions<
    ExtractFnReturnType<MutationFnType>,
    AxiosError,
    Parameters<MutationFnType>[0]
  >;

export { queryClient };
export type {
  ExtractFnReturnType,
  InfiniteQueryConfig,
  MutationConfig,
  QueryConfig,
};
