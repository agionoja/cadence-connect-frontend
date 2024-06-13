import { useFetcher } from "@remix-run/react";
import { useEffect, useState } from "react";

type Params = {
  action: string;
  method: "get" | "post" | "put" | "delete";
};

function useSearch({ action, method }: Params) {
  const fetcher = useFetcher();
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetcher.submit({ query }, { method, action });
  }, [action, fetcher, method, query]);

  return {
    fetcher,
    query,
    setQuery,
  };
}

export default useSearch;
