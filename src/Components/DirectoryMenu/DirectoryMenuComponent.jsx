import React from 'react'
import { AuthContext } from '../../context/contextApi';
import './DirectoryMenu.scss'
import MenuItemComponent from '../MenuItem/MenuItemComponent'

class DirectoryMenuComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      menuitems: null
    }
  }
  componentDidMount(){
    this.GetAllCategories()
  }
  GetAllCategories = async() =>{
    const responseFromAPI = await fetch("http://localhost:8080/api/v1/category/" , {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json' 
        },
      })
      const categories = await responseFromAPI.json()
      this.setState({
        menuitems : categories
      })
  }
  render () {
    return (
      <div className='directory-menu'>
          {this.state.menuitems ? <MenuItemComponent menuitems = {this.state.menuitems}/> : null }
       </div>
    )
  }
}

export default DirectoryMenuComponent