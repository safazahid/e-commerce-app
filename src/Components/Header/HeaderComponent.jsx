import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { ReactComponent as Logo} from '../../assets/logo.svg';
import './Header.scss'


const HeaderComponent=({currentUser, HandleLogOut}) => {
  return (
      <div className='header'>
        <Link to='/' className='option'> 
        <Logo className='logo' />
        </Link>
      <div className='options'>
        <Link className='option' to='/shop' >SHOP</Link>
        {
          currentUser ? <div className='option' onClick={HandleLogOut}>SIGN OUT</div> : <Link className='option' to='/signin' >SIGN IN</Link>
        }
      </div>
    </div>
  )
}

export default HeaderComponent;