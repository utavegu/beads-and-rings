import React from 'react';
import CartContext from './contexts/CartContext';
import { getCartData, setCartData } from '../common';

export default function RecipesProvider(props) {

  const [cart, setCart] = React.useState(getCartData());

  const addToCart = (arrayOfItems) => {
    setCartData(arrayOfItems);
    setCart(arrayOfItems);
  }

  const allData = {
    addToCart,
    /*
    query, setQuery,
    urlParams, setUrlParams,
    productList, setProductList,
    */
  };

  return (
    <CartContext.Provider value={allData}>
      {props.children}
    </CartContext.Provider>
  )
}