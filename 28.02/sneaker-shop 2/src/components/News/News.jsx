import Banner from "../../assets/images/Banner.png";
import { Image } from './News.styles';

export default function News() {
  return (
    <section>
      <Image src={Banner} alt="News" />
    </section>
  )
}