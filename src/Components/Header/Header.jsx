import { Link, NavLink } from 'react-router-dom';
import './header.css'
const Header = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/users">Users</NavLink>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
            </nav>
        </div>
    );
};

export default Header;