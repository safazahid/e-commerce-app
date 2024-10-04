import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { ReactComponent as Logo} from '../../assets/logo.svg';
// import './Header.scss'
import { AuthContext } from '../../context/contextApi';
import styled from 'styled-components';

const HeaderComponent=({handleLogout}) => {
  const {currentUser} = React.useContext(AuthContext)
  const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 25px;
  `
  const StyledLogo = styled(Logo)`
  width: 43px;
  height: 43px;
  padding-left: 20px; 
  `
  const OptionsContainer = styled.div`
    display: flex;
  `
  const Styledlink = styled(Link) `
    margin-right: 16px;
    text-decoration: none;
    color: #4a4a4a;
    font-family: "PT Sans Narrow", sans-serif;
  `
  const OptionDiv = styled.div`
    margin-right: 16px;
    text-decoration: none;
    color: #4a4a4a;
    font-family: "PT Sans Narrow", sans-serif;
  `
  return (
    <HeaderContainer >
        <Styledlink to='/' > 
        <StyledLogo />
        </Styledlink>
      <OptionsContainer >
        <Styledlink to='/shop' >SHOP</Styledlink>
        {
          currentUser ? <OptionDiv onClick={handleLogout}>SIGN OUT</OptionDiv> : <Styledlink to='/signin' >SIGN IN</Styledlink>
        }
      </OptionsContainer>
    </HeaderContainer>
  )
}

export default HeaderComponent;