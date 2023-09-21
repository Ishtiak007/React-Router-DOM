import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import "./User.css";

const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <div>
            <h2>Total Users : {users.length}</h2>
            <h1>I am from User</h1>
            <p>Jindegi ne mey har har ke jitne wale ko bazigaar kahte hee</p>
           <div  className="container">
           {
                users.map(user => <User user={user} key={user.id}></User>)
            }
           </div>
        </div>
        </div>
    );
};

export default Users;