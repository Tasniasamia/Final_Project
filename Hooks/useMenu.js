import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../src/Component/Pages/Shared/AuthProvider';

const useMenu = () => {
    const data=useContext(AuthContext);
    const [menu,setMenu]=useState([]);
    const [load,setLoad]=useState(true);

    useEffect(()=>{
        setLoad(true);
        fetch(`http://localhost:6769/menu`)
        .then(res=>res.json())
        .then(data=>{setMenu(data);setLoad(false)})
    },[])
    return [menu,load];
//     const token=localStorage.getItem("accesstoken");
// console.log(token);
// const [axiosSecure]=useAxiosSecure();

   
//     const {data:menu=[],refetch,isLoading } = useQuery({
//         queryKey: ['menu',data?.email],
//         enabled:!!data?.email && !! token,
        
//         queryFn:async () => {
//             const response = await axiosSecure.get(`/menu` )
//             console.log(response.data);

//             return response.data
//           },

        
//         })
        
//         return [menu,refetch,isLoading ];
// };
}
export default useMenu;