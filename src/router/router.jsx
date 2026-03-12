import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../pages/Login";
import Landing from "../pages/Landing";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Main,
        children: [
            { path: "/", Component: Landing },
            { path: "login", Component: Login },
            { path: "signup", Component: SignUp },
            { path: "home", Component: Home },
            { path: "login", Component: Login },
        ]
    },
]);

export default router;