function Chefs() {
    return (
        <section id="chefs" className="section section-alt" style={{ minHeight: '80vh' }}>
            <div className="container">
                <h2 className="section-title">Наші Кухарі</h2>
                <p className="section-subtitle">Майстри, що творять кулінарні шедеври кожного дня</p>

                <div className="cards-grid chefs-grid">
                    <article className="chef-card">
                        <img src="https://placehold.co/300x300/d4a574/fff?text=МП" alt="Марко Поліні" />
                        <div className="chef-info">
                            <h3>Марко Поліні</h3>
                            <p className="chef-role">Шеф-кухар</p>
                            <ul className="chef-skills">
                                <li>Середземноморська кухня</li>
                                <li>Паста ручної роботи</li>
                                <li>Авторські соуси</li>
                            </ul>
                        </div>
                    </article>

                    <article className="chef-card">
                        <img src="https://placehold.co/300x300/d4a574/fff?text=СР" alt="Софія Романенко" />
                        <div className="chef-info">
                            <h3>Софія Романенко</h3>
                            <p className="chef-role">Кондитер</p>
                            <ul className="chef-skills">
                                <li>Французькі десерти</li>
                                <li>Шоколадні вироби</li>
                                <li>Торти на замовлення</li>
                            </ul>
                        </div>
                    </article>

                    <article className="chef-card">
                        <img src="https://placehold.co/300x300/d4a574/fff?text=АК" alt="Андрій Коваль" />
                        <div className="chef-info">
                            <h3>Андрій Коваль</h3>
                            <p className="chef-role">Су-шеф</p>
                            <ul className="chef-skills">
                                <li>Гриль та барбекю</li>
                                <li>М'ясні страви</li>
                                <li>Fusion кухня</li>
                            </ul>
                        </div>
                    </article>

                    <article className="chef-card">
                        <img src="https://placehold.co/300x300/d4a574/fff?text=ОМ" alt="Олена Мельник" />
                        <div className="chef-info">
                            <h3>Олена Мельник</h3>
                            <p className="chef-role">Кухар-технолог</p>
                            <ul className="chef-skills">
                                <li>Вегетаріанські страви</li>
                                <li>Здорове харчування</li>
                                <li>Безглютенове меню</li>
                            </ul>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default Chefs;
