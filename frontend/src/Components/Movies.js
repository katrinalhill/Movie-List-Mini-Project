import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import SearchBar from './SearchBar';


const Movies = () => {
  const ctx = useContext(GlobalContext)  
  


  let filteredMovies = [];

  if (ctx.query) {
    filteredMovies = ctx.movies.filter(el => {
      return el.title.toLowerCase().includes(ctx.query.toLowerCase())
    });
  }

  let moviesResults = ctx.query ? filteredMovies : ctx.movies;
  
  return (
    <>
    <div className = "movies-container">
      <div className = "movies">
        {moviesResults.map((el, i) => (
          <div key ={i}>{el.title} </div>
          
        ))}
      </div>
      </div>
    </>
  );
};

export default Movies;
