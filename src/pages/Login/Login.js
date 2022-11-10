import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.jpg'
import { Authcontext } from '../../provaider/AuthProvaider';
import {FaGoogle} from 'react-icons/fa';
import useTittle from '../../useTittle';






const Login = () => {
  const {login,googleSignIn}=useContext(Authcontext)
  const location=useLocation();
  const navigate=useNavigate()
  useTittle("login")

  const from=location.state?.from?.pathname || '/'


    const handleSubmit=(event)=>{
      event.preventDefault()
      const form=event.target;
      const email=form.email.value;
      const password=form.password.value;
      console.log(email,password)
      login(email,password)
      .then(result=>{
        const user=result.user;
        console.log(user);
        navigate(from ,{replace:true})
      })
      .catch(error=>console.log(error))


    }
    const handleGooleSignIn=()=>{
      googleSignIn()
      .then(result=>{
        const user=result.user
        console.log(user)
        navigate('/')
      })
      .catch(error=>console.error(error))
    }
    return (
        <div>
          <div className="hero w-full my-20">
        <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
          <img src={loginImg}></img>
          </div>
          <div className="card  w-full  max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
              <h1 className="text-5xl font-bold text-center">Login now!</h1>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
              </div>
            </form>
            <div  className="text-center w-full ">
              <button onClick={handleGooleSignIn} className="btn btn-primary m-4 px-20"><FaGoogle/> Sign In With google</button>
            </div>
            
           <div>
             <p className='text-center'>New to City Tours <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
           </div>
          </div>
        </div>
      </div>
            
        </div>
    );
};

export default Login;