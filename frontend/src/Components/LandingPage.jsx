import React, { useEffect, useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";

import SearchBar from './SearchBar'

 const LandingPage = () => {
  const ctx = useContext(GlobalContext)  
  
  let urlLocal = "http://localhost:8080/movies";
  
  useEffect(() => {
    ctx.setQuery("")

      fetch(urlLocal)
      .then(res => res.json())
      .then(data => ctx.setMovies(data))
      .catch(err => console.error(err))

  }, []);





  return (
    <div>
    <SearchBar/>
      
    </div>
  )
}

export default LandingPage