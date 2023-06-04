import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';
import useAdmin from '../../../../../Hooks/useAdmin';

const AdminRoute= ({children}) => {
    const {data,loading}=useContext(AuthContext);
    const [isAdmin,isAdminLoading]=useAdmin();

    const location=useLocation();
    console.log(location);
  
    if(data && isAdmin){
        return children
    }
    if(loading || isAdminLoading){
        return <div>Loading2.....</div>
    }
    return <Navigate to="/Login"state={{from:location}}></Navigate>
};

export default AdminRoute;