import { CartContext } from "../../components/Context/CartContext";
import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function Cart() {
  const {
    cart,
    cantidadTotal,
    deleteAll,
    removeFromCart,
    precioTotal,
  } = CartContext();

  return (
    <>
      <Header />
      <div className="bodyCart">
        {cart.length === 0 ? (
          <div className="carritoVacio">
            <h2>Tu carrito esta vacio</h2>
            <Link to={"/products"}>
              <Button className="botonContador">Ir a productos</Button>
            </Link>
          </div>
        ) : (
          <>
            <div className="contenedorMayor">
              <div className="contenedorTitulos">
                <p>Precio</p>
                <p>Total</p>
              </div>
            </div>
            {cart.map((item) => (
              <div className="">
                <div className="" key={item.id}>
                  <img
                    src={item.image}
                    className="imgEnCart"
                    alt="imagen producto"
                  />
                  <p className="datosProductos">{item.title}</p>
                  <p className="datosProductos">{item.quantity} unidades</p>
                  <p className="datosProductos">${item.price}</p>
                  <p className="datosProductos">
                    ${item.price * item.quantity}
                  </p>

                  <p onClick={() => removeFromCart(item.id)}></p>
                </div>
              </div>
            ))}

            <div className="precioTotal">
              <p>Cantidad total de productos: {cantidadTotal()}</p>
              <p>Precio a abonar: ${precioTotal()}</p>
            </div>
            <div className="botonesCompra">
              <Button className="botonVaciarCarrito" onClick={deleteAll}>
                Vaciar carrito
              </Button>
              <Link to={"/products"}>
                <Button className="botonSeguirComprando">
                  Seguir comprando
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
