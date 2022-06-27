import React from "react";
import { useState, createContext, useContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  console.log(cartList);

  // addToCart
  function addToCart(newItem) {
    const buscar = cartList.findIndex(
      (item) => newItem.item.id === item.item.id
    );

    if (buscar === -1) {
      setCartList([...cartList, newItem]);
    } else {
      const nuevaCantidad = cartList[buscar].quantity + newItem.quantity;

      const oldList = cartList.filter((old) => old.item.id !== newItem.item.id);

      setCartList([
        ...oldList,
        { item: newItem.item, quantity: nuevaCantidad },
      ]);
    }
  }

  // removeFromCart
  const removeFromCart = (id) => {
    const newCart = [...cartList];

    let index = newCart.findIndex((cartItem) => cartItem.id === id);
    newCart.splice(index, 1);

    setCartList([...newCart]);
  };

  //cantidadTotal
  const cantidadTotal = () => {
    return cartList.reduce(
      (quantity, cartItem) => quantity + cartItem.count,
      0
    );
  };
  console.log(cantidadTotal);

  // deleteAll
  const deleteAll = () => {
    setCartList([]);
  };

  //precio total
  const precioTotal = () => {
    return cartList.reduce(
      (acum, valor) => acum + valor.quantity * valor.price,
      0
    );
  };

  // isInCart
  const isInCart = (id) => {
    return cartList.some((item) => item.id === id);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        removeFromCart,
        deleteAll,
        isInCart,
        precioTotal,
        cantidadTotal,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
