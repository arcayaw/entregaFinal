import { Button, Card } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import React from "react";

// function ItemDetail({ item = {} }) {
//   // Definimos variables del context
//   const { addToCart, isInCart } = React.useContext(CartContext);
//   // Separamos el estado del count
//   const [count, setCount] = React.useState(1);

//   // const onAdd = (count) => {
//   //   setCambiarBoton(false);
//   //   addToCart({ producto: item, quantity: count });
//   // };

//   return (
//     <div className="itemDetail">
//       <div className="contenedorCard">
//         <div className="cardImagen">
//           <img
//             src={item.image}
//             className="cardImg"
//             alt="imagen producto"
//             style={{ width: "36rem" }}
//             variant="top"
//           />
//         </div>
//         <div className="">
//           <h1>{item.title}</h1>
//           <p>{item.description}</p>
//           <hr />

//           <div className="">
//             <h3>Contiene</h3>
//             <p>{item.contiene}</p>

//             <div className="">
//               <label className="">${item.price}</label>
//               {cambiarBoton ? (
//                 <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
//               ) : (
//                 <div>
//                   <Link to={"/cart"}>
//                     <Button className="botonContador">Ir a pagar</Button>
//                   </Link>

//                   <Link to={"/"}>
//                     <Button className="botonContador">Seguir comprando</Button>
//                   </Link>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ItemDetail;

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
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <h3>$ {item.price}</h3>
        {isInCart(item.id) ? (
          <button>Ir al carrito</button>
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
