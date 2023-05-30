import React from 'react';
import useCart from '../../../../../Hooks/useCart';
import { BsTrashFill } from "react-icons/bs";
import Swal from 'sweetalert2';
import './Mycart.css';
const Mycart = () => {
    const [Cart,refetch]=useCart();
    const totalprice=Math.round(Cart.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price;
      }, 0));
      const deleteItem=(item)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:6769/deletecarts/${item}`,{
                    method:"DELETE",
                   
                })
                .then(res=>res.json())
                .then(data=>{console.log(data);
                if(data.deletedCount>0){
                    refetch()
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }})
             
            }
          })
      }
    return (
        <div className='w-full '>
            <div className='flex justify-between items-center my-2 font-semibold h-[100px]'>
                <h2 className='text-2xl'>Total Items :{Cart.length}</h2>
                <h2 className='text-2xl'>Total price:${totalprice}</h2>
                <button className="btn bg-[#D1A054] border-0">PAY</button>
            </div>
            <div className=" w-full overflow-y-scroll  h-[600px]">
  <table className="table w-full  ">
    {/* head */}
    <thead className='relative' >
      <tr className='w-full top-0 bg-[#D1A054] z-10 sticky'>
     
        <th>#</th>
        <th>Food</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        Cart.map((item,index)=> <tr key={item._id}>

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
            <th>
              <button className="btn bg-red-600 text-white border-0"onClick={()=>deleteItem(item._id)}><BsTrashFill/></button>
            </th>
          </tr>)
      }
    
     
    </tbody>
    {/* foot */}
  
    
  </table>
</div>
        </div>
    );
};

export default Mycart;