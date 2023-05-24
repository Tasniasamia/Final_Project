import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
 
} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        }
    ]
  },
]);
export default router;