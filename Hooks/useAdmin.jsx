import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../src/Component/Pages/Shared/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useAdmin = () => {
    const{data}=useContext(AuthContext);
    // const[admin,setAdmin]=useState(null);
    const token=localStorage.getItem('accesstoken');
    const [axiosSecure]=useAxiosSecure();

    const { data:isAdmin=[]} = useQuery({
        queryKey: ['isAdmin',data?.email],
        enabled:!!data?.email && !! token,

        queryFn:async () => {
            const response =await axiosSecure.get(`/updateUsersall/${data?.email}`)
            
          console.log(response.data);
          
            return response.data;
          },

        
        })
    // useEffect(()=>{

    //    if(data?.email){
    //     fetch(`http://localhost:6769/updateUsersall/${data?.email}`)
    //     .then(res=>res.json())
    //     .then(data=>{console.log(data);setAdmin(data)})
    //    }
    // },[data])
        
        return [isAdmin];
};

export default useAdmin;