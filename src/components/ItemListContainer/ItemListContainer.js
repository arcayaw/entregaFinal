import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import React from "react";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";

export default function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const queryCollection = collection(db, "items");
    // where("category_id", "==", categoryId);
    const queryCollectionFilter = categoryId
      ? query(queryCollection, where("categoryId", "==", categoryId))
      : queryCollection;

    getDocs(queryCollectionFilter)
      .then((resp) =>
        setItems(
          resp.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      )
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setCargando(false));
  }, [categoryId]);

  return (
    <>
      <Container className="itemlist-container">
        {cargando ? (
          <Loader animation="border" role="status" />
        ) : (
          <ItemList items={items} />
        )}
      </Container>
    </>
  );
}
