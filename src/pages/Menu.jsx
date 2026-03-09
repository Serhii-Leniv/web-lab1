import { useState, useEffect } from 'react';
import DishCard from '../components/DishCard';
import MenuItem from '../components/MenuItem';

// Вимога 1: Компонент Меню (Menu)
function Menu({ wishlist, toggleWishlist }) {
    const [menuItems, setMenuItems] = useState([]);

    // Вимога 2: Логіка сортування (State Management) - Збереження стану
    const [sortOrder, setSortOrder] = useState('default'); // 'default', 'asc', 'desc'

    useEffect(() => {
        fetch(import.meta.env.BASE_URL + 'menu.json')
            .then(res => res.json())
            .then(data => setMenuItems(data))
            .catch(err => console.error('Помилка завантаження меню:', err));
    }, []);

    // Вимога 2: Логіка сортування масиву даних 
    const getSortedItems = () => {
        if (sortOrder === 'default') return menuItems;

        return [...menuItems].sort((a, b) => {
            // Parse price like "195 грн", "245 грн"
            const priceA = parseInt(a.price.replace(/[^\d]/g, ''), 10);
            const priceB = parseInt(b.price.replace(/[^\d]/g, ''), 10);

            if (sortOrder === 'asc') {
                return priceA - priceB;
            } else {
                return priceB - priceA;
            }
        });
    };

    const sortedItems = getSortedItems();

    return (
        <section id="menu" className="section" style={{ minHeight: '80vh' }}>
            <div className="container">
                <h2 className="section-title">Меню</h2>
                <p className="section-subtitle">Вишукані страви з найкращих інгредієнтів</p>

                <div style={{ marginBottom: '30px', textAlign: 'right' }}>
                    <label htmlFor="sortOrder" style={{ marginRight: '10px', fontWeight: 'bold' }}>Сортування за ціною:</label>
                    <select
                        id="sortOrder"
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                        style={{ padding: '8px 12px', borderRadius: '4px', border: '1px solid #d4a574', outline: 'none', cursor: 'pointer' }}
                    >
                        <option value="default">За замовчуванням</option>
                        <option value="asc">Від найдешевшого ↑</option>
                        <option value="desc">Від найдорожчого ↓</option>
                    </select>
                </div>

                <div className="cards-grid">
                    {sortedItems.map((item, index) => {
                        const isInWishlist = wishlist?.some(wItem => wItem.name === item.name);
                        return (
                            <DishCard
                                key={index}
                                item={item}
                                isInWishlist={isInWishlist}
                                toggleWishlist={toggleWishlist}
                            />
                        );
                    })}
                </div>

                <div className="table-wrapper">
                    <h3 className="table-title">Повний прайс-лист страв</h3>
                    <table className="menu-table">
                        <thead>
                            <tr>
                                <th>Назва страви</th>
                                <th>Ціна</th>
                                <th>Дії</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Компоненти пунктів меню динамічно перемальовуються з відсортованого масиву */}
                            {sortedItems.map((item, index) => {
                                const isInWishlist = wishlist?.some(wItem => wItem.name === item.name);
                                return (
                                    <MenuItem
                                        key={index}
                                        item={item}
                                        isInWishlist={isInWishlist}
                                        toggleWishlist={toggleWishlist}
                                    />
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

export default Menu;
