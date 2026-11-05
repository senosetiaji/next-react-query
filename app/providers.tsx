"use client";

import { useState, type ReactNode } from "react";
import { Provider } from "react-redux";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import { makeStore } from "@/store";

interface AppProvidersProps {
  children: ReactNode;
}

export default function AppProviders({
  children,
}: AppProvidersProps) {
  const [store] = useState(() => makeStore());

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
            gcTime: 5 * 60 * 1000,
            retry: 1,
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </Provider>
  );
}