import React from 'react';
import styled from 'styled-components';
// import './CollectionPreview.scss'
import CollectionItemComponent from '../CollectionItem/CollectionItemComponent';

const CollectionPreviewComponent = ({data}) => {
  const CollectionPreview = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 30px;
    padding-right: 20px;
    justify-content: space-between;
  `
  const Title = styled.h1`
    font-size: 25px;
    margin-bottom: 15px;
    font-family: "PT Sans Narrow", sans-serif;
    font-weight: 600;
  `
  const Preview = styled.div`
    display: flex;
`
  return (
    <CollectionPreview>
      <Title >
        {data?.title.toUpperCase()} 
      </Title>
      <Preview>
         {
          data?.items?.filter((item, idx) => idx < 4).map(item => (<CollectionItemComponent key={item.id} item={item} /> ))
         }
      </Preview>
    </CollectionPreview>
  )
}

export default CollectionPreviewComponent