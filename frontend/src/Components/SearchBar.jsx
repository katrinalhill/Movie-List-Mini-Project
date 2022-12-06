import React, { useContext } from "react";

import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import { GlobalContext } from "../Context/GlobalContext";
import { useNavigate} from "react-router-dom";



const SearchBar = () => {
 const ctx = useContext(GlobalContext)
  const navigate = useNavigate();
  

  const handleClick= () => {
    // let query = document.getElementById("search-field").value
    navigate('/results', { replace: false });
  };

  const handleKeyUp = (e) => {
    ctx.setQuery(e.target.value)
    console.log(ctx.query)
  };

  return (
    <>

    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search"
        id="search-field"
        className="me-2"
        aria-label="Search"
        onKeyUp={handleKeyUp}
      />
      <Button onClick={handleClick} variant="outline-success" >
        Search
      </Button>
    </Form>
    </>
  );
};

export default SearchBar

  // onClick={() => {}

// <div>
// <input type="text" placeholder="Search.." className="search" />
// <button type="submit">Go</button>
// </div>

// const SearchBar = () => {

//    const navigate = useNavigate();
   
 
//   let  onHandle= () => {
//      console.log("Button Clicked")
//      let name = document.getElementById("search-field").value
//      console.log("query:", name)
 
//      // useNavigate below here
 
 
 
//      navigate(`/character/${name}`, { replace: false });
     
    
//    }

{/* <Button onClick={onHandle} variant="outline-success" >
Search
</Button> */}


  // handleClick= () => {
  //   console.log("Button Clicked")
  //   let name2 = document.getElementById("search-field").value
  //   console.log("query:", name2)

  //   // useNavigate below here
    

  // const handleClick= () => {
  //   console.log("Button Clicked")
  //   let query = document.getElementById("search-field").value
  //   console.log("query:", query)

  //   navigate('/results', { replace: false });

   
  // }

   
  // }