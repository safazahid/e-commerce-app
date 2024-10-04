import React from 'react'
import styled from 'styled-components'
import SignInComponent from '../../Components/SignIn/SignInComponent.jsx'
import SignUpComponent from '../../Components/SignUp/SignUpComponent.jsx'
// import './signin-signup.scss'

const SigninSignupComponent = () => {
  const Container = styled.div`
    width: 900px;
    display: flex;
    justify-content: space-between;
  `
  return (
    <Container className='signin-signup'> 
      <SignInComponent/>
      <SignUpComponent/>
    </Container>
  )
}

export default SigninSignupComponent;