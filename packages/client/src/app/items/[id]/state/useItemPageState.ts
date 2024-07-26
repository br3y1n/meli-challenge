import { useItem } from "@api/getItem";
import { useParams, useRouter } from "next/navigation";
import { useMemo, useState } from "react";

const conditionMap: Record<string, string> = {
  new: "Nuevo",
  old: "Usado",
};

const useItemPageState = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useItem({ id });
  const router = useRouter();
  const [redirecting, setRedirecting] = useState(false);
  const [success, setSucess] = useState(false);

  const item = useMemo(
    () =>
      !data?.item
        ? null
        : {
            title: data.item.title,
            description: data.item.description,
            price: {
              amount: data.item.price.amount,
              decimals: data.item.price.decimals,
            },
            condition: conditionMap[data.item.condition] ?? data.item.condition,
            image: data.item.picture,
            freeShipping: data.item.free_shipping,
          },
    [data?.item]
  );

  const breadcrumbs = useMemo(
    () =>
      (data?.categories ?? []).map(({ name, id }) => ({
        label: name,
        onClick: () => {
          router.push(`/items?category=${id}`);
        },
      })),
    [data?.categories]
  );

  const hasItem = item !== null;

  const goSuccess = () => {
    setRedirecting(true);
    setTimeout(() => {
      setSucess(true);
    }, 2000);
  };

  return {
    hasItem,
    item,
    breadcrumbs,
    redirecting,
    goSuccess,
    isLoading,
    error,
    success,
  };
};

export { useItemPageState };
