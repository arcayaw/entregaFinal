import { Container, Row, Col, Spinner } from "react-bootstrap";
import React from "react";
// import { products } from "../../data/productos";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";
import {
  getFirestore,
  getDoc,
  doc,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";
export default function ItemDetailContainer({ title, productId }) {
  const [item, setItem] = React.useState({});
  const [cargando, setCargando] = React.useState(true);

  React.useEffect(
    () => {
      const db = getFirestore();

      setCargando(() => {
        setCargando(false);
      }, 5000);

      const item = doc(db, "items", productId);
      getDoc(item).then((snapshot) => {
        setItem({ id: snapshot.id, ...snapshot.data() });
      });
      setTimeout(() => {
        setCargando(false);
      }, 2000);
    },
    [productId],
    setCargando
  );
  return (
    <Container className="itemlist-container">
      <Row>
        <Col>
          <h1>{title}</h1>
        </Col>
      </Row>
      <Row>{cargando ? <Spinner /> : <ItemDetail item={item} />}</Row>
    </Container>
  );
}
