import DisneyLogo from '../../assets/Disney.svg'
import FacebookLogo from '../../assets/Facebook.svg'
import MicrosoftLogo from '../../assets/Microsoft.svg'
import SonyLogo from '../../assets/Sony.svg'
import ColaLogo from '../../assets/Cola.svg'
import styles from './Companies.module.css'
import Container from '../Container/Container'

export default function Companies() {
  return (
    <div className={styles.companies}>
      <Container>
        <div className={styles.wrapper}>
          <p className={styles.companies_text}>Помогаем найти работу:</p>
          <ul className={styles.companies_list}>
            <li>
              <img alt='Disney' src={DisneyLogo} />
            </li>
            <li>
              <img alt='Facebook' src={FacebookLogo} />
            </li>
            <li>
              <img alt='Microsoft' src={MicrosoftLogo} />
            </li>
            <li>
              <img alt='Sony' src={SonyLogo} />
            </li>
            <li>
              <img alt='Cola-Cola' src={ColaLogo} />
            </li>
          </ul>
        </div>
      </Container>
    </div>
  )
}
