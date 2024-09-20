import React from 'react'
import Template from '../components/Template'
import loginImage from '../assets/login.png'

const Login = ({setIsLoggedIn}) => {
  return (
   <Template
   title="Welcome"
   desc1="lorem"
   desc2="lorem2"
   image={loginImage}
   formtype="login"
   setIsLoggedIn={setIsLoggedIn}
   />
  )
}

export default Login
