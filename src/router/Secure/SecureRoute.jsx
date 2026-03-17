import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const SecureRoute = () => {

    const { user } = useContext(AuthContext);
    return (
        <div>

        </div>
    );
};

export default SecureRoute;