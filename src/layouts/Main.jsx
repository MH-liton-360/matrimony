// import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../shared/Navbar";
// import Footer from "../shared/Footer";

const Main = () => {

    // const location = useLocation();
    // const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');

    return (
        <div>
            {/* Navbar  */}
            <Navbar></Navbar>

            {/* Outlet  */}
            {/* <Outlet></Outlet> */}

            {/* Footer  */}
            {/* {noHeaderFooter || < Footer ></Footer>} */}

        </div >
    );
};

export default Main;