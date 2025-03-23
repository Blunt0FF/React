import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const { data } = await axios.get('https://67beee1cb2320ee05011f9de.mockapi.io/api/cartData');
        setCartItems(data);
      } catch (error) {
        console.error("Error fetching cart data: ", error);
      }
    };

    fetchCartItems();
  }, []);

  const addToCart = async (product) => {
    try {
      const { data } = await axios.post(
        'https://67beee1cb2320ee05011f9de.mockapi.io/api/cartData',
        product
      );
      setCartItems(prevItems => [...prevItems, data]);
    } catch (error) {
      console.error("Error adding product to cart: ", error);
    }
  };

  const deleteToCart = async (productId) => {
    try {
      await axios.delete(`https://67beee1cb2320ee05011f9de.mockapi.io/api/cartData${productId}`,);
      setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    } catch (error) {
      console.error("Error deleting product to cart: ", error);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, deleteToCart }}>
      {children}
    </CartContext.Provider>
  );
};