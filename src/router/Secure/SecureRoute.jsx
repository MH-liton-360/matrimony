import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

const SecureRoute = ({ children }) => {

    const { user } = useContext(AuthContext);

    if (user && user?.email) {
        return children;
    }
    return <Navigate to={ }></Navigate>
};

export default SecureRoute;