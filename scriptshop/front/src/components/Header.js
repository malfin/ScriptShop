import {Link} from 'react-router-dom';

function Header() {
    return (
        <header className="d-flex justify-content-center py-3 mt-3">
            <ul className="nav nav-pills">
                {/*<li className="nav-item"><Link to={"/"} className="nav-link active">Main</Link></li>*/}
                <li className="nav-item"><Link to={"/users"} className="nav-link">Users</Link></li>
                <li className="nav-item"><Link to={"/category"} className="nav-link">Category</Link></li>
                <li className="nav-item"><Link to={"/products"} className="nav-link">Products</Link></li>
                <li className="nav-item"><a href="/#" className="nav-link">Поддержка</a></li>
            </ul>
        </header>
    );
}

export default Header;
