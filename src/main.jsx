import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import router from './Component/Router/Router.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className='md:max-w-screen-xl mx-auto'>
 
    <RouterProvider router={router} />
</div>
);