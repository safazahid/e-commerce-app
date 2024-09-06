import React from 'react';
import './HomePage.scss'
import DirectoryMenuComponent from '../../Components/DirectoryMenu/DirectoryMenuComponent';


    const HomePageComponent = () => {
      return (
        <div className='homepage'>
          <DirectoryMenuComponent/>
        </div>
      )
    }

export default HomePageComponent