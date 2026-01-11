import { Outlet } from "react-router-dom";
// import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import Landing from "../pages/Landing";

const Main = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <Landing></Landing>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;