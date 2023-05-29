import { useContext } from "react";
import { AuthContext } from "../src/Component/Pages/Shared/AuthProvider";
import { useQuery, useMutation,
    useQueryClient, } from "@tanstack/react-query";


const useCart = () => {
    const{data}=useContext(AuthContext);
   

   
    const { refetch, data:Cart=[] } = useQuery({
        queryKey: ['catscollection',data?.email],
        queryFn:async () => {
            const response = await fetch(`http://localhost:6769/catscollection?email=${data?.email}`)
            if (!response.ok) {
              throw new Error('Network response was not ok')
            }
            return response.json()
          },

        
        })
        
        return [Cart,refetch];
   
};

export default useCart;
