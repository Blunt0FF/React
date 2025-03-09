Основные принципы в Redux:

– Redux store – это единственный источник правды
– State только для чтения
– Изменения делаются только через чистые функции (reducer – чистая функция)

    Чистые функции
    1. При одних и тех же входных данных возвращают одинаковый результат
    2. Не имеют побочных эффектов (асинхронные операции, взаимодействия с внешним миром, изменение внешних переменных)


Ключевые компоненты:

1. Store
  – Хранит глобальное состояние (данные) приложения

  Создается через `configureStore()` из Redux Toolkit
  ```const store = configureStore({
    reducer: rootReducer
  })```

2. Actions
  – Простые объекты, описывающие ЧТО произошло

  Создается через `createAction()` из Redux Toolkit
  ```
    const increment = createAction("counter/increment")
    const decrement = createAction("counter/decrement")
  ```

3. Reducers
  – Чистые функции, определяющие КАК изменится состояние

  Создается через `createReducer()` или `createSlice()` из Redux Toolkit
  ```const counterSlice = createSlice({
    name: "counter",
    initialState: 0,
    reducers : {
      inc: (state) => state + 1,
      dec: (state) => state - 1
    }
  })

4. Selectors
  – Функции для получения данных из store

    ```const selectCount = (state) => state.counter```


Что такое dispatch?

`dispatch` – это функция, которая ОТПРАВЛЯЕТ действия (actions) в Redux. Это единственный способ сообщить Redux о том, что нужно изменить состояние

Как использовать? Передать нужное действие как аргумент в функцию `dispatch`
```
dispatch(increment())
dispatch(setCurrentUser(user.id))
```



Подключения к React:

1. Обернуть приложение
```
import { Provider } from 'react-redux'
import store from './store'

<Provider store={store}>
  <App>
</Provider>
```

2. Использование данных из store в компонентах-потребителях
```
import { useSelector, useDispatch } from 'react-redux'

const Component = () => {
  const count = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <button onClick={() => dispatch(increment())}>
      Count: {count}
    </button>
  )
}
```




