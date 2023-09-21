import PropTypes from 'prop-types';
import "./User.css";
import { Link } from 'react-router-dom';
const User = ({user}) => {
    const {name, id, email, phone}= user;
    return (
        <div className='card'>
            <p>ID : {id}</p>
            <h3>Name : {name}</h3>
            <p>Email : {email}</p>
            <p>Phone : {phone}</p>
           <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};
User.propTypes = {
    user: PropTypes.object
  };

export default User;