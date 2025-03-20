import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import ScrollToTop from './components/ScrollToTop';
import Header from "./components/Header";
import HomePage from './pages/HomePage';
import Categories from './pages/Categories';
import Category from './components/Category'; 
import Footer from './components/Footer';
import ProductList from './pages/ProductList';
import DiscountProducts from './pages/DiscountProducts';
import ProductPage from './pages/ProductPage';
import NotFoundPage from './pages/NotFoundPage';
import CartPage from './pages/CartPage';

function App() {
  return (
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>  
          <Route path="/" element={<HomePage />} />  
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:id" element={<Category />} /> 
          <Route path="/products" element={<ProductList />} /> 
          <Route path="/discounts" element={<DiscountProducts />} /> 
          <Route path="/products/:id" element={<ProductPage />} /> 
          <Route path="*" element={<NotFoundPage />} />         
          <Route path="/cart" element={<CartPage/>} /> 
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;