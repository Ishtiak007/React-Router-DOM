import PropTypes from 'prop-types';
import './Post.css'
import { Link } from 'react-router-dom';
const Post = ({post}) => {
    const {userId,title}=post;
    return (
        <div className='post'>
            <h2>User Id : {userId}</h2>
            <p>Title : {title}</p>
            <Link to={`/post/${userId}`}><button>Show more</button></Link>
        </div>
    );
};
Post.propTypes = {
    post : PropTypes.object
};
export default Post;