import { useEffect, useState } from "react";

export type PropsUseLoadFetch<T> = {
  fetchFunction: () => Promise<T[]>;
};

export const useLoadFetch = <T>({ fetchFunction }: PropsUseLoadFetch<T>) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const result = await fetchFunction();
        setData(result);
      } catch (err) {
        setError(err);
        setLoading(false);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      }
    };

    fetch();
  }, [fetchFunction]);

  return { data, loading, error };
};
