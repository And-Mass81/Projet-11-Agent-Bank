import { Navigate } from "react-router-dom";
import { userService } from "../_services/user.service";

const AuthGuard = ({ children }) => {
  
    if(!userService.isLogged()){
        return <Navigate to= "/login"/>
    }

    return children
};

export default AuthGuard;
