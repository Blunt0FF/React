import { createContext, useContext, useState } from 'react';
const MyContext = createContext();

function ProviderComponent() {
  const [contextValue, setContextValue] = useState({ login: "John", password: "123456", cart: [] })

  if (...) {
    setContextValue({...contextValue, cart: [...cart, newProduct]})
  }

  return (
    <MyContext.Provider value={contextValue, user}>
      <SomeLargeComponentTree />
    </MyContext.Provider>
  )
}

function ChildComponentLogin() {
  const { login } = useContext(MyContext)

  return <p>{login}</p>
}


// 1. Store
const [state, setState] = useState() // store -> все state приложения в одном объекте

// 2. Action
const incrementAction = { type: 'INCREMENT' } // объект, в котором есть поле type
state++

const addNToState = { type: 'ADD_N', payload: n } // опционально поле payload с данными для обновления
state + n

// 3. Reducer
const counterReducer