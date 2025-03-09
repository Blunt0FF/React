import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Cart from './components/Cart/Cart';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import {CartProvider} from './context/CartContext.jsx';

export default function App() {
    return (
        <BrowserRouter>
            <CartProvider>
                <div style={{ height: '100vh' }}>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Main/>}/>
                        <Route path="/cart" element={<Cart/>}/>
                        <Route path="/contacts" element={<Contacts/>}/>
                    </Routes>
                    <Footer/>
                </div>
            </CartProvider>
        </BrowserRouter>
    );
}
