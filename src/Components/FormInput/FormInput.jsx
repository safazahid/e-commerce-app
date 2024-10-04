import React from 'react'
// import './FormInput.scss'
import styled from 'styled-components'

const FormInput= ({handleChange , label, ...otherProps}) => {
  const subColor = 'grey'
  const Container = styled.div`
    position: relative;
    margin: 45px 0;
  `
  const Input = styled.input`
    background: none;
    background-color: white;
    color: ${subColor};
    font-size: 20px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${subColor};
    &:focus{
        outline: none;
  `
  const Label = styled.label`
    color: ${subColor};
    font-size: 15px;
    font-weight: normal;
    position: absolute;
    left: 5px;
    top: 10px;
    transition: 200ms ease all;
  `
  return (
    <Container>
      {label ? <Label> {label}</Label> : null}
      <Input onChange={handleChange} {...otherProps}/>
    </Container>
  )
}

export default FormInput