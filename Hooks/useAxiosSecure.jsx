// import { useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useContext } from 'react';
// import { AuthContext } from '../src/Component/Pages/Shared/AuthProvider';

// const useAxiosSecure = () => {
//   const navigate = useNavigate();
//   const { signout } = useContext(AuthContext); // Assuming you have a logout method in your AuthContext

//   // Create an Axios instance with the provided base URL
//   const axiosSecure = axios.create({
//     baseURL:'http://localhost:6769',
//   });

//   // Add an interceptor to inject the authorization header
//   useEffect(() => {
//     const interceptor = axiosSecure.interceptors.request.use((config) => {
//       const token = localStorage.getItem('accesstoken');
// console.log(token);
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }

//       return config;
//     });

//     return () => {
//       axiosSecure.interceptors.request.eject(interceptor);
//     };
//   }, []);

//   // Add an interceptor to handle 401 and 403 responses
//   useEffect(() => {
//     const interceptor = axiosSecure.interceptors.response.use(
//       (response) => response,
//       (error) => {
//         if (error.response) {
//           const { status } = error.response;

//           if (status === 401 || status === 403) {
//             // Log out the user asynchronously and navigate to the login page
//             signout().then(() => {
//               navigate('/Login');
//             });
//           }
//         }

//         return Promise.reject(error);
//       }
//     );

//     return () => {
//       axiosSecure.interceptors.response.eject(interceptor);
//     };
//   }, [navigate, signout,axiosSecure]);

//   return [axiosSecure];
// };

// export default useAxiosSecure;









import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../src/Component/Pages/Shared/AuthProvider';

const useAxiosSecure = () => {
  const { signout } = useContext(AuthContext);
  const navigate = useNavigate(); 

  const axiosSecure = axios.create({
    baseURL: 'http://localhost:6769', 
  });

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem('accesstoken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          await signout();
          navigate('/Login');
        }
        return Promise.reject(error);
      }
    );
  }, [navigate,signout,axiosSecure]);

  return [axiosSecure];
};

export default useAxiosSecure;