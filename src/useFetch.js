import React, { useState, useEffect } from "react";

const API_LINK = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

export const useFetch = query => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ display: false, msg: "" });
  const [fetchedData, setFetchedData] = useState(null);

  const fetchData = async url => {
    try {
      const response = await fetch(url);
      const fetchData = await response.json();
      setFetchedData(fetchData);
    } catch (error) {
      console.log(error);
      setError({ display: true, msg: error });
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData(`${API_LINK}${query}`);
  }, [query]);

  return { isLoading, error, fetchedData };
};
