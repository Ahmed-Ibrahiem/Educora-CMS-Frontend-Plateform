import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useGlobalLoadingContext } from "../Contexts/GlobalLoadingContext";

type UseFetchType<T> = {
  data: T | null;
  error: string | null;
  refetch: () => void;
};

export function useFetch<T>(url: string): UseFetchType<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { startLoading, stopLoading } = useGlobalLoadingContext();

  const fetchData = useCallback(async () => {
    try {
      startLoading();
      setError(null);

      const response = await axios.get(url, {
        headers: { Accept: "application/json" },
      });

      const responseType = response.headers["Content-Type"] || "";
      if (responseType == "application/json")
        throw new Error("Unexpected Response Format");

      setData(response.data);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Server error");
      } else {
        setError("Unexpected error");
      }
    } finally {
      stopLoading();
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error, refetch: fetchData };
}
