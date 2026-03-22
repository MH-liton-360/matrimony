import Sidebar from "../components/Sidebar";
import { userMenu } from "../menu/userMenu";
import { adminMenu } from "../menu/adminMenu";
import { Outlet } from "react-router-dom";

const Dashboard = ({ user, role, logOut }) => {
    const menus = role === "admin" ? adminMenu : userMenu;

    return (
        <div className="flex">
            <Sidebar user={user} logOut={logOut} menus={menus} />

            <div className="flex-1 p-6 bg-gray-50 min-h-screen">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;