import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../src/Component/Pages/Shared/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
    const{data}=useContext(AuthContext);
    // const[admin,setAdmin]=useState(null);

    const { data:isAdmin=[]} = useQuery({
        queryKey: ['isAdmin',data?.email],
        queryFn:async () => {
            const response = await fetch(`http://localhost:6769/updateUsersall/${data?.email}`)
            
          console.log("responsedata",response);
          
            return response.json()
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