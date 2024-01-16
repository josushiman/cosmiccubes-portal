import { useState, useEffect, useCallback } from "react";

const useFetchData = (url, dependencies) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  url = getRoute(url);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchData, ...dependencies]);

  return { data, loading, error };
};

const getRoute = (resource) => {
  const BASE_URL = import.meta.env.VITE_JSON_SERVER_URL;

  return `${BASE_URL}${resource}`;
};

const useAsync = (fetchData, dependencies = []) => {
  return useFetchData(fetchData, dependencies);
};

export default useAsync;
