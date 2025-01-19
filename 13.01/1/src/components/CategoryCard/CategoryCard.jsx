import styles from './CategoryCard.module.css'

export default function CategoryCard({ cardInfo }) {
  return (
    <div className={styles.card}>
      <img src={cardInfo.url} alt={cardInfo.text} />
      <p>{cardInfo.text}</p>
    </div>
  )
}
