import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CartContextProvider from "./components/Context/CartContext";
import Home from "./views/Home/Home";
import Cart from "./views/Cart/Cart";
import Products from "./views/Products/Products";
import Category from "./views/Category/Category";
import Product from "./views/Product/Product";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route exact path="*" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/product/:productId" element={<Product />} />
          <Route exact path="/category/:categoryId" element={<Category />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
