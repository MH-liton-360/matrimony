import { createBrowserRouter } from "react-router-dom";

import Main from "../layouts/Main";
import Landing from "../pages/Landing/Landing";
import Home from "../pages/Home/Home";
import Login from "../pages/Authentication/Login";
import SignUp from "../pages/Authentication/SignUp";
import Error from "../Components/Error/Errors/Error";
import Profile from "../Components/Dashboards/Menus/Users/Profile/Profile";
import Dashboard from "../layouts/Dashboard/Dashboard";
import CreateBiodata from "../Components/Dashboards/Menus/Users/CreateBiodata/CreateBiodata";
import Overview from "../Components/Dashboards/Menus/Users/Overview/Overview";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Main,
        children: [
            { path: "/", Component: Landing },
            { path: "home", Component: Home },
            { path: "login", Component: Login },
            { path: "signup", Component: SignUp },

        ]
    },
    {
        path: "dashboard",
        Component: Dashboard,
        children: [
            { path: "biodata", Component: CreateBiodata },
            { path: "profile", Component: Profile },
            { path: "overview", Component: Overview },

        ]
    },
    { path: "*", Component: Error },


]);

export default router;