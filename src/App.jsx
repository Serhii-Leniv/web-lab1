// Вимога 3: Маршрутизація (Routing) - SPA-маршрутизація
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Menu from './pages/Menu';
import Chefs from './pages/Chefs';
import About from './pages/About';
import Wishlist from './pages/Wishlist';
import { useState } from 'react';

import './styles.css';

function App() {
    const [wishlist, setWishlist] = useState([]);

    const toggleWishlist = (dish) => {
        setWishlist(prev => {
            const exists = prev.find(item => item.name === dish.name);
            if (exists) {
                return prev.filter(item => item.name !== dish.name);
            }
            return [...prev, dish];
        });
    };

    return (
        <Router>
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Menu wishlist={wishlist} toggleWishlist={toggleWishlist} />} />
                    <Route path="/menu" element={<Menu wishlist={wishlist} toggleWishlist={toggleWishlist} />} />
                    <Route path="/chefs" element={<Chefs />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/wishlist" element={<Wishlist wishlist={wishlist} toggleWishlist={toggleWishlist} />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
