import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  //cart state
  const [cart, setCart] = useState([]);


  //add to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };

    //check if the item is already in the cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    //check if the item is already in the cart
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;    
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const removeToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };

    //check if the item is already in the cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    //check if the item is already in the cart
    if (cartItem.amount > 1) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
      const newCart = cart.filter((item) => item.id !== id);
      setCart(newCart);
   
    }
  };
  console.log(cart);

  const deleteToCart = (product, id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeToCart, deleteToCart }}>
      {children}
    </CartContext.Provider>
  );  
};

export default CartProvider;
