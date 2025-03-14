import React from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

export default function App() {
  return (
    <div className='container'>
      <h1 className='title'>Todo List</h1>
      <TodoForm />
      <TodoList />
    </div>
  )
}
