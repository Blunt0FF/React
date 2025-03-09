import axios from 'axios'
import { useForm } from 'react-hook-form'
import styles from './PostForm.module.css'

export default function PostForm() {
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = data => {
    const postData = {
      title: data.title,
      text: data.content,
    }

    axios
      .post(
        'https://6799e5a6747b09cdcccce797.mockapi.io/post-api/posts',
        postData
      )
      .then(res => {
        console.log('OK', res)
        reset()
      })
      .catch(err => console.err(err))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Написать пост</h1>
      <img src='../../assets/user.svg' alt='User' />
      <label htmlFor='title'>Заголовок</label>
      <input
        type='text'
        id='title'
        className={styles.input}
        {...register('title', { required: true })}
      />
      <label htmlFor='content'>Контент</label>
      <textarea
        id='content'
        className={styles.textarea}
        {...register('content', { required: true })}
      />
      <button type='submit' className={styles.button}>
        Отправить
      </button>
    </form>
  )
}
