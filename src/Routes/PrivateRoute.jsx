import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const location=useLocation();
    console.log(location);

    if (user) {
        return children;
    }
    return <Navigate to='/login'></Navigate>;
   
};

export default PrivateRoute;