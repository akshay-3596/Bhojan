import React, { useState } from 'react'
import './login-popup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currState,setCurrstate]=useState('Sign up')

  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
        <div className="ligin-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=> setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {
                currState==='Login'?<></>:
            
            <input type="text" placeholder='Your Name' required />
         }
            <input type="email" placeholder='Your Email' required />
            <input type="password" placeholder='password' required />
        </div>
        <button>{currState==='Sign up'?"create Account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing I agree to the terms of use & privacy policy.</p>
        </div>
        {
            currState==='Login'
            ?<p>Create a New Account?<span onClick={()=>setCurrstate('Sign up')}>click here</span></p>
            :<p>Create a New Account?<span onClick={()=>setCurrstate('Login')}>click here</span></p>
        }
      </form>
    </div>
  )
}

export default LoginPopup