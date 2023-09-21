import { useLoaderData } from "react-router-dom";
import "./UserDetailes.css"
const UserDetails = () => {
    const user = useLoaderData();
    const {name ,email, website, id, phone, username, address}=user
    return (
        <div className="container">
            <h1>Id : {id}</h1>
            <p>Email : {email}</p>
            <h2>Name: {name}</h2>
            <h1>User name : {username}</h1>
            <p>Website : {website}</p>
            <p>Phone : {phone}</p>
            <p>Address : {address.city}</p>
        </div>
    );
};

export default UserDetails;