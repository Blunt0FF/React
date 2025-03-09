import axios from 'axios'
import { useEffect, useState } from 'react'
import Post from '../Post/Post'
import styles from './PostList.module.css'

export default function PostList() {
  const [allPosts, setAllPosts] = useState([])
  const [currentPosts, setCurrentPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(0)

  const POSTS_PER_PAGE = 3

  async function fetchPosts() {
    try {
      setLoading(true)
      const res = await axios.get(
        'https://6799e5a6747b09cdcccce797.mockapi.io/post-api/posts'
      )
      setAllPosts(res.data)
      setCurrentPosts(res.data.slice(0, 3))
      setLoading(false)
    } catch (error) {
      setError(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  function loadMorePosts() {
    const newPage = page + 1
    setPage(newPage)
    console.log(newPage)

    const start = newPage * POSTS_PER_PAGE
    const end = start + POSTS_PER_PAGE
    setCurrentPosts(allPosts.slice(start, end))
  }

  function handleDelete(id) {
    const start = page * POSTS_PER_PAGE
    const end = start + POSTS_PER_PAGE
    const newPosts = allPosts.filter(post => post.id !== id)
    setAllPosts(newPosts)
    console.log(start, end, newPosts.length)

    setCurrentPosts(newPosts.slice(start, end))
  }

  if (loading) {
    return <p>Posts are loading...</p>
  }

  if (error) {
    return <p>{error.message}</p>
  }

  return (
    <div className={styles.postListContainer}>
      <h2 className={styles.title}>Список постов</h2>

      <ul className={styles.postList}>
        {currentPosts.map(post => (
          <Post key={post.id} post={post} handleDelete={handleDelete} />
        ))}
      </ul>

      {currentPosts.length > 0 &&
        allPosts.length > (page + 1) * POSTS_PER_PAGE && (
          <button className={styles.nextBtn} onClick={loadMorePosts}>
            Next
          </button>
        )}
    </div>
  )
}
