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

import "./itemListContainer.css";

export default function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();

    if (categoryId) {
      setCargando(() => {
        setCargando(false);
      }, 2000);
      const consulta = query(
        collection(db, "items"),
        where("category_id", "==", categoryId)
      );
      getDocs(consulta).then((resp) => {
        if (resp.size === 0) {
          console.log("No hay documentos");
        }
        setItems(resp.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
    } else {
      setTimeout(() => {
        setCargando(false);
      }, 2000);
      const item = collection(db, "items");

      getDocs(item).then((resp) => {
        if (resp.size === 0) {
          console.log("No hay documentos");
        }
        setItems(resp.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
    }
  }, [categoryId, setCargando]);

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
