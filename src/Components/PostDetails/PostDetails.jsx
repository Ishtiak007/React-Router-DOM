import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {

    const {postId} = useParams();
    console.log(postId);

    const post = useLoaderData();
    const {userId, title, body}=post;
    const navigate = useNavigate()
    const goBack=()=>{
        navigate(-1);
    }
    return (
        <div>
            <h2>User Id : {userId}</h2>
            <h3>Title : {title}</h3>
            <p>{body}</p>
            <button onClick={goBack}>Go Back</button>
        </div>
    );
};
export default PostDetails;