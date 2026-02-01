import React,{useState} from 'react'
import './LoginSignup.css'

import user_icon from '../Assets/person.png'
import lock_icon from '../Assets/password.png'
import email_icon from '../Assets/email.png'

const LoginSignup = () => {

    const [action, setAction] = useState('Login');

  return (
    <div className='container'>
        {/* This is header */}
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
{/* This is container */}

        <div className='inputs'>
            {action==='Login'?<div></div>:<div className='input'>
            <img src={user_icon} alt='' />
            <input  type='text' placeholder='Name' />
        </div>}
          
        <div className='input'>
            <img src={email_icon} alt='' />
            <input  type='email' placeholder='Email Id' />
        </div>
        <div className='input'>
            <img src={lock_icon} alt='' />
            <input  type='password' placeholder='Password'/>
        </div>
        </div>
        {action==='Sign Up'?<div></div>:<div className="forget-password">Lost Password? <span>Click here!</span></div>}
                <div className="submit-container">
            <div className={action==='Login'?'submit gray':'submit'} onClick={()=>{setAction('Sign Up')}}>Sign Up</div>
            <div className={action==='Sign Up'?'submit gray':'submit'} onClick={()=>{setAction('Login')}}>Login</div>
        </div>    

    </div>
  )
}

export default LoginSignup