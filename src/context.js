import React, { useState, useContext } from "react";
import { useFetch } from "./useFetch";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("arrow");
  const { isLoading, error, fetchedData } = useFetch(`&s=${query}`);

  return <AppContext.Provider value={{ isLoading, setQuery, error, fetchedData }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
