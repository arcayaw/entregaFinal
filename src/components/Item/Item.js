import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./item.css";

export default function Item({ item }) {
  const navigate = useNavigate();

  return (
    <>
      <Card
        style={{
          width: "30rem",
          height: "42rem",
        }}
        onClick={() => navigate(`/product/${item.id}`)}
        className="card">
        <Card.Img variant="top" src={item.image} className="card__img" />
        <Card.Body className="card__body">
          <Card.Title variant="" className="card__title">
            {item.title}
          </Card.Title>
          <Card.Text className="card__price">{item.description}</Card.Text>
          <h3 className="card__price">$ {item.price}</h3>
        </Card.Body>
        {/* <AddButton /> */}
      </Card>
    </>
  );
}
