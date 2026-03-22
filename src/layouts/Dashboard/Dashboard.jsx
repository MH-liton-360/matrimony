import Sidebar from "../../sidebar/Dashboard/Sidebar";
import userMenu from "../../Components/Dashboards/User/UserMenu/UserMenu";
import adminMenu from "../../Components/Dashboards/Admin/AdminMenu/AdminMenu";
import { Outlet } from "react-router-dom";

const Dashboard = ({ user, role, logOut }) => {
    // const role = "admin";
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