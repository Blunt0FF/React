import Header from '../Header/Header'
import PostForm from '../PostForm/PostForm'
import PostList from '../PostList/PostList'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <PostList />
        <PostForm />
      </main>
    </div>
  )
}

export default App
