import { Link } from 'react-router-dom'

const Header = function () {
    
    return <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link"> Home </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/signin" className="nav-link"> Sign in </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/signup" className="nav-link"> Sign up </Link>
                    </li>
                </ul>
            </div>
        </nav>
}

export default Header;