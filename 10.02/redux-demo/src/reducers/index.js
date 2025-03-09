const initialState = {
  count: 0
}

// Step 4 -> вызов reducer'а c прошлым state и заdispatch'енным action
export function counterReducer(state = initialState, action) {
  console.log('Reducer received action:', action);


  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 } // Step 5 -> reducer возвращает какой-то newState
    case 'DECREMENT':
      return { count: state.count - 1 }
    default:
      return state;
  }
}
