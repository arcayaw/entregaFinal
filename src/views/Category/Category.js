import React from "react";
import Header from "../../components/Header/Header";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom";
import "./Category.css";
export default function Category() {
  const { categoryId } = useParams();
  console.log(categoryId);
  return (
    <div>
      <Header />
      <h1 className="titulo">Listado de productos</h1>
      <ItemListContainer categoryId={categoryId} />
    </div>
  );
}
