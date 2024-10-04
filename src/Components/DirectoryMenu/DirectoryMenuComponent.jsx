import React, { useEffect } from 'react'
import styled from 'styled-components';
import { AuthContext } from '../../context/contextApi';
import './DirectoryMenu.scss'
import MenuItemComponent from '../MenuItem/MenuItemComponent'

const DirectoryMenuComponent = () => {
  const [menuItems, setMenuItems] = React.useState(null)
  useEffect(()=>{
    const GetAllCategories = async() =>{
      const responseFromAPI = await fetch("http://localhost:8080/api/v1/category/" , {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json' 
          },
        })
        const categories = await responseFromAPI.json()
        setMenuItems(categories)
    }
    GetAllCategories();
  }, [])

const DirectoryMenu = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
  return (
    <DirectoryMenu className='directory-menu'>
        {menuItems ? <MenuItemComponent menuitems = {menuItems}/> : null }
     </DirectoryMenu>
  )
}

// class DirectoryMenuComponent extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       menuitems: null
//     }
//   }
//   componentDidMount(){
//     this.GetAllCategories()
//   }
//   GetAllCategories = async() =>{
//     const responseFromAPI = await fetch("http://localhost:8080/api/v1/category/" , {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json' 
//         },
//       })
//       const categories = await responseFromAPI.json()
//       this.setState({
//         menuitems : categories
//       })
//   }
//   render () {
//     return (
//       <div className='directory-menu'>
//           {this.state.menuitems ? <MenuItemComponent menuitems = {this.state.menuitems}/> : null }
//        </div>
//     )
//   }
// }

export default DirectoryMenuComponent