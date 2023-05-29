import React from 'react';
import Footer from '../../Pages/Shared/Footer/Footer';
import Header from '../../Pages/Shared/Header/Header';
import { Outlet, useLocation } from 'react-router-dom';
import { SnackbarProvider, enqueueSnackbar } from 'notistack'


import 'animate.css/animate.min.css';
const Main = () => {
    const loaddata=useLocation();
    console.log(loaddata);
    const Noloaditem=(loaddata.pathname==="/Login") || (loaddata.pathname==="/Resister");
    return (
        <div>
          
          {Noloaditem ||<Header></Header>}  <div>
                <Outlet></Outlet>
            </div>
            <SnackbarProvider />
            {Noloaditem||<Footer></Footer>}
         
        </div>
    );
};

export default Main;