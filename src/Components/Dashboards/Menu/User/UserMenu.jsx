import { FaUser, FaHeart, FaAddressBook, FaCrown, FaCog, FaHome, FaIdCard } from "react-icons/fa";

const UserMenu = [
    {
        name: "Overview",
        path: "/dashboard/user/overview",
        icon: FaHome,
    },
    {
        name: "My Profile",
        path: "/dashboard/profile",
        icon: FaUser,
    },
    {
        name: "Create Biodata",
        path: "/dashboard/biodata",
        icon: FaIdCard,
    },
    {
        name: "Favorites",
        path: "/dashboard/user/favorites",
        icon: FaHeart,
    },
    {
        name: "Contact Requests",
        path: "/dashboard/user/contact-requests",
        icon: FaAddressBook,
    },
    {
        name: "Premium Plan",
        path: "/dashboard/user/premium-plan",
        icon: FaCrown,
    },
    {
        name: "Settings",
        path: "/dashboard/user/settings",
        icon: FaCog,
    },
];

export default UserMenu;