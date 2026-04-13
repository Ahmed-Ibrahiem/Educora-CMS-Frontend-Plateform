import React, { createContext, useContext, useState } from "react";

type loadingContext = {
  loadingCount: number;
  startLoading: () => void;
  stopLoading: () => void;
};
type props = { children: React.ReactNode };

const globalLoadingContext = createContext<loadingContext | null>(null);

const GlobalLoadingProvider = ({ children }: props) => {
  const [loadingCount, setLoadingCount] = useState(0);

  const startLoading = () => {
    setLoadingCount((prev) => prev + 1);
  };

  const stopLoading = () => {
    setLoadingCount((prev) => prev - 1);
  };

  const value = {
    loadingCount,
    startLoading,
    stopLoading,
  };

  return (
    <globalLoadingContext.Provider value={value}>
      {children}
    </globalLoadingContext.Provider>
  );
};

export const useGlobalLoadingContext = () => {
  const context = useContext(globalLoadingContext);

  if (!context)
    throw new Error(
      "useGlobalLoadingContext must used in GlobalLoadingProvider",
    );

  return context;
};

export default GlobalLoadingProvider;
