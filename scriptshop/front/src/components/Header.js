import {Link} from 'react-router-dom';

function Header({isAuthenticated, logout}) {

    let loginLink, loginTitle, loginHandler;
    loginLink = "/login";
    loginTitle = "login";
    if (isAuthenticated) {
        loginLink = "/logout";
        loginTitle = "logout";
        loginHandler = logout;
    }
    return (
        <header className="d-flex justify-content-center py-3 mt-3">
            <ul className="nav nav-pills">
                <li className="nav-item"><Link to={"/"} className="nav-link">Index</Link></li>
                <li className="nav-item"><Link to={"/users"} className="nav-link">Users</Link></li>
                <li className="nav-item"><Link to={"/category"} className="nav-link">Category</Link></li>
                <li className="nav-item"><Link to={"/products"} className="nav-link">Products</Link></li>
                <li className="nav-item"><Link to={loginLink} className="nav-link"
                                               onClick={loginHandler}>{loginTitle}</Link></li>
                {loginLink && <li className="nav-item"><Link to={"/register"} className="nav-link"
                >Заргистрироваться</Link></li>}

            </ul>
        </header>
    );
}

export default Header;
