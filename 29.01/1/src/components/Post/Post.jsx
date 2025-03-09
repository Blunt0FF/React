import User from '../../assets/user.svg'
import styles from './Post.module.css'

export default function Post({ post, handleDelete }) {
  return (
    <div className={styles.post}>
      <div className={styles.imageWrapper}>
        <img src={User} alt='User Logo' />
      </div>
      <div className={styles.postContent}>
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.text}>{post.text} </p>
      </div>
      <div className={styles.rightSide}>
        <p className={styles.postId}>{post.id}</p>
        <button
          className={styles.postDeleteBtn}
          onClick={() => handleDelete(post.id)}
        >
          Удалить
        </button>
      </div>
    </div>
  )
}
