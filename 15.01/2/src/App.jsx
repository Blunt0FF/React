import Timer from './assets/components/Timer'
import Styles from '/src/assets/styles/Timer.module.css'
import PostList from './assets/components/PostList'


function App() {
  return (
    <div className={Styles.app}>
      <Timer/>
      <PostList />

    </div>
  )
}

export default App
