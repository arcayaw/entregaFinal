import ItemList from "../ItemList/ItemList";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import React from "react";
import { products } from "../../data/productos";
import {
  getFirestore,
  getDoc,
  doc,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";
import Loader from "../Loader/Loader";
export default function ItemListContainer({ title, categoryId }) {
  const [items, setItems] = React.useState([]);
  const [cargando, setCargando] = React.useState(true);

  // React.useEffect(() => {
  //   if (categoryId) {
  //     setTimeout(() => {
  //       setCargando(false);
  //     }, 1000);
  //     setItems(products.filter((item) => item.category_id === +categoryId));
  //   } else {
  //     setTimeout(() => {
  //       setCargando(false);
  //     }, 2000);
  //     setItems(products);
  //   }
  // }, [categoryId]);

  React.useEffect(() => {
    const db = getFirestore();

    if (categoryId) {
      setCargando(() => {
        setCargando(false);
      }, 2000);
      const consulta = query(
        collection(db, "items"),
        where("category_id", "==", categoryId)
      );
      getDocs(consulta).then((snapshot) => {
        if (snapshot.size === 0) {
          console.log("No hay documentos");
        }
        setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
    } else {
      setTimeout(() => {
        setCargando(false);
      }, 2000);
      const item = collection(db, "items");
      getDocs(item).then((snapshot) => {
        if (snapshot.size === 0) {
          console.log("No hay documentos");
        }
        setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
    }
  }, [categoryId, setCargando]);

  return (
    <>
      <Container className="itemlist-container">
        <Row>
          <Col>
            <h1>{title}</h1>
          </Col>
        </Row>
        <Row>
          {cargando ? (
            <Spinner animation="border" role="status" />
          ) : (
            <ItemList items={items} />
          )}
        </Row>
      </Container>
    </>
  );
}
