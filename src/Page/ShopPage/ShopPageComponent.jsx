import React, { useContext } from 'react'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min.js';
import CollectionPreviewComponent from '../../Components/CollectionPreview/CollectionPreviewComponent'
import { ProductContext } from '../../context/ProductContext';


const ShopPageComponent = () => {
  const {products} = useContext(ProductContext);
  return (
    <div className='shop-page'>
      { products && products.map(categories =><  CollectionPreviewComponent key= {categories.id} data = {categories} /> ) }
    </div>
  )
}

// class ShopPageComponent extends React.Component {
//   constructor () {
//     super ();
//     this.state = {
//       products : [],
//     }
//   }
//   componentDidMount(){
//     this.GetAllProducts()
//   }
//   GetAllProducts = async() => {
//     try {
//       const categoriesList = await fetch("http://localhost:8080/api/v1/category/" , {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json' 
//         },
//       })
//       const categories = await categoriesList.json()

//       const productsResponse = await fetch("http://localhost:8080/api/v1/product/" , {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json' 
//         },
//       })
//       const products = await productsResponse.json()

//       const mappedProducts = categories?.map(categories => {
//         const productsForCategory = products?.filter(product => product.category === categories._id)
//         return {
//           ...categories, 
//           id: categories?.id,
//           title: categories?.title,
//           routeName: categories?.url,
//           items: productsForCategory
//         }  
//       }
//       )
//       this.setState({
//         products : mappedProducts,
//       } )
//     }catch (err){
//       console.log('Error:', err);
//     }
//   }


//   render () {
//     return (
//       <div className='shop-page'>
//         { this.state.products.map(categories =><  CollectionPreviewComponent key= {categories.id} data = {categories} /> ) }
//       </div>
//     )
//   }
// }

export default withRouter(ShopPageComponent)