import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import 'bootstrap';

import NavBar from "./NavBar";


import LandingPage from "./LandingPage";
import SearchResults from "./SearchResults";
import Movies from "./Movies";

import { ContextProvider, GlobalContext } from "../Context/GlobalContext";


function App() {
  return (
    <ContextProvider>
      <Router>
        <NavBar/>
        <LandingPage/>
        <Routes>
          <Route path="/" element={<Movies/>}/>
          <Route path="/results" element={<SearchResults/>}/>
        </Routes>
      </Router>
    </ContextProvider>
  );
}

export default App;

{/* <Routes>
  <Route path="/details/:id" element={<Details product={product}/>}/>
</Routes> */}

{/* <Link to={`/details/${item.id}`}>
<img src={item.img} />
</Link> */}

{/* <Router>
  <Routes>
    <Route path="/cat" element={<CatComponent/>}/>
    <Route path="/dog" element={<DogCompnent/>}/>
    <Route path="/gerbil" element={<GerbilComponent/>}/>
  </Routes>
</ Router> */}

// <Router>
// <div>
//   <ul>
//     <li>
//       <Link to="/home">Home Page</Link>
//     </li>
//     <li>
//       <Link to="/menu">Menu</Link>
//     </li>
//   </ul>

//   <Routes>
//     <Route path="/home" element={<Home/>}/>
//     /* CODE GOES HERE */
//   </Routes>
// </div>
// </Router>

{/* <Routes>
  <Route path="/details/:id" element={<Details product={product}/>}/>
</Routes> */}