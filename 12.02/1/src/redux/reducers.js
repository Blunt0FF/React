const initialState = {
  products: [
    { id: '1', name: 'Product 1', price: 10 },
    { id: '2', name: 'Product 2', price: 20 },
    { id: '3', name: 'Product 3', price: 30 },
  ],
  cart: [],
}

// Добавил товар 1 в корзину
// cart = [{ id: '1', quantity: 1}]
// Добавил товар 1 в корзину
// cart = [{ id: '1', quantity: 2}]
// cart = [{ id: '1', quantity: 1}, { id: '1', quantity: 1}]

export const cartReducer = (state = initialState, action) => {
  console.log('Reducer', state)

  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingProduct = state.cart.find(
        product => product.id === action.payload.id
      )
      // if (product in cart) {
      //   quantity этого продукта + 1
      // }
      if (existingProduct) {
        return {
          ...state,
          cart: state.cart.map(product =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        }
      }

      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      }
    }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(product => product.id !== action.payload),
      }

    case 'UPDATE_CART_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(product =>
          product.id === action.payload.id
            ? { ...product, quantity: action.payload.quantity }
            : product
        ),
      }

    default:
      return state
  }
}
