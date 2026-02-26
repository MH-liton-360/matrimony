import { Link } from "react-router-dom";

// This is React spa scrolling system 
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {

    const navOptions = <>

        <li>
            <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                className="hover:text-yellow-400 transition-colors cursor-pointer"
            >
                Home
            </ScrollLink>
        </li>
        <li>
            <ScrollLink
                to="success_story"
                smooth={true}
                duration={500}
                className="hover:text-yellow-400 transition-colors cursor-pointer"
            >
                Service
            </ScrollLink>
        </li>
        <li>
            <ScrollLink
                to="blog"
                smooth={true}
                duration={500}
                className="hover:text-yellow-400 transition-colors cursor-pointer"
            >
                Blog
            </ScrollLink>
        </li>
        <li>
            <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="hover:text-yellow-400 transition-colors cursor-pointer"
            >
                Contact
            </ScrollLink>
        </li>
    </>

    return (
        <section>
            <div className="navbar fixed z-10 w-full bg-black/40 backdrop-blur-md text-white shadow-md">

                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>

                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-black/70 backdrop-blur-md rounded-box mt-3 w-52 p-2 shadow">

                            {navOptions}

                        </ul>

                    </div>

                    <Link to="/" className="text-2xl font-bold text-white hover:text-amber-400 transition-colors">
                        Global~Matrimony
                    </Link>

                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>

                <div className="navbar-end">
                    <a className="btn btn-outline text-white border-white hover:bg-yellow-400 hover:border-yellow-400 hover:text-black">Login</a>
                </div>
            </div>
        </section>
    );
};

export default Navbar;