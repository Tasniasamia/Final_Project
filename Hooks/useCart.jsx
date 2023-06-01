import { useContext } from "react";
import { AuthContext } from "../src/Component/Pages/Shared/AuthProvider";
import { useQuery, useMutation,
    useQueryClient, } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useCart = () => {
    const{data}=useContext(AuthContext);
   
const token=localStorage.getItem("accesstoken");
console.log(token);
const [axiosSecure]=useAxiosSecure();

   
    const { refetch, data:Cart=[] } = useQuery({
        queryKey: ['catscollection',data?.email],
        enabled:!!data?.email && !! token,
        // queryFn:async () => {
        //     const response = await fetch(`http://localhost:6769/catscollection?email=${data?.email}`
            
        //     )

        //     // if (!response.ok) {
        //     //   throw new Error('Network response was not ok')
        //     // }
        //     return response.json()
        //   },
        queryFn:async () => {
            const response = await axiosSecure(`/catscollection?email=${data?.email}` )
            console.log(response.data);

            return response.data
          },

        
        })
        
        return [Cart,refetch];
   
};

export default useCart;
