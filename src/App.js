import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "./components/Context/CartContext";
import Home from "./views/Home/Home";
import Cart from "./views/Cart/Cart";
import Products from "./views/Products/Products";
import Category from "./views/Category/Category";
import Product from "./views/Product/Product";
import Contacto from "./views/Contacto/Contacto";
import Nosotros from "./views/Nosotros/Nosotros";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route exact path="*" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/product/:productId" element={<Product />} />
          <Route exact path="/category/:categoryId" element={<Category />} />
          <Route exact path="/nosotros" element={<Nosotros />} />
          <Route exact path="/contacto" element={<Contacto />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
