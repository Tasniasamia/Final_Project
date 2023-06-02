import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../src/Component/Pages/Shared/AuthProvider';

const useSecureMenu = () => {
    const{data}=useContext(AuthContext);
    const token=localStorage.getItem("accesstoken");
    console.log(token);
    const [axiosSecure]=useAxiosSecure();
    
       
        const {data:menu=[],refetch,isLoading } = useQuery({
            queryKey: ['menu',data?.email],
            enabled:!!data?.email && !! token,
            
            queryFn:async () => {
                const response = await axiosSecure.get(`/menus` )
                console.log(response.data);
    
                return response.data
              },
    
            
            })
            
            return [menu,refetch,isLoading];
    };


export default useSecureMenu;