import DishCard from '../components/DishCard';
import { Link } from 'react-router-dom';

function Wishlist({ wishlist, toggleWishlist }) {
    return (
        <section className="section" style={{ minHeight: '80vh' }}>
            <div className="container">
                <h2 className="section-title">Список бажаного (Wishlist) ✨</h2>

                {wishlist.length === 0 ? (
                    <div style={{ textAlign: 'center', marginTop: '40px' }}>
                        <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Ваш віш-ліст поки що порожній.</p>
                        <Link to="/menu" style={{
                            display: 'inline-block',
                            padding: '10px 20px',
                            backgroundColor: '#d4a574',
                            color: '#fff',
                            textDecoration: 'none',
                            borderRadius: '4px'
                        }}>
                            Перейти до Меню
                        </Link>
                    </div>
                ) : (
                    <>
                        <p className="section-subtitle">Страви, які ви хочете спробувати</p>
                        <div className="cards-grid">
                            {wishlist.map((item, index) => (
                                <div key={index} style={{ position: 'relative' }}>
                                    <DishCard item={item} />
                                    <button
                                        onClick={() => toggleWishlist(item)}
                                        style={{
                                            position: 'absolute',
                                            top: '10px',
                                            right: '10px',
                                            background: '#fff',
                                            border: 'none',
                                            borderRadius: '50%',
                                            width: '40px',
                                            height: '40px',
                                            fontSize: '20px',
                                            cursor: 'pointer',
                                            boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                        title="Видалити з віш-ліста"
                                    >
                                        ❌
                                    </button>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}

export default Wishlist;
