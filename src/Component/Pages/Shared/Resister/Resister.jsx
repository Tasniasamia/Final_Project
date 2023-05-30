import React, { useContext, useState } from 'react';
import pik from '../../../../assets/others/authentication1.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../AuthProvider';
import GoogleSign from '../GoogleSign/GoogleSign';
// import Google from './Google';
const Resister = () => {
    // const[success,setSuccess]=useState(null);
    // const[err,setErr]=useState(null);
    const navigate=useNavigate();
    const { register,reset, handleSubmit,formState: { errors } } = useForm();
    const {signup,signout,displayname}=useContext(AuthContext);
    const onSubmit = data => {console.log(data);
        console.log(data.email);
        console.log(data.password);
        console.log(data.name);
        console.log(data.photo);
        signup(data.email,data.password)
        .then((userCredential) => {
          
            const user = userCredential.user;
            console.log(user);
            displayname(data.name,data.photo)
            .then(() => {
              // Profile updated!
              const userdata={name:data.name,email:data.email}
              fetch('http://localhost:6769/users',{
                method:"POST",
                headers:{
                  "content-type":"application/json"
                },
                body:JSON.stringify(userdata)
              }).then(res.json()).then(data=>{console.log(data);})
              // reset();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'You registration has been Successfull',
            showConfirmButton: false,
            timer: 1500
          })
              
              // ...
            }).catch((error) => {
              // An error occurred
              // ...
            });
         
          navigate('/');
            // signout();
            
          
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
           
          });
         
    
    };
    // console.log(watch("example")); 
   

    return (
      
        <div className=" md:flex py-40  items-center justify-between h-[100vh] ">
          <div className="text-center lg:text-left me-2">
            <img src={pik} className='md:w-full' alt="pik" /></div>
          <div className="card w-full   shadow-2xl bg-base-100">
            <h1 className='text-4xl text-center font-bold py-5'>Sign Up Now</h1>
            <form className="card-body"onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name"name="name" className="input input-bordered"{...register("name", { required: true })} />
                {errors.name && <span className='text-red-600'>This field is required</span>}

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email"name="email" className="input input-bordered" {...register("email", { required: true })} />
                {errors.email && <span className='text-red-600'>This field is required</span>}

              </div>
              {/* photo */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" placeholder="photo"name="photo" className="input input-bordered" {...register("photo", { required: true })} />
                {errors.photo && <span className='text-red-600'>This field is required</span>}

              </div>
              {/* photo */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="password"name="password" className="input input-bordered"{...register("password", { required: true, pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/i,maxLength: 20,minLength:8 })} />
                {errors.password?.type === 'required' &&<span className='text-red-600'>This field is required</span>}
                {errors.password?.type === 'minLength' && <p role="alert"className='text-red-600'>8 length required</p>}
                {errors.password?.type === 'pattern' && <p role="alert"className='text-red-600'>Password can be at least one upper case,at least one lower case English letter,at least one digit,at least one special characte</p>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
       
             
              <input type="submit"value="Sign Up" className="btn btn-primary"/>
            
            </form>
            <GoogleSign/>
          </div>
        </div>
  
     
    );
};

export default Resister;