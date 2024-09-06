import React from 'react'
import './CustomButton.scss'

const CustomButtonComponent =({children,googleSignIn, ...otherProps}) => {
  return (
  
      <button className={`${googleSignIn ? 'google-sign-in' : "" } custom-button`} {...otherProps} >
        {children}
      </button>
  
  )
}

export default CustomButtonComponent