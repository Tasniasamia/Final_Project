import React, { useContext, useState } from 'react';
import pik from '../../../../assets/others/authentication1.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
// import Google from './Google';
const Resister = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(watch("example")); 
    // const receivedata=useContext(authdataall);
    // let navigate = useNavigate();
    // let location = useLocation();
    // let from = location.state?.from?.pathname || "/";

   
    // receivedata.signin(email,password)
    // .then((userCredential) => {
        
    //     const user = userCredential.user;
     
    //     setSuccess("User has submited successfully");
    //     setErr('');
    //     navigate(from, { replace: true });
    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     setSuccess(" ");
    //     setErr(errorMessage);
    //   });

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
                {errors.name && <span>This field is required</span>}

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email"name="email" className="input input-bordered" {...register("email", { required: true })} />
                {errors.email && <span>This field is required</span>}

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="password"name="password" className="input input-bordered"{...register("password", { required: true })} />
                {errors.password && <span>This field is required</span>}

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
       
              <div className="form-control mt-6">
                <button className="btn btn-primary">Resister</button>
              </div>
            </form>
          </div>
        </div>
  
     
    );
};

export default Resister;