import Sidebar from "../../sidebar/Dashboard/Sidebar";
import userMenu from "../../Components/Dashboards/Menu/User/UserMenu";
import adminMenu from "../../Components/Dashboards/Menu/Admin/AdminMenu";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Dashboard = ({ role }) => {
    // const role = "admin";
    const { user, logOut } = useContext(AuthContext);

    const menus = role === "admin" ? adminMenu : userMenu;

    return (
        <div className="bg-gray-50 min-h-screen">
            <Sidebar user={user} logOut={logOut} menus={menus} />

            <div className="ml-72 min-h-screen p-6">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;