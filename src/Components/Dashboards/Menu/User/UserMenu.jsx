import { FaUser, FaHeart, FaAddressBook, FaCrown, FaCog, FaHome, FaIdCard, FaTachometerAlt } from "react-icons/fa";

const UserMenu = [
    {
        name: "Home",
        path: "/home",
        icon: FaHome,
    },
    {
        name: "Overview",
        path: "/dashboard/overview",
        icon: FaTachometerAlt,
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
        name: "View Biodata",
        path: "/dashboard/ViewBiodata",
        // eslint-disable-next-line no-undef
        icon: FaEye,
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