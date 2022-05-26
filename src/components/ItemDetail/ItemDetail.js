import { Button } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../CarWidget/CartContext";

function ItemDetail({ item = {} }) {
  const [cambiarBoton, setCambiarBoton] = useState(true);
  const { cartList, addToCart } = useCartContext();

  const onAdd = (count) => {
    setCambiarBoton(false);
    addToCart({ producto: item, quantity: count });
  };

  return (
    <div className="itemDetail">
      <div className="contenedorCard">
        <div className="cardImagen">
          <img
            src={item.image}
            className="cardImg"
            alt="imagen producto"
            style={{ width: "36rem" }}
            variant="top"
          />
        </div>
        <div className="">
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <hr />

          <div className="">
            <h3>Contiene</h3>
            <p>{item.contiene}</p>

            <div className="">
              <label className="">${item.price}</label>
              {cambiarBoton ? (
                <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
              ) : (
                <div>
                  <Link to={"/cart"}>
                    <Button className="botonContador">Ir a pagar</Button>
                  </Link>

                  <Link to={"/"}>
                    <Button className="botonContador">Seguir comprando</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
