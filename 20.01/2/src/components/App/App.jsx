import ToDoList from '../ToDoList/ToDoList'
import TodosProvider from '../ToDoProvider/ToDoProvider'
import styles from './App.module.css'

function App() {

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>To Do List</h1>
      <TodosProvider>
        <ToDoList />
      </TodosProvider>
    </div>
  )
}

export default App
