import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";
import { getFirestore, getDoc, doc } from "firebase/firestore";
export default function ItemDetailContainer({ title, productId }) {
  const [item, setItem] = useState([]);
  const [cargando, setCargando] = useState([true]);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const dbQuery = doc(db, "items", productId);

    getDoc(dbQuery)
      .then((resp) => setItem({ id: resp.id, ...resp.data() }))
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setCargando(false));
  }, [id]);

  return (
    <Container className="itemlist-container">
      {cargando ? <Loader /> : <ItemDetail item={item} />}
    </Container>
  );
}
