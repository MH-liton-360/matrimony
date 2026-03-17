import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

const SecureRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    // loading state handle
    if (loading) {
        return <div className="text-center mt-10">Loading...</div>;
    }

    // user check
    if (!user) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default SecureRoute;