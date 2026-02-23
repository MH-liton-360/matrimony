import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../pages/Login";
import Landing from "../pages/Landing";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Landing></Landing>,
            },
            {
                path: "login",
                element: <Login></Login>,
            },
        ]
    },
]);

export default router;