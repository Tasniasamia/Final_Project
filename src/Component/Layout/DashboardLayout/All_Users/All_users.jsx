import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Pages/Shared/AuthProvider';
import { BsTrashFill } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";

const All_users = () => {
    const {data}=useContext(AuthContext);
    const { refetch, data:userData=[] } =useQuery(['usersdata'], async () => {
        const response = await fetch(`http://localhost:6769/usersdata`)
            if (!response.ok) {
              throw new Error('Network response was not ok')
            }
            return  response.json();
      })
    
    
    
    const deleteItem=(id)=>{
        fetch(`http://localhost:6769/usersdata/${id}`,{
            method:"DELETE"
        }).then(res=>res.json()).then(data=>{console.log(data);if(data.deletedCount >0){

            refetch();
            alert("Delete Successfull");
        }})
    }
    
    
    const updateitem=(id)=>{


        fetch(`http://localhost:6769/updateUsers/${id}`,{
            method:"PATCH"
        }).then(res=>res.json()).then(data=>{console.log(data);
        if(data.modifiedCount>0){
            refetch();
            alert("updated Successfully");
        }
        
        })
    }
    

    return (
        <div>
            <h2 className='text-5xl font-bold'>Total Users :   {userData.length}</h2>
            <div>
            <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     {
        userData.map((data,index)=><tr key={index}>
            <th>{index+1}</th>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td onClick={()=>updateitem(data._id)}>{data?.role?"Admin":<AiOutlineUser/>}</td>
            <td>              <button className="btn bg-red-600 text-white border-0"onClick={()=>deleteItem(data._id)}><BsTrashFill/></button>
</td>
    
          </tr>)
     }
     
     
     
     
      
    
    </tbody>
  </table>
</div>
            </div>
         
        </div>
    );
};

export default All_users;