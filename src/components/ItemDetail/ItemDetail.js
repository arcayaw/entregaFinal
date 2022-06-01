import React, { useState } from "react";
import { Card } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../Context/CartContext";

export default function ItemDetail({ item }) {
  // Definimos variables del context
  const { addToCart, isInCart } = React.useContext(CartContext);
  // Separamos el estado del count
  const [count, setCount] = React.useState(1);

  return (
    <Card className="item-detail">
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>

        <Card.Text>{item.description}</Card.Text>

        <h3>$ {item.price}</h3>

        {isInCart(item.id) ? (
          <button>Finalizar Compra</button>
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
  );
}
