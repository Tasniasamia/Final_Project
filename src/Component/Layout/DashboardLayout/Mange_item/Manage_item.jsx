import React from 'react';
import Sectiontitle from '../../../Pages/Shared/Sectiontitle/Sectiontitle';
import useSecureMenu from '../../../../../Hooks/useSecureMenu';
import useAxiosSecure from '../../../../../Hooks/useAxiosSecure';

const Manage_item = () => {
    const[menu,refetch,isLoading]=useSecureMenu();
    const [axiosSecure]=useAxiosSecure();
    const deletefunction=(id)=>{
         axiosSecure.delete(`/deletemenuitem/${id}`)
         .then(res=>{console.log(res.data);refetch()})
    }
    return (
        <div>
            <Sectiontitle title="Hurry Up"subtitle="Manage All Items"></Sectiontitle>
            <div className='w-full '>
           
            <div className=" w-full overflow-y-scroll  h-[600px]">
  <table className="table w-full  ">
    {/* head */}
    <thead className='relative' >
      <tr className='w-full top-0  bg-[#D1A054] z-10 sticky'>
     
        <th>#</th>
        <th>Food</th>
        <th> Name</th>
        <th>Price</th>
        <th>Update</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        menu.map((item,index)=> <tr key={item._id}>

            <td>
              {index+1}
            </td>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                
              </div>
            </td>
            <td>
{item.name}              
            </td>
            <td>{item.price}</td>
            <td >Update</td>
            <th onClick={()=>deletefunction(item._id)}>
             Delete
            </th>
          </tr>)
      }
    
     
    </tbody>
   
  
    
  </table>
</div>
        </div>
        </div>
    );
};

export default Manage_item;