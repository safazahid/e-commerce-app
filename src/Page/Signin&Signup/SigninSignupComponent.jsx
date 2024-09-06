import React from 'react'
import SignInComponent from '../../Components/SignIn/SignInComponent.jsx'
import SignUpComponent from '../../Components/SignUp/SignUpComponent.jsx'
import './signin-signup.scss'

const SigninSignupComponent = () => {
  return (
    <div className='signin-signup'> 
      <SignInComponent/>
      <SignUpComponent/>
    </div>
  )
}

export default SigninSignupComponent;