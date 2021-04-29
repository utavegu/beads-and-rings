const productTypeDict = {
  "rings": "Кольцо",
  "beads": "Изделие из бисера",
};

const setCartData = itemList => localStorage.setItem('cart', JSON.stringify(itemList));

const getCartData = () => JSON.parse(localStorage.getItem('cart'));

export {productTypeDict, setCartData, getCartData}