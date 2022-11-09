import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Authcontext } from '../../../provaider/AuthProvaider';
import { ColorRing} from 'react-loader-spinner'

const PrivetRouts = ({children}) => {
    const {user,loading}=useContext(Authcontext)
    const location=useLocation()
    
    if(loading){
        return <div>
       <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
        </div>
    }
    if(user && user.uid){
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>

    
};

export default PrivetRouts;