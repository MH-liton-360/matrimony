import { Link } from "react-router-dom";

const Sidebar = ({ user, logOut, closeSidebar }) => {
    return (
        <div className="flex flex-col h-full">
            <div className="mb-6">
                <h2 className="text-xl font-bold text-white">
                    {user?.displayName || "User"}
                </h2>
            </div>

            <ul className="flex flex-col gap-3 flex-1">
                <li>
                    <Link
                        to="/profile"
                        onClick={closeSidebar} // sidebar close
                        className="block hover:bg-yellow-400 hover:text-black p-2 rounded transition"
                    >
                        Profile
                    </Link>
                </li>
                <li>
                    <Link
                        to="/settings"
                        onClick={closeSidebar} // sidebar close
                        className="block hover:bg-yellow-400 hover:text-black p-2 rounded transition"
                    >
                        Settings
                    </Link>
                </li>
            </ul>

            <button
                onClick={() => {
                    logOut();
                    closeSidebar(); // sidebar close on logout
                }}
                className="bg-yellow-400 text-black px-3 py-2 rounded mt-auto"
            >
                Logout
            </button>
        </div>
    );
};

export default Sidebar;