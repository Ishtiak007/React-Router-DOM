import PropTypes from 'prop-types';
import './Post.css'
import { Link, useNavigate } from 'react-router-dom';
const Post = ({post}) => {
    const {userId,title}=post;
    const navigate = useNavigate()
    const showMore =()=>{
        navigate(`/post/${userId}`)
    }
    return (
        <div className='post'>
            <h2>User Id : {userId}</h2>
            <p>Title : {title}</p>
            <Link to={`/post/${userId}`}><utton>Show more</utton></Link>
            <button onClick={showMore}>More</button>
        </div>
    );
};
Post.propTypes = {
    post : PropTypes.object
};
export default Post;