import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Home = () => {
    return (
        <div>           
            <Header></Header>            
            <Outlet></Outlet>
            <div>
                <li>Bangladesh</li>
                <li>Australia</li>
                <li>Nepal</li>
                <li>Japan</li>
                <li>Mishor</li>               
            </div>
           <Footer></Footer>
        </div>
    );
};

export default Home;