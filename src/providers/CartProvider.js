import React from 'react';
import CartContext from '../contexts/CartContext';
import { getCartData, setCartData } from '../common';

export default function RecipesProvider(props) {

  const [cart, setCart] = React.useState(getCartData());

  const addToCart = (arrayOfItems) => {
    setCartData(arrayOfItems);
    setCart(arrayOfItems);
  }

  const cartData = {cart, addToCart};

  return (
    <CartContext.Provider value={cartData}>
      {props.children}
    </CartContext.Provider>
  )
}