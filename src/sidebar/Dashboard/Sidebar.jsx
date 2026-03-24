import { NavLink, useNavigate } from "react-router-dom";
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";

const Sidebar = ({ user, logOut, menus }) => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logOut();
            navigate("/home", { replace: true });
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };
    const goHome = () => {
        navigate("/home", { replace: true }); // Dashboard → Main Home
    };
    return (
        <div className="fixed top-0 left-0 w-72 h-screen bg-white border-r border-gray-200 shadow-sm flex flex-col">
            <div className="p-5 border-b border-gray-200">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center text-2xl text-gray-500">
                        {user?.photoURL ? (
                            <img
                                src={user.photoURL}
                                alt="User"
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <FaUserCircle />
                        )}
                    </div>

                    <div>
                        <h2 className="text-base font-bold text-gray-800">
                            {user?.displayName || "User"}
                        </h2>
                        <p className="text-sm text-gray-500 break-all">
                            {user?.email || "No Email"}
                        </p>
                    </div>
                </div>
            </div>

            <ul className="flex-1 p-4 space-y-2">
                {menus.map((item) => {
                    const Icon = item.icon;

                    if (item.path === "/home") {
                        return (
                            <li key={item.path}>
                                <button
                                    onClick={goHome}
                                    className="flex items-center gap-3 px-4 py-3 rounded-xl transition text-gray-700 hover:bg-gray-100 w-full"
                                >
                                    <Icon className="text-lg" />
                                    <span>{item.name}</span>
                                </button>
                            </li>
                        );
                    }
                    return (
                        <li key={item.path}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 px-4 py-3 rounded-xl transition ${isActive
                                        ? "bg-yellow-400 text-black font-semibold"
                                        : "text-gray-700 hover:bg-gray-100"
                                    }`
                                }
                            >
                                <Icon className="text-lg" />
                                <span>{item.name}</span>
                            </NavLink>
                        </li>
                    );
                })}

                <li>
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-xl transition"
                    >
                        <FaSignOutAlt />
                        Logout
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;