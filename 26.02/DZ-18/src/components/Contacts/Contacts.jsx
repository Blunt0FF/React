import React from 'react';
import { Link } from 'react-router-dom';
import SnapchatIcon from "../../assets/SnapchatIcon.svg"
import FacebookIcon from '../../assets/FacebookIcon.svg';
import XIcon from '../../assets/XIcon.svg';
import styles from './Contacts.module.css';


const Contacts = () => {
  return (
    <section className={styles.contactsSection}>

      <div className={styles.contactsText}>
        <h2>Контакты</h2>
        <span></span>
        <p>Телефон: +8 800 000 00 00</p>
        <p>Email: email@example.com</p>
      </div>

        <div className={styles.maindiv}>

      <form className={styles.contactForm}>
        <div className={styles.contactFormFirst}>
        <input type="email" placeholder="Ваш email" />
        <input type="text" placeholder="Ваше имя" />
        </div>
        <textarea placeholder="Введите сообщение"></textarea>
        <button type="submit">Отправить</button>
      </form>


      <div className={styles.socialLinks}>
        <p>Найдите нас на:</p>
        <div className={styles.socialIcons}>
          <a href="https://www.snapchat.com">
            <img src={SnapchatIcon} alt="Snapchat" />
          </a>
          <a href="https://www.facebook.com">
            <img src={FacebookIcon} alt="Facebook" />
          </a>
          <a href="https://twitter.com">
            <img src={XIcon} alt="X (Twitter)" />
          </a>
        </div>
      </div>
        </div>
    </section>
  );
};

export default Contacts;