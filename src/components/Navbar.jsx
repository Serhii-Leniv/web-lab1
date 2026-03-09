import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="site-header">
            <div className="header-inner">
                <div className="logo">
                    <span className="logo-icon">🍽️</span>
                    <span className="logo-text">La Bella Cucina</span>
                </div>

                <button
                    className="nav-toggle"
                    aria-label="Відкрити меню"
                    aria-expanded={isOpen}
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className={`main-nav ${isOpen ? 'is-open' : ''}`} aria-label="Основна навігація">
                    <ul className="nav-list">
                        <li><Link to="/menu" className="nav-link" onClick={closeMenu}>Меню</Link></li>
                        <li><Link to="/chefs" className="nav-link" onClick={closeMenu}>Наші Кухарі</Link></li>
                        <li><Link to="/about" className="nav-link" onClick={closeMenu}>Про нас</Link></li>
                        <li><Link to="/wishlist" className="nav-link" onClick={closeMenu}>Wishlist ✨</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
