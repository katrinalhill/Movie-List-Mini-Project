

import React, { useState, createContext } from "react";

const GlobalContext = React.createContext();

const ContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  const [query, setQuery] = useState([]);

  const ctx = {
    movies,
    setMovies,
    query,
    setQuery
  }

  return (
    <GlobalContext.Provider value={ctx}>
      {children}
    </GlobalContext.Provider>
  )

};

export { ContextProvider, GlobalContext };