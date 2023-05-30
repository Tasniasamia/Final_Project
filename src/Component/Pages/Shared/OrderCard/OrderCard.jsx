import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../../../Hooks/useCart";

const OrderCard = ({indexdata}) => {
 const{data}=useContext(AuthContext);
 const location=useLocation();
 const navigate=useNavigate();
 const [,refetch]=useCart();
// console.log(data);
    
    const {image,price,name,recipe,_id}=indexdata;
  
  
    const handleclick=(indexdata)=>{
console.log(indexdata) ;  
if(data&&data.email){
  const senditems={name,image,price,email:data.email,unic_id:_id};

  fetch('http://localhost:6769/carts',{
                method:"POST",
               headers:{
                   "content-type":"application/json"
             },
              body:JSON.stringify(senditems)
          })
  .then(res=>res.json())
  .then(data=>{console.log(data);
  if(data.insertedId){
  refetch()
Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })


  }
  
  })
}
else{
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Do you Want to Sign in!'
  }).then((result) => {
    if (result.isConfirmed) {
      navigate('/Login',{state:{from:location}});}
  Swal.fire(
        'Login Now!',
        'Please Login your account.',
        'success'
      )
  
  })

 
}

 }
    return (
        <div className="card w-96 bg-base-100">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body ">
  <div className='bg-black text-white w-[45px] absolute right-0 top-0 mx-5 mt-5'>${price}</div>

    <h2 className="text-2xl font-bold text-center">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions text-center">
    <button className="btn btn-active text-warning"onClick={()=>handleclick(indexdata)}>Add To Cart</button>
    </div>
  </div>
</div>
    );
};

export default OrderCard;