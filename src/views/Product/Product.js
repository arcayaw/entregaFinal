import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
export default function Product() {
  const { productId } = useParams();
  return (
    <Container>
      <Row>
        <Col>
          <Header />
          <ItemDetailContainer title="Mi producto" productId={+productId} />
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}
