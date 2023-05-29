import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
 
} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Home/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Shared/Login/Login";
import Resister from "../Pages/Shared/Resister/Resister";
import Private_route from "../Pages/Shared/PrivateRoute/Privateroute";
import Dashboard from "../Layout/DashboardLayout/Dashboard";
import Mycart from "../Pages/Home/Mycart/Mycart";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },{
          path:"/menu",
          element:<Menu></Menu>
        },{
          path:"/Order/:category",
          element:<Order></Order>,
        },{
          path:"/Login",
          element:<Login></Login>
        },{
          path:"/Resister",
          element:<Resister></Resister>

        }
    ]
  },{
    path:"Dashboard",
    element:<Dashboard></Dashboard>,
    children:[
      {
        path:"mycart",
        element:<Mycart></Mycart>
      }
    ]
  }
]);
export default router;