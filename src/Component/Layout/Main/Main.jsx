import React from 'react';
import Footer from '../../Pages/Shared/Footer/Footer';
import Header from '../../Pages/Shared/Header/Header';
import { Outlet, useLocation } from 'react-router-dom';

const Main = () => {
    const loaddata=useLocation();
    console.log(loaddata);
    const Noloaditem=(loaddata.pathname=="/Login") || (loaddata.pathname=="/Resister");
    return (
        <div>
          
          {Noloaditem ||   <Header></Header>}  <div>
                <Outlet></Outlet>
            </div>
            {Noloaditem ||      <Footer></Footer>}
         
        </div>
    );
};

export default Main;