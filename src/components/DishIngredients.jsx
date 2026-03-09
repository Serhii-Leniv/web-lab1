// Вимога 1: Блок інгредієнтів страви (DishIngredients)
function DishIngredients({ ingredients, isVisible }) {
    if (!isVisible) return null;
    return (
        <tr className="ingredients-row" style={{ display: 'table-row' }}>
            <td colSpan="3">
                <ul className="ingredients-list">
                    {ingredients.map((ing, index) => (
                        <li key={index}>{ing}</li>
                    ))}
                </ul>
            </td>
        </tr>
    );
}
export default DishIngredients;
