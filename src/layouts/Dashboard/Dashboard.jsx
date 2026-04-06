import Sidebar from "../../sidebar/Dashboard/Sidebar";
import userMenu from "../../Components/Dashboards/Menu/User/UserMenu";
import adminMenu from "../../Components/Dashboards/Menu/Admin/AdminMenu";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import DashboardNavbar from "../../shared/DashboardNavbar";

const Dashboard = ({ role }) => {
    // const role = "admin";
    const { user, logOut } = useContext(AuthContext);

    const menus = role === "admin" ? adminMenu : userMenu;

    return (
        <section>
            <title>Dashboard - Matrimony</title>
            <div className="bg-gray-50 min-h-screen">
                <Sidebar user={user} logOut={logOut} menus={menus} />

                {/* navbar  */}
                <div style={{ flex: 1, position: "relative" }}>
                    {/* Navbar fixed with inline CSS */}
                    <div style={{
                        position: "fixed",
                        top: 0,
                        left: 288,  // ml-72 = 18rem = 288px
                        width: "calc(100% - 288px)",
                        backgroundColor: "#333",
                        color: "#fff",
                        padding: "12px 20px",
                        zIndex: 1000
                    }}>
                        <DashboardNavbar></DashboardNavbar>
                    </div>
                </div>

                {/* Outlet  */}
                <div className="ml-72 min-h-screen p-6">
                    <Outlet />
                </div>

            </div>
        </section>
    );
};

export default Dashboard;