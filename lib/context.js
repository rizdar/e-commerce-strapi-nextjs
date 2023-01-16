import React, { createContext, useContext, useState } from 'react';

const ShopContext = createContext();

export const StateContext = ({ children }) => {
  const [qty, setQty] = useState(1);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  //increase qty
  const increaseQty = () => {
    setQty((prevState) => prevState + 1);
  };
  //decrease qty
  const decreaseQty = () => {
    setQty((prevState) => {
      if (prevState - 1 < 1) return 1;
      return prevState - 1;
    });
  };
  // Add to cart
  const onAdd = (product, quantity) => {
    //totalprice
    setTotalPrice((prevTotal) => prevTotal + product.price * quantity);

    //increase total quantity
    setTotalQuantities((prevTotal) => prevTotal + quantity);

    const exist = cartItems.find((item) => item.slug === product.slug);
    if (exist) {
      setCartItems(cartItems.map((item) => (item.slug === product.slug ? { ...exist, quantity: exist.quantity + quantity } : item)));
    } else {
      setCartItems([...cartItems, { ...product, quantity: quantity }]);
    }
  };

  //Remove Product
  const onRemove = (product) => {
    //totalprice
    setTotalPrice((prevTotal) => prevTotal - product.price);

    //decrease total quantity
    setTotalQuantities((prevTotal) => prevTotal - 1);

    const exist = cartItems.find((item) => item.slug === product.slug);

    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.slug !== product.slug));
    } else {
      setCartItems(cartItems.map((item) => (item.slug === product.slug ? { ...exist, quantity: exist.quantity - 1 } : item)));
    }
  };

  return <ShopContext.Provider value={{ qty, increaseQty, decreaseQty, showCart, setShowCart, cartItems, setCartItems, onAdd, onRemove, totalQuantities, totalPrice, setQty }}>{children}</ShopContext.Provider>;
};

export const useStateContext = () => useContext(ShopContext);
