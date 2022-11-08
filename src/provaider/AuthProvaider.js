import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
import app from '../firebase/firebase.config';


const auth=getAuth(app);
const provaider=new GoogleAuthProvider()

export const Authcontext=createContext()
const AuthProvaider = ({children}) => {
    const [user,setUser]=useState(null)

const googleSignIn=()=>{
   return signInWithPopup(auth,provaider)
}

const login=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}


const createAccount=(email,password)=>{
  return createUserWithEmailAndPassword(auth,email,password)
}


useEffect(()=>{
   const unSubscribe= onAuthStateChanged(auth,currentUser=>{
        console.log(currentUser)
        setUser(currentUser)
    })

    return()=>{
        return unSubscribe()
     }

},[])
 const authInfo={createAccount,login,user,googleSignIn}
    return (
        <Authcontext.Provider value={authInfo}>
        {children}
        </Authcontext.Provider>
    );
};

export default AuthProvaider;