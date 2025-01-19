import styles from '../styles/Post.module.css'

export default function Post({ post }) {
    return (
        <div className={styles.post}>
            <h3>{post.id}</h3>
            <p>UserID: {post.userId}</p>
            <p>{post.title}</p>
            <p>{post.body}</p>
        </div>
    )
}