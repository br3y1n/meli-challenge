import { useRouter } from "next/navigation";

const useGoHome = () => {
  const router = useRouter();

  const goHome = () => {
    router.push("/");
  };

  return { router, goHome };
};

export { useGoHome };
