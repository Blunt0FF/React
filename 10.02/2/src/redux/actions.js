export const addToCart = id => ({
  type: 'ADD_TO_CART',
  payload: id,
})

export const removeFromCart = id => ({
  type: 'REMOVE_FROM_CART',
  payload: id,
})

export const updateCartQuantity = (id, quantity) => ({
  type: 'UPDATE_CART_QUANTITY',
  payload: { id, quantity },
})
