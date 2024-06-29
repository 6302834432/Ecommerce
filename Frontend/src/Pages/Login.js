import React, { useState } from 'react'
import './CSS/Login.css'
const Login = () => {
  const [state, Setstate] = useState("Login");
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: ""
  })
  const changeHandler = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value })
  }
  const LoginInToPage = async () => {
    let responseData;
    await fetch ('http://localhost:4000/login',{
      method:'POST',
      headers:{
        Accept:"application/json",
        'Content-Type':"application/json"
      },
      body:JSON.stringify(formData),
    
    })
    .then ((res)=>res.json()).then(data=>responseData=data)
    if (responseData.success){
      console.log(responseData)
      window.location.replace("/")
    }
    else{
      let error=responseData.error;
      alert(error)
    }
  }
  const SignupInToPage = async () => {
    let responseData;
    console.log(formData)
    await fetch ('http://localhost:4000/signup',{
      method:'POST',
      headers:{
        Accept:"application/form-data",
        'Content-Type':"application/json"
      },
      body:JSON.stringify(formData),

    }).then((res)=>res.json()).then((data)=>responseData=data)
    console.log(responseData)
    if (responseData.success){
     
     window.location.replace('/')
      let token =responseData.token
      localStorage.setItem('auth-token',token)
    }
    if (responseData.error){alert(responseData.error)}

  }
  return (
    <div className='login'>
      <div className='login-container'>
        <h1>
          {state}
        </h1>
        <div className='login-fields'>
          {state === "Signup" ? <input  name="name" value={formData.name} onChange={changeHandler} type='text' placeholder='Your name' /> : <></>}
          <input   name="email" value={formData.email} onChange={changeHandler} type='email' placeholder='Email Adress' />
          <input  name="password" value={formData.password} onChange={changeHandler} type='password' placeholder='Password' />
        </div>
        <button onClick={state === "Login" ?()=> LoginInToPage() :()=> SignupInToPage()}> Continue</button>
        {state === "Signup" ? <p className='login-login' onClick={() => { Setstate("Login") }}>Already have an account?
          <span>Login</span>
        </p>
          : <p className='login-login' onClick={() => Setstate("Signup")}>click here to create account?
            <span>Signup</span>
          </p>}
        <div className='login-agree'>
          <input type='checkbox' name='' id='' />
          <p>
            by continuing, i agree to the terms of use & privacy policy .
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login