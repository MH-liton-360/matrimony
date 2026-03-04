// Navbar.jsx
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import logoMat from "../assets/logo/Interlocked hands forming a heart.png"

const Navbar = () => {
    const navOptions = (
        <>
            <li>
                <ScrollLink to="home" smooth={true} duration={500} className="hover:text-yellow-400 transition-colors cursor-pointer">Home</ScrollLink>
            </li>
            <li>
                <ScrollLink to="blog" smooth={true} duration={500} className="hover:text-yellow-400 transition-colors cursor-pointer">Profiles</ScrollLink>
            </li>
            <li>
                <ScrollLink to="success_story" smooth={true} duration={500} className="hover:text-yellow-400 transition-colors cursor-pointer">Stories</ScrollLink>
            </li>
            <li>
                <ScrollLink to="FAQ" smooth={true} duration={500} className="hover:text-yellow-400 transition-colors cursor-pointer">FAQ</ScrollLink>
            </li>
        </>
    );

    return (
        <section>
            <div className="navbar fixed z-10 bg-gradient-to-r from-white/40 via-white/50 to-transparent backdrop-blur-md shadow-sm">
                <div className="w-full max-w-7xl mx-auto flex items-center justify-center px-4 sm:px-6 relative">

                    {/* Logo */}
                    <div className="absolute lg:left-0 flex items-center gap-1">
                        <img
                            src={logoMat}
                            alt="Logo"
                            className="h-10 w-10 sm:h-12 sm:w-12 md:h-10 md:w-10 object-contain"
                        />
                        <Link
                            to="/"
                            className="text-xl sm:text-2xl md:text-2xl font-bold text-black hover:text-amber-400 transition-colors"
                        >
                            Matrimony
                        </Link>
                    </div>

                    {/* Desktop menu (centered) */}
                    <ul className="hidden lg:flex menu menu-horizontal gap-6">
                        {navOptions}
                    </ul>

                    {/* Desktop buttons */}
                    <div className="absolute right-4 hidden lg:flex gap-2">
                        <Link to="/login">
                            <span className="btn btn-outline text-white bg-accent-content border-white hover:bg-yellow-400 hover:border-yellow-400 hover:text-black">Login</span>
                        </Link>
                        <Link to="/signup">
                            <span className="btn btn-outline text-black bg-amber-50 border-white hover:bg-yellow-400 hover:border-yellow-400 hover:text-black">Create Account</span>
                        </Link>
                    </div>

                    {/* Mobile dropdown */}
                    <div className="dropdown absolute left-0 lg:hidden">
                        <div tabIndex={0} className="btn btn-ghost text-amber-950">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-white/80 backdrop-blur-md rounded-box mt-3 w-72 p-2 shadow flex flex-col gap-2"
                        >
                            {navOptions}
                            <li>
                                <Link to="/login">
                                    <span className="btn btn-outline w-full text-white bg-accent-content border-white hover:bg-yellow-400 hover:border-yellow-400 hover:text-black">Login</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/signup">
                                    <span className="btn btn-outline w-full text-black bg-amber-50 border-white hover:bg-yellow-400 hover:border-yellow-400 hover:text-black">Create Account</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Navbar;