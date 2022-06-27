import React from "react";
import Header from "../../components/Header/Header";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import "./Products.css";

export default function Products() {
  return (
    <div>
      <Header />
      <h1 className="titulo">Listado de productos</h1>
      <ItemListContainer />
    </div>
  );
}
