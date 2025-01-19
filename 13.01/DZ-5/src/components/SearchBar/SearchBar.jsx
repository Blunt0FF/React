import Companies from '../Companies/Companies'
import Container from '../Container/Container'
import styles from './SearchBar.module.css'

import SearchLogo from '../../assets/Search.svg'
import LocationLogo from '../../assets/Location.svg'
import Background from '../../assets/Background.svg'

export default function SearchBar() {
  return (
    <section className={styles.section}>
      <img src={Background} alt='Background' className={styles.background} />
      <Container>
        <h1 className={styles.heading}>
          Один клик
          <br /> и работа в кармане
        </h1>
        <form className={styles.form}>
          <div className={styles.input_wrapper}>
            <img src={SearchLogo} alt='Search' className={styles.input_icon} />
            <input
              className={styles.input}
              placeholder='Должность или компания'
            />
          </div>
          <div className={styles.input_wrapper}>
            <img
              src={LocationLogo}
              alt='Location'
              className={styles.input_icon}
            />
            <input className={styles.input} placeholder='Город, Страна' />
          </div>
          <button className={styles.button}>Поиск</button>
        </form>
      </Container>
      <Companies />
    </section>
  )
}
