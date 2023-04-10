import React from 'react';
import './App.css';
import {Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import Product from './components/Product';

function App() {
  return (
    <div className='App bg-black'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/product/:id' element = {<Product/>} />
      </Routes>
    </div>
  );
}

export default App;
