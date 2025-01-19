import { useState } from "react"
import Task from "../Task/Task";

export default function SmartTodoList(){
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  function handleChange(e) {
    setNewTask(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const noteTask = { id: Date.now(), text: newTask };
    setTasks((prevTasks) => [...prevTasks, noteTask]);
    setNewTask('');
  }

  function updateTask(id, text) {
    setTasks(prevTasks => prevTasks.map((task) => {
      return task.id === id ? { ...task, text: text } : task;
    }))
  }

  function deleteTask(id) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  // tasks = [
  //   {
  //     id: 0,
  //     task: "task1",
  //   },
  //   {
  //     id: 1,
  //     task: "task2"
  //   },
  //   {
  //     id: 2,
  //     task: "task3",
  //   },
  //   {
  //     id: 3,
  //     task: "task4",
  //   },
  // ];

  // newTasks = [
  //   {
  //     id: 0,
  //     task: "task1",
  //   },
  //   {
  //     id: 1,
  //     task: "task2"
  //   },
  //   {
  //     id: 3,
  //     task: "task4",
  //   },

  // ];

  return (
    <div>
      <h3>Task list</h3>
      <form onSubmit={handleSubmit}>
        {" "}
        {/* используется при перемещении табами, стрелками, онклик не сработает */}
        <input onChange={handleChange} value={newTask} type="text" />
        <button>Add</button>
      </form>

      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} updateTask={updateTask} deleteTask={deleteTask}/>
        ))}
      </ul>
    </div>
  );
}


// ОБРАБОТКА СОБЫТИЙ В JavaScript //

// 1. Пользователь совершает действие на странице (кликает мышью, вводит что-то в инпут, нажимает на клавиатуре клавиши, и т.д.)
// 2. Браузер собирает информацию о событии в объект Event (на каком элементе произошло, тип события, координаты, и т.д.)
// 3. Если у события есть обработчик, то браузер САМ (АВТОМАТИЧЕСКИ) передаст Event аргументом в обработчик
// на чистом JS
// const input = document.querySelector('.input')
// input.addEventListener('change', handleChange)




// ОБЫЧНЫЕ ПЕРЕМЕННЫЕ React НЕ ОТСЛЕЖИВАЕТ. НУЖЕН state //

//   tasks = ["task1", "task2"]; // неправильно для React (не вызовет перерисовку)
//   setTasks([["task1", "task2"]]); // правильно для React (вызовет перерисовку)



// ПОЧЕМУ НЕ МУТИРУЕМ МАССИВЫ И ОБЪЕКТЫ, А СОЗДАЕМ НОВЫЕ в React //

  // Зачем?
    // 1. React старается перерисовать ТОЛЬКО ТО, ЧТО ПОМЕНЯЛОСЬ (т.e не весь компонент). Это эффективно
    // 2. Как React'у понять, что поменялось? Сравнить предыдущее состояние и новое (prevState === newState).
    // 3. Чтобы было, что сравнить, не перезаписываем предыдущее, а копируем в следующее и добавляем данные

  // Как?
    // prevTasks = ['task']
    // prevTasks.push('task2') // НЕПРАВИЛЬНО. ЗАТИРАЕМ prevTasks
    // newTasks = [...prevTasks, 'task2'] // ПРАВИЛЬНО. Оставили React'у prevTasks для сравнения с newTasks





  // ЧТО ТАКОЕ DOM И ЗАЧЕМ ОНО НУЖНО (JavaScript)

  // Проблема. HTML и JavaScript ничего не знают друг о друге. Мы хотим ПРОГРАММНО (из JS) влиять на разметку (на HTML).
  // Решение. Пусть браузер преобразует HTML-разметку в JavaScript-объекты. Ура, теперь нам удобно работать с разметкой в коде!

  // HTML разметка
    // <div class="container">
    //   <input type="text" value="Привет" class="input" />
    //   <button class="button">Нажми меня</button>
    // </div>

  // DOM-представление (то же самое, что и JavaScript-представление) этой разметки (упрощенно)
    // const domTree = {
    //   // div элемент
    //   tagName: 'div',
    //   className: 'container',
    //   children: [
    //     // input элемент
    //     {
    //       tagName: 'input',
    //       type: 'text',
    //       value: 'Привет',
    //       className: 'input',
    //       // Методы для работы с элементом
    //       addEventListener: function() { /* ... */ },
    //       focus: function() { /* ... */ },
    //       setAttribute: function() { /* ... */ }
    //     },
    //     // button элемент
    //     {
    //       tagName: 'button',
    //       className: 'button',
    //       textContent: 'Нажми меня',
    //       // Методы для работы с элементом
    //       addEventListener: function() { /* ... */ },
    //       click: function() { /* ... */ }
    //     }
    //   ],
    //   // Методы для работы с элементом
    //   querySelector: function() { /* ... */ },
    //   appendChild: function() { /* ... */ },
    //   removeChild: function() { /* ... */ }
    // }