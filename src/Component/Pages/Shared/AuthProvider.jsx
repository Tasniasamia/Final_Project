/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendEmailVerification, onAuthStateChanged, updateProfile, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import app from '../../../../Firebase_config';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import axios from 'axios';
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

// const [axiosSecure]=useAxiosSecure()

    console.log(data);


    // const data="Tasnia";



    const provider = new GoogleAuthProvider();
    //sign by google
    const googlesign = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);



    }
    //resister
    const signup = (email, password) => {
        setLoading(true);

        return createUserWithEmailAndPassword(auth, email, password)

    }
    //sign in
    const signin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)

    }
    //signout
    const signout=()=>{
        signOut(auth).then(() => {
           
            setData('');
            setLoading(false);
            
          }).catch((error) => {
           
          });
    }
    // email verification

    //onAuthChanged
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
           
           
                setData(currentUser);
                console.log(currentUser);
                if(currentUser){
                    axios.post('http://localhost:6769/jwt', {email: currentUser.email})
                    .then(data =>{
                        // console.log(data.data.token)
                        localStorage.setItem('accesstoken', data.data.token)
                        setLoading(false);
                    })
                }
                else{
                    localStorage.removeItem("accesstoken");
                    setLoading(false);
                }
           
          
           
        })

        return () => {
            return unsubscribe();
        }
    }, [])
    //update displayname
    function displayname(name, photo) {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo

        })
    }
   
    const authInfo = {
        signup, signin,data, setData,loading,signout,displayname,googlesign
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>

        </div>
    );
};

export default AuthProvider;