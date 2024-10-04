import React from 'react'
// import './CustomButton.scss'
import styled from 'styled-components'

const CustomButtonComponent =({children, ...otherProps}) => {
  const Button = styled.button`
    min-width: 150px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-weight: bolder;
    border: none;
    cursor: pointer;

    &:hover{
        background-color: white;
        color: black;
        border: 1px solid black;
}
`
  return (
  
      <Button {...otherProps} >
        {children}
      </Button>
  
  )
}

export default CustomButtonComponent