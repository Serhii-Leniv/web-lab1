import { useState } from 'react';
import DishIngredients from './DishIngredients';

// Вимога 1: Окрема страва в меню (MenuItem)
function MenuItem({ item, isInWishlist, toggleWishlist }) {
    const [showIngredients, setShowIngredients] = useState(false);

    return (
        <>
            <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                    <button
                        className="btn-toggle"
                        onClick={() => setShowIngredients(!showIngredients)}
                    >
                        {showIngredients ? 'Сховати' : 'Інгредієнти'}
                    </button>
                    <button
                        className="btn-toggle"
                        style={{
                            marginLeft: '8px',
                            backgroundColor: 'transparent',
                            color: isInWishlist ? '#d4a574' : '#999',
                            border: '1px solid #d4a574',
                            borderRadius: '50%',
                            width: '36px',
                            height: '36px',
                            padding: '0',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '18px'
                        }}
                        onClick={() => toggleWishlist(item)}
                        title={isInWishlist ? 'Видалити з вішліста' : 'Додати у вішліст'}
                    >
                        {isInWishlist ? '❤️' : '🤍'}
                    </button>
                </td>
            </tr>
            <DishIngredients ingredients={item.ingredients} isVisible={showIngredients} />
        </>
    );
}
export default MenuItem;
