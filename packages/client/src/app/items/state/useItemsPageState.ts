import { useAllItems } from "@api/getAllItems";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { useForm } from "react-hook-form";

const defaultFormValues = {
  limit: 4,
  currentPage: 1,
  category: "",
};

const useItemsPageState = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const searchCategory = searchParams.get("category");
  const router = useRouter();

  const goToItem = (id: string) => {
    router.push(`/items/${id}`);
  };

  const { watch, control, setValue } = useForm({
    mode: "all",
    defaultValues: {
      sort: "relevance",
      ...defaultFormValues,
      category: searchCategory ?? "",
    },
  });

  const limit = watch("limit");
  const sort = watch("sort");
  const category = watch("category");
  const currentPage = watch("currentPage");

  const filters = new URLSearchParams({
    offset: (currentPage - 1) * limit,
    q: search ?? "",
    limit,
    sort,
    category,
  } as any).toString();

  const { data, isLoading, error } = useAllItems({ filters });

  const breadcrumbs = useMemo(
    () =>
      (data?.categories ?? []).map(({ name, id }) => ({
        label: name,
        onClick: () => {
          setValue("limit", defaultFormValues.limit);
          setValue("currentPage", defaultFormValues.currentPage);
          setValue("category", id);
          router.push("/items?search=");
        },
      })),
    [data?.categories]
  );

  const numberPages = useMemo(
    () => Math.ceil((data?.pagination.max_items ?? 0) / limit),
    [data?.pagination.max_items, limit]
  );

  const items = useMemo(
    () =>
      (data?.items ?? []).map(
        ({ id, picture, title, price: { amount }, free_shipping }) => ({
          price: amount,
          title,
          image: picture,
          id,
          freeShipping: free_shipping,
        })
      ),

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
    isLoading,
    error,
  };
};

export { useItemsPageState };
