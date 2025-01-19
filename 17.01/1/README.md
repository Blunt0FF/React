ОБРАБОТКА СОБЫТИЙ В JavaScript

1. Пользователь совершает действие на странице (кликает мышью, вводит что-то в инпут, нажимает на клавиатуре клавиши, и т.д.)
2. Браузер собирает информацию о событии в объект Event (на каком элементе произошло, тип события, координаты, и т.д.)
3. Если у события есть обработчик, то браузер САМ (АВТОМАТИЧЕСКИ) передаст Event аргументом в обработчик
на чистом JS
const input = document.querySelector('.input')
input.addEventListener('change', handleChange)




ОБЫЧНЫЕ ПЕРЕМЕННЫЕ React НЕ ОТСЛЕЖИВАЕТ. НУЖЕН state

tasks = ["task1", "task2"]; // неправильно для React (не вызовет перерисовку)
setTasks([["task1", "task2"]]); // правильно для React (вызовет перерисовку)



ПОЧЕМУ НЕ МУТИРУЕМ МАССИВЫ И ОБЪЕКТЫ, А СОЗДАЕМ НОВЫЕ в React

  Зачем?
    1. React старается перерисовать ТОЛЬКО ТО, ЧТО ПОМЕНЯЛОСЬ (т.e не весь компонент). Это эффективно
    2. Как React'у понять, что поменялось? Сравнить предыдущее состояние и новое (prevState === newState).
    3. Чтобы было, что сравнить, не перезаписываем предыдущее, а копируем в следующее и добавляем данные

  Как?
    prevTasks = ['task']
    prevTasks.push('task2') // НЕПРАВИЛЬНО. ЗАТИРАЕМ prevTasks
    newTasks = [...prevTasks, 'task2'] // ПРАВИЛЬНО. Оставили React'у prevTasks для сравнения с newTasks





  ЧТО ТАКОЕ DOM И ЗАЧЕМ ОНО НУЖНО (JavaScript)

  Проблема. HTML и JavaScript ничего не знают друг о друге. Мы хотим ПРОГРАММНО (из JS) влиять на разметку (на HTML).
  Решение. Пусть браузер преобразует HTML-разметку в JavaScript-объекты. Ура, теперь нам удобно работать с разметкой в коде!

  HTML разметка
  <div class="container">
    <input type="text" value="Привет" class="input" />
    <button class="button">Нажми меня</button>
  </div>

  DOM-представление (то же самое, что и JavaScript-представление) этой разметки (упрощенно)
    const domTree = {
    // div элемент
      tagName: 'div',
      className: 'container',
      children: [
        {
          tagName: 'input',
          type: 'text',
          value: 'Привет',
          className: 'input',
          addEventListener: function() {},
          focus: function() {},
          setAttribute: function() {}
        },
        {
          tagName: 'button',
          className: 'button',
          textContent: 'Нажми меня',
          addEventListener: function() {},
          click: function() {}
        }
      ],
      querySelector: function() {},
      appendChild: function() {},
      removeChild: function() {}
    }