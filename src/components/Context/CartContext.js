import React from "react";
import { useContext, useState } from "react";

const CartContext = React.createContext([]);
const { Provider } = CartContext;

const CartProvider = ({ children }) => {
  const [cart, setCart] = React.useState([]);

  console.log(cart);

  // addToCart
  const addToCart = (item, count) => {
    if (isInCart(item.id)) {
      const newCart = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          cartItem.quantity++;
        }
        return cartItem;
      });
      setCart(newCart);
    } else {
      setCart([...cart, { ...item, quantity: +count }]);
    }
  };

  // removeFromCart
  const removeFromCart = (id) => {
    const newCart = cart.filter((carItem) => carItem.id !== id);
    setCart(newCart);
  };

  //cantidadTotal
  const cantidadTotal = () => {
    return cart.reduce((acum, valor) => acum + valor.quantity, 0);
    console.log(cantidadTotal);
  };

  // deleteAll
  const deleteAll = () => {
    setCart([]);
  };

  //precio total
  const precioTotal = () => {
    return cart.reduce((acum, valor) => acum + valor.quantity * valor.price, 0);
  };

  // isInCart
  const isInCart = (id) => {
    return cart.find((item) => item.id === id);
  };

  return (
    <Provider
      value={{
        addToCart,
        removeFromCart,
        deleteAll,
        isInCart,
        precioTotal,
        cantidadTotal,
        cart,
      }}>
      {children}
    </Provider>
  );
};

export { CartContext, CartProvider };
