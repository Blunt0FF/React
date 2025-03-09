import axios from 'axios';
import { useEffect, useState } from 'react';
import News from '../News/News';
import ProductCard from '../ProductCard/ProductCard';
import { StyledMain, Content, Products, Title } from './Main.styles.js';

export default function Main() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // axios => response: { data: '' }
        const { data } = await axios.get('https://67beee1cb2320ee05011f9de.mockapi.io/api/productData');
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchProducts();
  }, []);


  return (
    <StyledMain>
      <Content>
        <News />
        <Title>Products</Title>
        <Products>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Products>
      </Content>
    </StyledMain>
  );
}
