import { useAllItems } from "@api/getAllItems";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { useForm } from "react-hook-form";

const useItemsPageState = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const router = useRouter();

  const goToItem = (id: string) => {
    router.push(`/items/${id}`);
  };

  const { watch, control, setValue } = useForm({
    mode: "all",
    defaultValues: {
      sort: "relevance",
      limit: 4,
      currentPage: 1,
    },
  });

  const limit = watch("limit");
  const sort = watch("sort");
  const currentPage = watch("currentPage");

  const filters = new URLSearchParams({
    offset: (currentPage - 1) * limit,
    q: search,
    limit,
    sort,
  } as any).toString();

  const { data } = useAllItems({ filters });

  const breadcrumbs = useMemo(
    () => (data?.categories ?? []).map(({ name }) => ({ label: name })),
    [data?.categories]
  );

  const numberPages = useMemo(
    () => Math.ceil((data?.pagination.max_items ?? 0) / limit),
    [data?.pagination.max_items, limit]
  );

  const items = useMemo(
    () =>
      (data?.items ?? []).map(({ id, picture, title, price: { amount } }) => ({
        price: amount,
        title,
        image: picture,
        id,
      })),

    [data?.items]
  );

  const hasItems = items.length > 0;

  return {
    hasItems,
    items,
    breadcrumbs,
    numberPages,
    control,
    goToItem,
    setValue,
  };
};

export { useItemsPageState };
