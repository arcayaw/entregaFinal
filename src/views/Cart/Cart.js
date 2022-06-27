import { useCartContext } from "../../components/Context/CartContext";
import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import CartList from "../../components/CartList/CartList";
import Form from "../../components/Form/Form";

const Cart = () => {
  const [deleteAll, precioTotal, cartList] = useCartContext();

  return (
    <>
      <Header />
      <div>
        <h2>Carro de compras</h2>
        <CartList />
        {cartList.lenght ? (
          <>
            <p>Precio Final: ${precioTotal()}</p>
            <button onClick={deleteAll}>Vaciar Carrito</button>
            <Form />
          </>
        ) : (
          <>
            <h2>No hay productos en el carrito</h2>
            <Link to="/">
              {" "}
              <button>Volver al inicio</button>
            </Link>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;

// import React from "react";
// import { Link } from "react-router-dom";

// import { CartContext } from "../../components/Context/CartContext";
// import CartList from "../../components/CartList/CartList";
// import Form from "../../components/Form/Form";

// function Cart() {
//   const { cart, deleteAll, precioTotal } = CartContext();

//   return (
//     <div className="cart-container">
//       <div className="cart-options">
//         <h2>Tu carro de compras</h2>
//         <CartList />
//         {cart.length ? (
//           <>
//             <p>Precio final: ${precioTotal()} </p>
//             <button className="delete-button" onClick={deleteAll}>
//               Vaciar Carrito
//             </button>
//             <Form />
//           </>
//         ) : (
//           <>
//             <h2>No hay productos en tu carrito</h2>
//             <Link to="/" className="link">
//               <button className="store-button">Volver al inicio</button>
//             </Link>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Cart;
