import { createStore } from 'redux'

// 1. Store
const initialState = {
  count: 0
} // store -> все state приложения в одном объекте

// const [state, setState] = useState(defaultValue)
// defaultValue -> state // initialState == defaultValue
// setState(newState) -> state // store == state


// 2. Actions
const incrementAction = { type: 'INCREMENT' } // объект, в котором есть поле type
// state++
const decrementAction = { type: 'DECREMENT' }
// state--
const addX = (amount) => ({ type: 'ADD_X', payload: amount })  // опционально поле payload с данными для обновления
// state + x
const subtractY = (amount) => ({ type: 'SUB_Y', payload: amount }); // опционально поле payload с данными для обновления
// state - y



// 3. Reducer
// функции изменения state в reducer должны быть чистыми
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }
    case 'DECREMENT':
      return { count: state.count - 1 }
    case 'ADD_X':
      return { count: state.count + action.payload }
    case 'SUB_Y':
      return { count: state.count - action.payload }
    default:
      return state
  }
}


const store = createStore(counterReducer)

store.subscribe(() => console.log(store.getState()))

store.dispatch(incrementAction); // { count: 1 }
store.dispatch(decrementAction); // { count: 0 }
store.dispatch(addX(5)); // { count: 5 }



// ---------------------------------------------------


// Чистые функции - это функции, которые:
// 1. При передаче одних и тех же параметров возвращают одни и те же значения
function add(a, b) {
  return a + b;
} // pure

add(3, 2)
add(3, 2)
add(3, 2)
add(3, 2)

function getRandNumber() {
  return Math.random();
} // dirty

getRandNumber()
getRandNumber()

// 2. Отсутствие побочных эффектов
// 2.1: Запросы в сеть, выводы в консоль, обращение к файловой системе, и т.д.

function logMessage(name) {
  console.log(name);
  // fetch
  // fs.readFile

  //...logic
  return 'Hello ' + name;
}

logMessage('John')
logMessage('John')
logMessage('John')
logMessage('John')


// 2.2 Зависимость или измение глобального состояния

let counter = 0;

function incrementCounter() {
  counter++;
  return counter;
}

incrementCounter() // 1
incrementCounter() // 2
incrementCounter() // 3


// как проще определить чистая ли функция
// 1. Если нет return, функция точно грязная
// 2. Если функцию можно перенести в другое место/файл, и она продолжит работать, то она скорее всего чистая
  // (все, что нужно для работы функции есть внутри самой функции)


// ПОЧЕМУ REDUCER ЧИСТЫЙ, ОН ЖЕ МЕНЯЕТ ВНЕШНИЙ STORE?
function reducer(state, action) {
  // логика обработки состояния
  return newState; // возвращает НОВОЕ состояние
}



const initialState = {
  count: 0,
  user: 'John Doe'
  // еще 100 полей
}

let reduxStore = initialState

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      // state.count = state.count + 1 мы не делаем так, мы делаем как ниже
      return {...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

const newState = counterReducer({ count: 0 }, { type: 'INCREMENT' }); // { count: 1 }
// reducer больше не участвует

// Redux решает, что пора сделать
reduxStore = newState // { count: 1 }

counterReducer({ count: 0 }, { type: 'INCREMENT' }); // { count: 1 }
counterReducer({ count: 1 }, { type: 'INCREMENT' }); // { count: 2 }

// Что же происходит
// 1. Action отправляется в Redux store
// 2. Redux передает текущий state и action reducer'у
// 3. Reducer возвращает НОВОЕ СОСТОЯНИЕ -> НЕ МЕНЯЕТ СУЩЕСТВУЮЩЕЕ СОСТОЯНИЕ -> чистая функция
// 4. Redux меняет старое состояние на новое


// ---------------------------------------------------


// // дефолтное значение параметра
// function add(a, b) {
//   return a + b;
// }
// add(5, 8) // 13
// add(4), 4 + undefined

// function addDefault(a = 10, b = 1) {
//   return a + b;
// }

// addDefault(5, 8) // 13
// addDefault(4) // 5
// addDefault() // 11









// PIZZA TIME
// 1. Пользователь (UI): Заказчик заказывает пиццу "Пепперони"
// 2. Action: Заказ ("Хочу Пепперони")
// 3. Dispatcher: Официант/приложение забирает заказ и передает его на кухню
// 4. Reducer: Кухня готовит пиццу Пепперони
// 5. Store: Склад с готовой пиццей
// 6. UI Rerender: Заказчик получает свою пиццу


// S. A. R. A.
// Пишем Redux-код? Вспоминаем SARA

// State. Начни с состояния. Опиши состояние
// Actions: Определи действия (actions)
// Reducers: Напиши редьюсеры
// Acсess state: Используй состояние в компонентах