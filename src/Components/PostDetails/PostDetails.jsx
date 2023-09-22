import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {userId, title, body}=post
    return (
        <div>
            <h2>User Id : {userId}</h2>
            <h3>Title : {title}</h3>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;