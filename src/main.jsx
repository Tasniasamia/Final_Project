import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import router from './Component/Router/Router.jsx';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Component/Pages/Shared/AuthProvider.jsx';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <div className='md:max-w-screen-xl mx-auto'>
 <HelmetProvider>
  <AuthProvider>
  <QueryClientProvider client={queryClient}>
  <RouterProvider router={router} />
    </QueryClientProvider>

 </AuthProvider>

 </HelmetProvider>
</div>
);