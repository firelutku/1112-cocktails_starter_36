import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import pages
import Home_36 from './pages/Home_36';
import About_36 from './pages/About_36';
import SingleCocktail_36 from './pages/SingleCocktail_36';
import Error_36 from './pages/Error_36';
// import components
import Navbar_36 from './components/Navbar_36';
function App_36() {
  return (
    <Router>
      <Navbar_36/>
      <Routes>
        <Route path='/' element={<Home_36 />}/>
        <Route path='/about' element={<About_36 />}/>
        <Route path='/cocktail/:id' element={<SingleCocktail_36 />}/>
        <Route path='*' element={<Error_36 />}/>
      </Routes>
    </Router>
  );
}

export default App_36;
