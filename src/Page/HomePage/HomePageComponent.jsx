import React from 'react';
import styled from 'styled-components';
// import './HomePage.scss'
import DirectoryMenuComponent from '../../Components/DirectoryMenu/DirectoryMenuComponent';


 const HomePageComponent = () => {
  const HomePage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 20px;
  `
      return (
        <HomePage className='homepage'>
          <DirectoryMenuComponent/>
        </HomePage>
      )
    }

export default HomePageComponent