import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../Context/CartContext";
import "./itemDetail.css";
import { Link } from "react-router-dom";

export default function ItemDetail({ item }) {
  // Definimos variables del context
  const { addToCart, isInCart } = useCartContext();

  // Separamos el estado del count
  const [count, setCount] = useState(1);

  return (
    <>
      <Card className="card">
        <Card.Img variant="top" className="item-detail" src={item.image} />
        <Card.Body>
          <Card.Title className="card__title">{item.title}</Card.Title>

          <Card.Text className="">{item.description}</Card.Text>

          <Card.Text className="">Contiene: {item.contiene}</Card.Text>

          <h3 className="card__price">$ {item.price}</h3>

          {isInCart(item.id) ? (
            <>
              <Link to="/cart">
                <Button>Finalizar Compra</Button>
              </Link>
              <Link to={"/products"}>
                <Button className="botonSeguirComprando">
                  Seguir comprando
                </Button>
              </Link>
            </>
          ) : (
            <ItemCount
              onSubmit={() => addToCart(item, count)}
              count={count}
              setCount={setCount}
              stock={item.stock}
            />
          )}
        </Card.Body>
      </Card>
    </>
  );
}
