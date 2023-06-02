import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { FaCalendarAlt } from 'react-icons/fa';
import { GiWallet } from 'react-icons/gi';
import { BsFillCartFill } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiShoppingBag } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';
import { ImSpoonKnife } from 'react-icons/im';
import { FaBook,FaUsers} from 'react-icons/fa';

import './Dashboard.css';
import useAdmin from '../../../../Hooks/useAdmin';
const Dashboard = () => {
   const [isAdmin]=useAdmin()
    console.log(isAdmin.Admin);
    const admin=true;
    return (
        <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle " />
        <div className="drawer-content flex flex-col items-center justify-center">
     <Outlet/>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side bg-[#D1A054]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content">
            {/* <!-- Sidebar content here --> */}
        
          {
  isAdmin.Admin?<>
            
            <li><NavLink to="/Dashboard/adminhome"><AiFillHome/>Admin Home</NavLink></li>
            <li><NavLink to="/Dashboard/add_item"><ImSpoonKnife/>Add Items</NavLink></li>
            <li><NavLink to="/Dashboard/manageitem"><GiHamburgerMenu/>Manage Items</NavLink></li>
            <li><NavLink to="/Dashboard/managebookings" ><FaBook/>Manage Bookings</NavLink></li>
            <li><NavLink to="/Dashboard/allusers" ><FaUsers/>All Users</NavLink></li>

            
            
            
            
            </>:
            
            
            <>    <li><NavLink to="/"><AiFillHome/>User Home</NavLink></li>
            <li><NavLink to="/reserve"><FaCalendarAlt/>Reservations</NavLink></li>
            <li><NavLink to="/reserve"><GiWallet/>Payment History</NavLink></li>
            <li><NavLink to="/Dashboard/mycart" ><BsFillCartFill/>My Cart</NavLink></li></>
          }
          
          
          
            <div className="divider"></div>
            <li><NavLink to="/reserve"><AiFillHome/>Home</NavLink></li>
            <li><NavLink to="/reserve"><GiHamburgerMenu/>Menu</NavLink></li>
            <li><NavLink to="/reserve"><HiShoppingBag/>Shop</NavLink></li>
            <li><NavLink to="/reserve"><MdEmail/>Contact</NavLink></li>

          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;