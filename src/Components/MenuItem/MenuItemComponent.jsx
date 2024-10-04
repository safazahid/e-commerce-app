import React from 'react'
import './MenuItem.scss'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min'
import styled from 'styled-components'

const MenuItemComponent = ({menuitems}) => {
const MenuItemsContainer = styled.div`
  height: 200px;
  border: 1px solid black;
  min-width: 30%;
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  margin: 0 7.5px 16px;
  overflow: hidden;
  &:hover {
    cursor: pointer;
    & .background-image {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.025, 0.45, 0.45, 0.95);
    }
`
const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
 background-position: center;  
`
const ContentContainer = styled.div`
  position: absolute;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    height: 100px;
    padding: 0 20px;
    justify-content: center;
    align-items: center;
    opacity: 0.7;
    background-color: white;
    font-family: "PT Sans Narrow", sans-serif;
`
const Title = styled.span`
  font-weight: 600;
  font-size: 23px;
  color: #4a4a4a;
  margin-bottom: 15px;
`
const Subtutle = styled.span`
  font-weight: lighter;
  font-size: 15px;
`
  return (
    menuitems.map( menuitems => 
      <MenuItemsContainer className='menu-items' >
        <ImageContainer className='background-image' style={{
           backgroundImage: `url(${menuitems.imageUrl})`
          }}/>
          <ContentContainer className='content'>
            <Title className='title'>{menuitems.title.toUpperCase()}</Title>
            <Subtutle className='subtitle'>{menuitems.subtitle.toUpperCase()}</Subtutle>
          </ContentContainer>
            </MenuItemsContainer> )
  )
}

export default withRouter(MenuItemComponent)