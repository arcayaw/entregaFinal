import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import "./CarWidget.css";

/* --------------- Importo el context para acceder al carrito --------------- */
export default function CartWidget() {
  const { cart } = React.useContext(CartContext);
  return (
    <div className="CartWidget">
      {cart.length === 0 ? (
        <div className="emptyCart">
          <Link to="/cart">
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
        </div>
      ) : (
        <>
          <Link to="/cart">
            <FontAwesomeIcon icon={faCartShopping} />
            <span className="badge">{cart.length}</span>
          </Link>
        </>
      )}
    </div>
  );
}
