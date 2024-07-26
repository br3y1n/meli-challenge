import { useGoHome } from "@hooks/useGoHome";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const useHeaderState = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const { goHome, router } = useGoHome();

  const [query, setQuery] = useState(search ?? "");

  const showItems = () => {
    router.push(`/items?search=${query}`);
  };

  useEffect(() => {
    if (search !== query) {
      setQuery(search ?? "");
    }
  }, [search]);

  return { goHome, showItems, query, setQuery };
};

export { useHeaderState };
