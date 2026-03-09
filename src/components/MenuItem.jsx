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
                            backgroundColor: isInWishlist ? '#d4a574' : 'transparent',
                            color: isInWishlist ? '#fff' : 'inherit',
                            border: '1px solid #d4a574'
                        }}
                        onClick={() => toggleWishlist(item)}
                    >
                        {isInWishlist ? '❤️ У Вішлісті' : '🤍 В Вішліст'}
                    </button>
                </td>
            </tr>
            <DishIngredients ingredients={item.ingredients} isVisible={showIngredients} />
        </>
    );
}
export default MenuItem;
