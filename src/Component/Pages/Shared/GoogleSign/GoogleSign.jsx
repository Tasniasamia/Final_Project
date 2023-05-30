import React from 'react';
import { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
const GoogleSign = () => {
    const{googlesign}=useContext(AuthContext)
    let navigate = useNavigate();
    let location = useLocation();
    let from=location.state?.from?.pathname || "/";

    const google=()=>{
       
        googlesign() .then((result) => {
            const user = result.user;
            navigate(from, { replace: true });
            const userdata={email:user.email
                ,name:user.displayName
            }
            fetch('http://localhost:6769/users',{
                method:"POST",
                headers:{
                  "content-type":"application/json"
                },
                body:JSON.stringify(userdata)
              }).then(res.json()).then(data=>{console.log(data);})
      
 
         




          
          }).catch((error) => {
           
            const errorMessage = error.message;
          
         
       
          }); }
    return (
        <div>
            <div className="divider"></div>  
            <div className='flex justify-center items-center text-4xl py-5'onClick={google}>
<FcGoogle/>
            </div>
        </div>
    );
};

export default GoogleSign;