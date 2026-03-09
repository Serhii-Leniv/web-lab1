function Footer() {
    return (
        <footer className="site-footer" id="footer">
            <div className="container footer-grid">
                <div className="footer-brand">
                    <div className="logo logo-light">
                        <span className="logo-icon">🍽️</span>
                        <span className="logo-text">La Bella Cucina</span>
                    </div>
                    <p>Ресторан середземноморської кухні. Відкриті щодня з 11:00 до 23:00.</p>
                </div>
                <div className="footer-contact">
                    <h4>Контакти</h4>
                    <address>
                        <p>📍 <strong>Адреса:</strong> вул. Хрещатик, 22, м. Київ, 01001</p>
                        <p>📞 <strong>Телефон:</strong> <a href="tel:+380441234567">+38 (044) 123-45-67</a></p>
                        <p>✉️ <strong>Email:</strong> <a href="mailto:info@labellacucina.ua">info@labellacucina.ua</a></p>
                    </address>
                </div>
                <div className="footer-hours">
                    <h4>Години роботи</h4>
                    <ul>
                        <li><span>Пн–Пт:</span> 11:00 – 23:00</li>
                        <li><span>Субота:</span> 10:00 – 24:00</li>
                        <li><span>Неділя:</span> 10:00 – 22:00</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 La Bella Cucina. Всі права захищені.</p>
            </div>
        </footer>
    );
}

export default Footer;
