import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useRef, useEffect } from "react";


import logoMat from "../assets/logo/Interlocked hands forming a heart.png";
import UserIcon from "../assets/logo/user.png";
import { AuthContext } from "../context/AuthContext";

import Sidebar from "../sidebar/profile/Sidebar";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const [activeMenu, setActiveMenu] = useState("home");
    const [openSidebar, setOpenSidebar] = useState(false);

    const menuItems = [
        { name: "Home", to: "home" },
        { name: "Profiles", to: "Features_Members" },
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
                    offset={-70}
                    onSetActive={() => setActiveMenu(item.to)}
                    className={`cursor-pointer px-4 py-2 block rounded-lg transition ${activeMenu === item.to
                        ? "bg-yellow-400 text-black font-semibold"
                        : "text-black hover:text-yellow-500"
                        } ${isMobile ? "w-full text-center" : ""}`}
                >
                    {item.name}
                </ScrollLink>
            </li>
        ));
    };
    const sidebarRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setOpenSidebar(false);
            }
        };

        if (openSidebar) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [openSidebar]);

    return (
        <>
            <section>
                <div className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-sm">
                    <div className="max-w-7xl mx-auto flex items-center justify-between px-4 h-16">

                        {/* Mobile Menu */}
                        <div className="lg:hidden">
                            <div className="dropdown">
                                <div tabIndex={0} className="btn btn-ghost p-2">
                                    ☰
                                </div>
                                <ul className="dropdown-content bg-white rounded-box mt-3 w-56 p-2 shadow">
                                    {renderNavItems(true)}
                                </ul>
                            </div>
                        </div>

                        {/* Logo */}
                        <div className="flex-1 flex justify-center lg:justify-start">
                            <Link to="/" className="flex items-center gap-2">
                                <img src={logoMat} className="h-10 w-10" />
                                <span className="text-xl font-bold text-black hover:text-yellow-500">
                                    Matrimony
                                </span>
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <ul className="hidden lg:flex gap-6 absolute left-1/2 -translate-x-1/2">
                            {renderNavItems()}
                        </ul>

                        {/* Right Side */}
                        {user ? (
                            <div
                                onClick={() => setOpenSidebar(true)}
                                className="cursor-pointer"
                            >
                                <img
                                    src={user?.photoURL || UserIcon}
                                    className="w-9 h-9 rounded-full border-2 hover:border-yellow-400"
                                />
                            </div>
                        ) : (
                            <div className="flex gap-3">
                                <Link
                                    to="/login"
                                    className="px-4 py-1 bg-black text-white rounded-lg hover:bg-yellow-400 hover:text-black"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/signup"
                                    className="px-4 py-1 bg-black text-white rounded-lg hover:bg-yellow-400 hover:text-black"
                                >
                                    Sign Up
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Sidebar Drawer */}
            {openSidebar && (
                <>
                    {/* Overlay */}
                    <div
                        onClick={() => setOpenSidebar(false)}
                        className="fixed inset-0 bg-black/50 cursor-pointer z-50"
                    ></div>

                    {/* Sidebar */}
                    <div
                        className="fixed top-16 right-4 w-72 bg-white rounded-2xl shadow-2xl z-60"
                    >
                        <Sidebar
                            user={user}
                            logOut={logOut}
                            closeSidebar={() => setOpenSidebar(false)}
                        />
                    </div>
                </>
            )}
        </>
    );
};

export default Navbar;