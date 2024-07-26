"use client";

import { queryClient } from "@lib/ReactQuery";
import { QueryClientProvider } from "@tanstack/react-query";

const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export { ReactQueryProvider };
