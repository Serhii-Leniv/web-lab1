import { useState } from 'react';

function DishCard({ item, isInWishlist, toggleWishlist }) {
    const [showIngredients, setShowIngredients] = useState(false);

    return (
        <article className="dish-card" style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
            <img src={`https://placehold.co/400x260/f5e6c8/5c3d1e?text=${item.imgText}`} alt={item.name} />

            {/* Кнопка вішліста - тільки сердечко в кутку картки */}
            <button
                onClick={() => toggleWishlist(item)}
                style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: '#fff',
                    border: '1px solid #d4a574',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    fontSize: '20px',
                    cursor: 'pointer',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isInWishlist ? '#d4a574' : '#999',
                    transition: 'transform 0.2s',
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                title={isInWishlist ? 'Видалити з вішліста' : 'Додати у вішліст'}
            >
                {isInWishlist ? '❤️' : '🤍'}
            </button>

            <div className="dish-info" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <h3>{item.name}</h3>
                <p className="dish-desc" style={{ flexGrow: 1 }}>{item.desc}</p>

                {showIngredients && (
                    <ul className="ingredients-list" style={{ marginTop: '10px', marginBottom: '10px', paddingLeft: '20px', fontSize: '0.9rem', color: '#555' }}>
                        {item.ingredients.map((ing, idx) => (
                            <li key={idx}>{ing}</li>
                        ))}
                    </ul>
                )}

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>
                    <span className="price" style={{ margin: 0 }}>{item.price}</span>
                    <button
                        className="btn-toggle"
                        onClick={() => setShowIngredients(!showIngredients)}
                        style={{ padding: '6px 12px', fontSize: '0.9rem' }}
                    >
                        {showIngredients ? 'Сховати' : 'Інгредієнти'}
                    </button>
                </div>
            </div>
        </article>
    );
}
export default DishCard;
