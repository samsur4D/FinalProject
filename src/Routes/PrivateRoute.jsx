import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { RiseLoader } from 'react-spinners';

const PrivateRoute = ({children}) => {

    const {user , loading} = useContext(AuthContext)
    const location = useLocation();

    if(loading){
        return  <RiseLoader color={'#F2AE02'} size={20} />
 

    }

    if(user){
        return children
    }

    return <Navigate to='/login' state={ {from: location} } replace></Navigate>
        
    
};

export default PrivateRoute;