import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Component() {
  const [posts, setPosts] = useState([])

  function fetchData() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setPosts(response.data))
      .catch(err => console.error(err))

    axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: 'Новый пост',
      body: 'Текст нового поста',
      userId: 1
    }).then(res => console.log(res))
  }

  async function asyncAwaitFetchData() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      console.log(response.data)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <ul>
      {posts.map(post => <li key={post.id}>{post.body}</li>)}
    </ul>
  )
}