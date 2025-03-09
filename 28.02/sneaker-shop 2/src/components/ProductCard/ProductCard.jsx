import { useContext } from 'react';
import { Card, Image, Title, Actions, Price, Amount, AddButton } from './ProductCard.styles.js';
import { CartContext } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const { image, name, price } = product;
  const { addToCart } = useContext(CartContext);

  return (
    <Card>
      <Image src={image} alt={name} />
      <Title>{name}</Title>
      <Actions>
        <div>
          <Price>PRICE:</Price>
          <Amount>{price}</Amount>
        </div>
        <AddButton onClick={() => addToCart(product)}>+</AddButton>
      </Actions>
    </Card>
  )
}