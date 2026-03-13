import { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import logoMat from "../assets/logo/Interlocked hands forming a heart.png";
import UserIcon from "../assets/logo/user.png";

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState("home");

    const menuItems = [
        { name: "Home", to: "home" },
        { name: "Profiles", to: "blog" },
        { name: "Stories", to: "success_story" },
        { name: "FAQ", to: "FAQ" },
    ];

    const renderNavItems = (isMobile = false) => {
        return menuItems.map((item) => (
            <li key={item.to}>
                <ScrollLink
                    to={item.to}
                    smooth={true}
                    duration={500}
                    spy={true}
                    onSetActive={() => setActiveMenu(item.to)}
                    className={`cursor-pointer px-4 py-2 block transition rounded-lg ${activeMenu === item.to
                        ? "bg-yellow-400 text-black font-bold"
                        : "text-black hover:text-yellow-400"
                        } ${isMobile ? "w-full text-center" : ""}`}
                >
                    {item.name}
                </ScrollLink>
            </li>
        ));
    };

    return (
        <section>
            <div className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-sm">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-4 h-16">

                    {/* --- Left: Hamburger (Mobile) --- */}
                    <div className="flex items-center lg:hidden">
                        <div className="dropdown">
                            <div tabIndex={0} className="btn btn-ghost p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-white/90 backdrop-blur-md rounded-box mt-3 w-56 p-2 shadow flex flex-col gap-1"
                            >
                                {renderNavItems(true)}
                            </ul>
                        </div>
                    </div>

                    {/* --- Center Logo --- */}
                    <div className="flex-1 flex justify-center lg:justify-start">
                        <Link to="/" className="flex items-center gap-2">
                            <img src={logoMat} alt="Logo" className="h-10 w-10 object-contain" />
                            <span className="text-xl font-bold text-black hover:text-amber-400 transition">Matrimony</span>
                        </Link>
                    </div>

                    {/* --- Center Menu (Desktop) --- */}
                    <ul className="hidden lg:flex menu menu-horizontal gap-6 absolute left-1/2 transform -translate-x-1/2">
                        {renderNavItems()}
                    </ul>

                    {/* --- Right: User Icon --- */}
                    <div className="flex items-center gap-3">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} className="w-10 h-10 rounded-full overflow-hidden border-2 border-white cursor-pointer hover:border-yellow-400 transition">
                                <img src={UserIcon} alt="User" className="w-full h-full object-cover" />
                            </div>
                            <ul tabIndex={0} className="dropdown-content mt-4 z-100 w-52 rounded-xl bg-white shadow-xl p-3 space-y-2">
                                <li>
                                    <Link to="/login" className="block text-center py-2 rounded-lg bg-black hover:bg-yellow-400 hover:text-black transition">
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/signup" className="block text-center py-2 rounded-lg bg-black hover:bg-yellow-400 hover:text-black transition">
                                        Create Account
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Navbar;