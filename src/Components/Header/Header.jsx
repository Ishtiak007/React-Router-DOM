import { Link } from 'react-router-dom';
import './header.css'
const Header = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/user">User</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
            </nav>
        </div>
    );
};

export default Header;