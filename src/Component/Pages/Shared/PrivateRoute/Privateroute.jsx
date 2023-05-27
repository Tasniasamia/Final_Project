import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';

const Private_route = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();
    // console.log(location);
    // console.log(loading);
    // console.log("hello");
    // if(user){
    //     return children
    // }
    if(loading){
        return <div>Loading..........</div>
    }
   return (
        user ? <div>{ children }</div> : <Navigate to={ '/login' } state={ { from: location } } replace />
    );
};

export default Private_route;