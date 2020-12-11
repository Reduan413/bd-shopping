import React from 'react';
import './App.css';
import Navber from './components/Navbar';
import Banner from './components/Banner'
import ProductsContextProvider from './Global/ProductsContext'
import Products  from './components/Products'

function App() {
  return (
    <div>
      <Navber/>
      <Banner/>
      <ProductsContextProvider>
        <Products/>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
