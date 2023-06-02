import React, { useState } from 'react';
import Sectiontitle from '../../../Pages/Shared/Sectiontitle/Sectiontitle';
import { ImSpoonKnife } from 'react-icons/im';
import useAxiosSecure from '../../../../../Hooks/useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../../../Pages/Shared/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const Add_item = () => {
  const[axiosSecure]=useAxiosSecure();
  const{data}=useContext(AuthContext);
   
  // const token=localStorage.getItem("accesstoken");
  // console.log(token);
const [img,setImg]=useState();
  const handledata=(event)=>{
    event.preventDefault();
    const name=event.target.recipe_name.value;
   const receipe_des=event.target.recipe_details.value;
   const Category=event.target.Category.value;
   const price=parseFloat(event.target.price.value);
    const image=event.target.image.files[0];
    console.log(image);
    const formData = new FormData()
    formData.append('image',image);
    const url=`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_PROCESS_KEY}`
    fetch(url,{
      method:"POST",
      body:formData,
    }).then(res=>res.json()).then(data=>{console.log(data.data.display_url);setImg(data.data.display_url)})
 
 const postData={
  
name:name,

recipe:receipe_des,

image:img,

category:Category,

price:price
 }


   axiosSecure.post('/addintomenu',postData)
   .then(data=>{console.log(data.data)})
  
        
     
 
 
  }

    return (
        <div className='w-full p-5'>
            <div>
                <Sectiontitle title="What's new?"subtitle="ADD AN ITEM"></Sectiontitle>
            </div>
            <form className='w-full'onSubmit={handledata}>

            <div className="form-control w-full">
  <label className="label">
    <span className="label-text">Recipe Name*</span>
  </label>
<input type="text" placeholder="Recipe Name"name="recipe_name"  className="input input-bordered w-full" />

</div>
<div className='flex'>
<div className="form-control w-full">
  <label className="label">
    <span className="label-text">Category*</span>
  </label>
  <select name="Category" id="Category"className="input input-bordered w-full">
  <option value="Others" >Others</option>

  <option value="Salad">Salad</option>
  <option value="Soup">Soup</option>
  <option value="Dessert">Dessert</option>
  <option value="Drinks">Drinks</option>
  <option value="Pizza">Pizza</option>

</select>
</div>
<div className="form-control w-full ms-3">
  <label className="label">
    <span className="label-text">Price*</span>
  </label>
<input type="text" placeholder="Price"name="price" className="input input-bordered w-full" />

</div>
</div>

<div className="form-control w-full">
<label className="label">
    <span className="label-text">Recipe Details*</span>
  </label>
  <textarea cols="50"rows="10"name="recipe_details">

  </textarea>

</div>
<input type="file"name="image" className="mt-5  w-full max-w-xs"style={{background:"#E8E8E8"}} /><br/>


<button className="btn btn-sm my-5 border-0"style={{backgroundColor:"linear-gradient(90deg, #835D23 0%, #B58130 100%)"}}>Add Item <ImSpoonKnife className="ms-2"/></button>
            </form>

        </div>
    );
};

export default Add_item;