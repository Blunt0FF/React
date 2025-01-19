import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.links}>
        <a href='#' className={styles.logo}>
          Cooljob
        </a>
        <a href='#' className={styles.link}>
          Поиск работы
        </a>
        <a href='#' className={styles.link}>
          Поиск стартапов
        </a>
      </nav>
      <nav className={styles.links}>
        <a href='#' className={styles.link}>
          Регистрация
        </a>
        <button type='button' className={styles.sign_button}>
          Вход
        </button>
      </nav>
    </header>
  )
}
