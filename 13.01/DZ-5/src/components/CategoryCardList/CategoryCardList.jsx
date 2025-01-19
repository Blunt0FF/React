import Arrow from '../../assets/Arrow.svg'
import Bandage from '../../assets/Bandage.svg'
import Box from '../../assets/Box.svg'
import Car from '../../assets/Car.svg'
import Cart from '../../assets/Cart.svg'
import Circle from '../../assets/Circle.svg'
import ForkKnife from '../../assets/ForkKnife.svg'
import Message from '../../assets/Message.svg'
import Movie from '../../assets/Movie.svg'
import Window from '../../assets/Window.svg'

import CategoryCard from '../CategoryCard/CategoryCard'
import styles from './CategoryCardList.module.css'

export default function CategoryCardList() {
  const cardInfo = [
    { text: 'Финансы', url: Circle },
    { text: 'Грузоперевозки', url: Car },
    { text: 'Дизайн', url: Window },
    { text: 'Ресторанный бизнес', url: ForkKnife },
    { text: 'Медицина', url: Bandage },
    { text: 'Мультимедиа', url: Movie },
    { text: 'Служба поддержки', url: Message },
    { text: 'Менеджмент', url: Box },
    { text: 'Продажи', url: Cart },
  ]
  return (
    <section className={styles.cardList_wrapper}>
      <h2 className={styles.title}>
        Работа
        <br />
        по категориям
      </h2>
      <ul className={styles.cardlist}>
        {cardInfo.map(card => (
          <li key={card.url}>
            <CategoryCard cardInfo={card} />
          </li>
        ))}
        <li>
          <div className={styles.moreCards}>
            <img src={Arrow} alt='Arrow' />
            <p>
              Больше
              <br /> категорий
            </p>
          </div>
        </li>
      </ul>
    </section>
  )
}
