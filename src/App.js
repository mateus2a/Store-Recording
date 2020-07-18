import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import logo from './logo.svg'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Product from './components/Product'
import Cart from './components/Cart'
import Default from './components/Default'
import Details from './components/Details';

class App extends Component {
  render() {
    return(
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/details" component={Details}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/" component={ProductList}></Route>
          <Route component={Default}></Route>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
