// import React, { useEffect, useContext, useState } from "react";
// import { GlobalContext } from "../Context/GlobalContext";
// import { useNavigate} from "react-router-dom";


// const Fetch = () => {
//   const [movies2, setMovies2] = useState([]);

//   const ctx = useContext(GlobalContext);
//   let urlLocal = "http://localhost:8080/movies";

//   useEffect(() =>{
//     ctx.setQuery("")
//     fetch(url)
//     .then(res => res.json())
//     .then(data => ctx.setMovies(data))
//     .catch(err => console.error(err))
//   }, [])

//   return (
//     <>

//   </>
//   )
// }

// export default Fetch