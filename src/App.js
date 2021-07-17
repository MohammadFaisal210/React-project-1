import React from "react";
import { Switch, Route } from "react-router";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import Cart from "./Components/cart/Cart";
import Default from "./Components/Default";
import Product from "./Components/Product";
import Details from "./Components/Details";
import Modal from "./Components/Modal";
import Footer from "./Footer";



const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/details" component={Details} />
        <Route component={Default} />
      </Switch>
        <Modal/>
        <Footer/>
    </>
  )
}
export default App;