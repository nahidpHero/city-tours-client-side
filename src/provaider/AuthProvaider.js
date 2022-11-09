import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config';


const auth=getAuth(app);
const provaider=new GoogleAuthProvider()

export const Authcontext=createContext()
const AuthProvaider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

const googleSignIn=()=>{
   return signInWithPopup(auth,provaider)
}

const login=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}


const createAccount=(email,password)=>{
  setLoading(true)
  return createUserWithEmailAndPassword(auth,email,password)
}

const logOut=()=>{
setLoading(true)
return signOut(auth)
}

useEffect(()=>{
   const unSubscribe= onAuthStateChanged(auth,currentUser=>{
        console.log(currentUser)
        setUser(currentUser)
        setLoading(false)
    })

    return()=>{
        return unSubscribe()
     }

},[])
 const authInfo={createAccount,login,user,googleSignIn,logOut,loading}
    return (
        <Authcontext.Provider value={authInfo}>
        {children}
        </Authcontext.Provider>
    );
};

export default AuthProvaider;