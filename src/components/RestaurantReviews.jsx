import { useState } from 'react';

// Вимога 1: Відгуки про ресторан (RestaurantReviews) з реальним State Management
function RestaurantReviews() {
    const [reviews, setReviews] = useState([
        { author: 'Іван', text: 'Чудовий ресторан! Паста просто неймовірна.' },
        { author: 'Олена', text: 'Дуже затишна атмосфера і смачна піца.' }
    ]);
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() && comment.trim()) {
            setReviews(prev => [...prev, { author: name.trim(), text: comment.trim() }]);
            setName('');
            setComment('');
        }
    };

    return (
        <div className="feedback-section">
            <h3>Залиште свій відгук</h3>
            <form className="feedback-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="userName">Ваше ім'я:</label>
                    <input
                        type="text"
                        id="userName"
                        required
                        placeholder="Введіть ваше ім'я"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="userComment">Ваш відгук:</label>
                    <textarea
                        id="userComment"
                        required
                        placeholder="Напишіть ваші враження..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn-submit">Залишити відгук</button>
            </form>

            <div className="comments-container">
                <h4>Відгуки клієнтів:</h4>
                <ul className="comments-list">
                    {reviews.map((review, index) => (
                        <li key={index}>
                            <span className="comment-author">{review.author}: </span>
                            <span className="comment-text">{review.text}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default RestaurantReviews;
