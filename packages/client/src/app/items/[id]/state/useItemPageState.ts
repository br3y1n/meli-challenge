import { useItem } from "@api/getItem";
import { useParams } from "next/navigation";
import { useMemo } from "react";

const useItemPageState = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useItem({ id });

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
            condition: data.item.condition,
            image: data.item.picture,
          },
    [data?.item]
  );

  const breadcrumbs = [
    { label: "Breadcrumb 1" },
    { label: "Breadcrumb 2" },
    { label: "Breadcrumb 3" },
  ];

  const hasItem = item !== null;

  return { hasItem, item, breadcrumbs };
};

export { useItemPageState };
