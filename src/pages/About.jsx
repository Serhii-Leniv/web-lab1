import RestaurantReviews from '../components/RestaurantReviews';

function About() {
    return (
        <section id="about" className="section" style={{ minHeight: '80vh' }}>
            <div className="container">
                <h2 className="section-title">Про нас</h2>

                <div className="about-grid">
                    <div className="about-text">
                        <p>
                            <strong>La Bella Cucina</strong> — це місце, де кожна страва розповідає свою історію.
                            Заснований у 2010 році, наш ресторан став справжнім домом для цінителів середземноморської
                            кухні в Україні.
                        </p>
                        <p>
                            Ми пишаємося тим, що використовуємо виключно свіжі та сезонні інгредієнти, отримані від
                            місцевих фермерів і перевірених постачальників. Наша кухня — це поєднання традицій Італії та
                            Греції з авторським баченням наших шеф-кухарів.
                        </p>
                        <p>
                            Затишна атмосфера, уважний персонал та бездоганна якість кожної страви — саме це робить La
                            Bella Cucina особливим місцем для сімейних вечерь, романтичних побачень та ділових
                            зустрічей.
                        </p>
                        <div className="about-stats">
                            <div className="stat">
                                <span className="stat-number">15+</span>
                                <span className="stat-label">Років досвіду</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">60+</span>
                                <span className="stat-label">Страв у меню</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">4.9</span>
                                <span className="stat-label">Рейтинг гостей</span>
                            </div>
                        </div>
                    </div>

                    <div className="about-map">
                        <h3>Як нас знайти</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.3282370505754!2d30.52341631557537!3d50.45113647947649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce50f8b6e3c5%3A0x6ac903f8d0588c5d!2sKhreshchatyk%20St%2C%20Kyiv!5e0!3m2!1suk!2sua!4v1615000000000!5m2!1suk!2sua"
                            width="100%" height="320" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Розташування ресторану La Bella Cucina на Google Maps">
                        </iframe>
                    </div>
                </div>

                <RestaurantReviews />
            </div>
        </section>
    );
}

export default About;
