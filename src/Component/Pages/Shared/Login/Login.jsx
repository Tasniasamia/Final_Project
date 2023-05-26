import React, { useContext, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import pik from '../../../../assets/others/authentication1.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useRef } from 'react';
// import Google from './Google';
const Login = () => {
    const[success,setSuccess]=useState(null);
    const[err,setErr]=useState(null);

   useEffect(()=>{
    loadCaptchaEnginge(6); 

   },[])
   const dataref=useRef(null);
   const[False,setFalsey]=useState(true);
   const datavalid=()=>{
        const datavalue=dataref.current.value;
        if (validateCaptcha(datavalue)==true) {
            
            alert('Captcha Matched');
            setFalsey(false);
        }
   
        else {
            alert('Captcha Does Not Match');
            setFalsey(true);

        }
   }
    // const receivedata=useContext(authdataall);
    // let navigate = useNavigate();
    // let location = useLocation();
    // let from = location.state?.from?.pathname || "/";
const handlefunction=(event)=>{
    event.preventDefault();
    const email=event.target.email.value;
    const password=event.target.password.value;
   
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
}
    return (
      
        <div className=" md:flex py-40  items-center justify-between h-[100vh] ">
          <div className="text-center lg:text-left me-2">
            <img src={pik} className='md:w-full' alt="pik" /></div>
          <div className="card w-full   shadow-2xl bg-base-100">
            <h1 className='text-4xl text-center font-bold py-5'>Login Now</h1>
            <form className="card-body"onSubmit={handlefunction}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
        <LoadCanvasTemplate /></span>
                </label>
                <input type="text"ref={dataref} placeholder="Enter the text of captcha" className="input input-bordered" />
                <button className='btn btn-primary'onClick={datavalid}>Validate</button>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary"disabled={False}>Login</button>
              </div>
            </form>
          </div>
        </div>
  
     
    );
};

export default Login;