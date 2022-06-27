import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { useCartContext } from "../Context/CartContext.js";

function CartList() {
  const { cartList, deleteItem } = useCartContext();

  return (
    <>
      <div className="cart">
        {cartList.map((item) => (
          <li>
            <Link to={`/detail/${item.id}`}>
              <img
                className="img-cart"
                src={item.image}
                alt="Imagen del producto"></img>
            </Link>
            <p>{item.title}</p>
            <p>Precio: ${item.price}</p>
            <p>Cantidad: {item.count}u</p>
            <button onClick={() => deleteItem(item.id)} className="delete-item">
              <FontAwesomeIcon icon={faTrash} size="lg"></FontAwesomeIcon>
            </button>
          </li>
        ))}
      </div>
    </>
  );
}

export default CartList;
