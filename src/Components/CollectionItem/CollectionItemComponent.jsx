import React from 'react'
import './CollectionItem.scss'

const CollectionItemComponent = ({items}) => {
  return (
    <div className='collection-item'>
      <div className='image' style={{
          backgroundImage: `url(${items?.imageUrl})`
        }}/>
        <div className='collection-footer'>
          <span className='name'>{items?.name}</span>
          <span className='price'>${items?.price}</span>
        </div>
    </div>
  )
}

export default CollectionItemComponent