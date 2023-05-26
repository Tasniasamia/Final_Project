import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
    const navitem=(
        <>
        <Link to="/">Home</Link>
        <Link to="/order">Order</Link>

        <Link>DashBoard</Link>
        <Link to="/menu"className=''>Our Menu</Link>
        <Link>Our Shop</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Resister">Resister</Link>
        </>
    )
    return (    
    <div className="navbar md:text-white md:max-w-screen-xl w-full md:fixed p-5   z-10"style={{background:"rgba(0, 0, 0, 0.3)"}}>
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navitem}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case "><p><span className='text-xl md:text-3xl'>BISTRO BOSS </span><br/><span  className={`md:text-lg tracking-widest md:tracking-[0.42em]`} >RESTURANT</span></p></Link>
          <a className=" normal-case "></a>
        </div>
       
        <div className="navbar-end">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 twins">
            {navitem}
          </ul>
        </div>
          <a className="btn ms-3">Login</a>
        </div>
      </div>
    );
};

export default Header;