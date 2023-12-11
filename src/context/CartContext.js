import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  isOrderPlaced: false,
  isDisabled: true,
  addCartItem: () => {},
  deleteCartItem: () => {},
  removeCartItem: () => {},
  incrementCartItemQuantity: () => {},
  decrementCartItemQuantity: () => {},
  removeAllCartItems: () => {},
  onPlacingOrder: () => {},
  onSelectPayment: () => {},
})

export default CartContext
