import React from 'react'
import Template from '../components/Template'
import signupImage from '../assets/signup.png'
export default function Signup({setIsLoggedIn}) {
  return (
    <Template
    title="Welcome2"
    desc1="lorem ipsem"
    desc2="lorem2 ipsem"
    image={signupImage}
    formtype="signup"
    setIsLoggedIn={setIsLoggedIn}
    />
  )
}
