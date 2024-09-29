import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './CollectionPreview.scss'
import CollectionItemComponent from '../CollectionItem/CollectionItemComponent';

const CollectionPreviewComponent = ({data}) => {
  return (
    <div className='collection-preview'>
      <h1 className='title' >
        {data?.title.toUpperCase()} 
        </h1>
      <div className='preview'>
         {
          data?.items?.filter((item, idx) => idx < 4).map(item => (<CollectionItemComponent key={item.id} item={item} /> ))
         }
      </div>
    </div>
  )
}

export default CollectionPreviewComponent