import React from 'react'
import './MenuItem.scss'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min'

const MenuItemComponent = ({menuitems}) => {
  return (
    menuitems.map( menuitems => 
      <div className='menu-items' >
              <div className='background-image' style={{
                backgroundImage: `url(${menuitems.imageUrl})`
              }}/>
                <div className='content'>
                  <span className='title'>{menuitems.title.toUpperCase()}</span>
                  <span className='subtitle'>{menuitems.subtitle.toUpperCase()}</span>
                </div>
            </div> )
  )
}

export default withRouter(MenuItemComponent)