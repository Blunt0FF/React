import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <img src='../../assets/logo.svg' alt='Logo' />
      <nav className={styles.nav}>
        <a href='/' className={styles.link}>
          Главная
        </a>
        <a href='/music' className={styles.link}>
          Музыка
        </a>
        <a href='/communities' className={styles.link}>
          Сообщества
        </a>
        <a href='/friends' className={styles.link}>
          Друзья
        </a>
      </nav>
    </header>
  )
}
