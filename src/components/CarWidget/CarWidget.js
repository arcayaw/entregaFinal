import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";
import "./CarWidget.css";

/* --------------- Importo el context para acceder al carrito --------------- */
export default function CartWidget() {
  const { cartList } = useCartContext;

  console.log(cartList);
  return (
    <div className="CartWidget">
      {cartList.length === 0 ? (
        <div className="emptyCart">
          <Link to="/cart">
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
        </div>
      ) : (
        <>
          <Link to="/cart">
            <FontAwesomeIcon icon={faCartShopping} />
            <span className="badge">{cartList.length}</span>
          </Link>
        </>
      )}
    </div>
  );
}

// function CartWidget() {
//   return (
//     <div className="cart-widget">
//       <Link to="/cart">
//         <FontAwesomeIcon
//           icon={faCartShopping}
//           size="2x"
//           color="white"></FontAwesomeIcon>
//       </Link>
//     </div>
//   );
// }

// export default CartWidget;
