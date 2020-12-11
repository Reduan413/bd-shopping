import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navber from './components/Navbar';
import ProductsContextProvider from './Global/ProductsContext'
import Products  from './components/Products'
import Cart from './components/Cart'
import NotFound from  './components/NotFound'

function App() {
  return (
    <div>
      <ProductsContextProvider>
      <Router>
        <Navber/>
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/cart" exact component={Cart} />
          <Route component={NotFound} />
        </Switch>
      </Router>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
