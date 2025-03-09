import React, { useCallback, useState } from 'react';

// React.memo
// if props did not change => don't rerender
// else rerender
// eslint-disable-next-line react/display-name
const Button = React.memo(({ onClick }) => {
  console.log('Button rendered');

  return <button onClick={onClick}>Click me</button>
})

export default function ParentComponent() {
  const [count, setCount] = useState(0);

  // Чтобы запомнить между рендерами, что handleClick одна и та же функция
  const handleClick = useCallback(() => {
    setCount(prevCount => prevCount + 1)
  }, [])

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={handleClick} />
    </div>
  )
}


// Причины ререндера Button
// 1. prevHandleClick === handleClick => false
  // prevProps !== props
  // fix: useCallback
  // prevHandleClick === handleClick => true
// prevProps === props

// 2. ParentCompoent ререндерится (независимо от того, поменялись ли пропсы Button, Button ререндерится)
  // fix: React.memo()
  // if prevProps === props => не ререндери
  // else (prevProps !== props) => ререндери


// useCallback только в связке с React.memo(). Компонент, которому передается функция из useCallback, должен быть обернут в React.memo()
// React.memo() может быть сам по себе



// 1. Почему React рендерит все поддерево, если родитель перерендерился. Это же звучит неэффективно?
// Это долго. Обход сильно замедляется при увеличении количества компонентов
// React использует эвристический алгоритм обхода деревьев. Таким образом обход всего дерева компонентов линейно зависит от их числа.

// 2. Почему бы не сделать все компоненты React.memo по умолчанию?
// Пропадает смысл быстрого алгоритма обхода
// Рендер делается достаточно быстро, чтобы не забивать этим голову. Поэтому используем только для тормозящих компонентов
// Мы же не кешируем результаты всех функций, которые пишем? Вот и с мемоизацией точно так же
// Мемоизация/кеширование - это покупка скорости засчет использования памяти