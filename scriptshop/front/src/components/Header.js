function Header() {
    return (
        <header className="d-flex justify-content-center py-3 mt-3">
            <ul className="nav nav-pills">
                <li className="nav-item"><a href="/#" className="nav-link active"
                                            aria-current="page">Главная</a></li>
                <li className="nav-item"><a href="/#" className="nav-link">Поддержка</a></li>
            </ul>
        </header>
    );
}

export default Header;
