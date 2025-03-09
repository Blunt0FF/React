import { createAction, createReducer } from '@reduxjs/toolkit';

export const rootReducer = (state, action) => {
  return state;
}

const initialState = { value: 0 }


// REDUX WAY
const increment = (data) => ({
  type: 'INCREMENT',
  payload: data
})

const decrement = (data) => ({
  type: 'DECREMENT',
  payload: data
})

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state.value += 1
    case 'DECREMENT':
      return state.value -= 1
    default:
      return state
  }
}


// REDUX-TOOLKIT WAY
const incrementRTK = createAction('increment')
const decrementRTK = createAction('decrement')

const counterReducerRTK = createReducer(initialState, {
  [incrementRTK]: (state) => state.value += 1,
  [decrementRTK]: (state) => state.value -= 1
})