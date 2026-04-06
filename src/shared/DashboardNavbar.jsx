import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { FaUserCircle } from "react-icons/fa";

export default function DashboardNavbar() {
    const { user } = useContext(AuthContext); // Firebase user object

    return (
        <nav className="bg-amber-100 px-4 py-2 flex items-center justify-between">
            {/* Left side: Brand / Title */}
            <div className="text-gray-950 font-semibold text-lg">Dashboard</div>

            {/* Right side: Icons + User */}
            <div className="flex items-center space-x-4">
                {/* Notification Bell */}
                <button className="relative text-gray-700 hover:text-gray-900">
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
                        1
                    </span>
                    🔔
                </button>

                {/* User avatar + role */}
                <div className="flex gap-1">
                    <div className="flex items-center space-x-2 border-2">
                        {user?.photoURL ? (
                            <img
                                src={user.photoURL}
                                alt="avatar"
                                className="w-8 h-8 rounded-full object-cover"
                            />
                        ) : (
                            <FaUserCircle className="w-8 h-8 text-gray-700" />
                        )}
                        <span className="font-medium text-gray-800">
                            {user?.role === "admin" ? "Admin" : "User"}
                        </span>
                    </div>

                    <button className="px-4 py-1 bg-black text-white rounded-lg hover:bg-yellow-400 hover:text-black">logout</button>
                </div>
            </div>
        </nav>
    );
}