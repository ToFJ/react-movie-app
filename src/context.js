import React, { useState, useContext } from "react";
import { useFetch } from "./useFetch";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("batman");
  const { isLoading, error, fetchedData } = useFetch(`&s=${query}`);
  console.log(error);

  return (
    <AppContext.Provider value={{ isLoading, setQuery, query, error, fetchedData }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
