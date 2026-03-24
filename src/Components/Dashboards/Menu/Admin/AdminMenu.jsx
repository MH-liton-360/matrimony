import { FaUsers, FaList, FaCrown, FaChartBar, FaCog, FaHome, FaTachometerAlt, } from "react-icons/fa";

const AdminMenu = [
    {
        name: "Home",
        path: "home",
        icon: FaHome,
    },
    {
        name: "Overview",
        path: "/dashboard/admin/overview",
        icon: FaTachometerAlt,
    },
    {
        name: "Manage Users",
        path: "/dashboard/admin/manage-users",
        icon: FaUsers,
    },
    {
        name: "Manage Biodatas",
        path: "/dashboard/admin/manage-biodatas",
        icon: FaList,
    },
    {
        name: "Premium Requests",
        path: "/dashboard/admin/premium-requests",
        icon: FaCrown,
    },
    {
        name: "Reports",
        path: "/dashboard/admin/reports",
        icon: FaChartBar,
    },
    {
        name: "Settings",
        path: "/dashboard/admin/settings",
        icon: FaCog,
    },
];
export default AdminMenu;