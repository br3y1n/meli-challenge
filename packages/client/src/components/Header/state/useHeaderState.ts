import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const useHeaderState = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const router = useRouter();
  const [query, setQuery] = useState(search ?? "");

  const showItems = () => {
    router.push(`/items?search=${query}`);
  };

  const goHome = () => {
    router.push("/");
  };
  return { goHome, showItems, query, setQuery };
};

export { useHeaderState };
