const initialState = {
    users: [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 3, name: 'Bob' },
        { id: 4, name: 'Mike' },
        { id: 5, name: 'Alex' },
        { id: 6, name: 'Tom' },
        { id: 7, name: 'Jerry' },
        { id: 8, name: 'Liza' },
        { id: 9, name: 'Anna' },
        { id: 10, name: 'Kate' },
        { id: 11, name: 'Саша' },
        { id: 12, name: 'Маша' },
        { id: 13, name: 'Даша' },
        { id: 14, name: 'Петя' },
        { id: 15, name: 'Вася' },
        { id: 16, name: 'Коля' },
        { id: 17, name: 'Игорь' },
        { id: 18, name: 'Оля' },
        { id: 19, name: 'Света' },
        { id: 20, name: 'Марина' },
        { id: 21, name: 'Игорь' },
    ],
    filter: '',
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_FILTER':
        return { ...state, filter: action.payload };
      default:
        return state;
    }
  };
  
  export default reducer;