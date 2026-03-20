import { createBrowserRouter } from "react-router-dom";

import Main from "../layouts/Main";
import Landing from "../pages/Landing/Landing";
import Home from "../pages/Home/Home";
import Login from "../pages/Authentication/Login";
import SignUp from "../pages/Authentication/SignUp";
import Error from "../Components/Error/Errors/Error";
import Profile from "../pages/Profile/Profile";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Main,
        children: [
            { path: "/", Component: Landing },
            { path: "home", Component: Home },
            { path: "login", Component: Login },
            { path: "signup", Component: SignUp },
            { path: "*", Component: Error },
            { path: "profile", Component: Profile }
        ]
    },
]);

export default router;