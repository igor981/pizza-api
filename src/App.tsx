import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Restaurants from './pages/Restaurants';
import Restaurant from './pages/Restaurant';
import './App.css';
import Cart from './pages/Cart';

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <main>
      <div className='content'>
      <Routes>
         <Route  path="/*" element={<Home />} /> 
         <Route  path="/restaurants" element={<Restaurants/>} /> 
         <Route  path="/restaurant/:id" element={<Restaurant />} /> 
         <Route  path="/cart" element={<Cart />} /> 
       </Routes>
      </div>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
