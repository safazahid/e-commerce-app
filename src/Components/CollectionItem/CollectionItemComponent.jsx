import React from 'react'
// import './CollectionItem.scss'
import styled from 'styled-components'

const CollectionItemComponent = ({item}) => {
  const CollectionItem = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    height: 350px;  
    align-items: center;
    margin-right: 15px;
  `
  const ImageContainer = styled.div`
    width: 100%;
    height: 80%;
    background-size: cover;
    background-position: center;
    margin-bottom: 10px;
  `
const CollectionFooter = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 19px;
    font-family: "PT Sans Narrow", sans-serif;
    color: #4a4a4a; 
`
const Name = styled.span`
  width: 90%;
  margin-bottom: 10px;
`
const Price = styled.span`
  width: 12%;
`

  return (
    <CollectionItem>
      <ImageContainer style={{
          backgroundImage: `url(${item?.imageUrl})`
        }}/>
        <CollectionFooter>
          <Name>{item?.name}</Name>
          <Price>${item?.price}</Price>
        </CollectionFooter>
    </CollectionItem>
  )
}

export default CollectionItemComponent