import { Outlet } from "react-router-dom";
import Header from "../Header/Header";


const Home = () => {
    return (
        <div>
           
            <Header></Header>
            <h1>I am from Home</h1>
            <Outlet></Outlet>
           
        </div>
    );
};

export default Home;