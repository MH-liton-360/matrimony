import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";
import Loading from "../../shared/Loading";

const SecureRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    // loading state handle
    if (loading) {
        return <Loading></Loading>
    }

    // user check
    if (!user) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default SecureRoute;