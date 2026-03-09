function DishCard({ item }) {
    return (
        <article className="dish-card">
            <img src={`https://placehold.co/400x260/f5e6c8/5c3d1e?text=${item.imgText}`} alt={item.name} />
            <div className="dish-info">
                <h3>{item.name}</h3>
                <p className="dish-desc">{item.desc}</p>
                <span className="price">{item.price}</span>
            </div>
        </article>
    );
}
export default DishCard;
