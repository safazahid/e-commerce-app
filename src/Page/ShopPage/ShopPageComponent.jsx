import React from 'react'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min.js';
import CollectionPreviewComponent from '../../Components/CollectionPreview/CollectionPreviewComponent'

class ShopPageComponent extends React.Component {
  constructor () {
    super ();
    this.state = {
      products : [],
      // filteredProducts : []
    }
  }
  componentDidMount(){
    this.GetAllProducts()
    this.FilterProductsByCategory();

  }
  componentDidUpdate(prevProps){
    if (this.props.location.search !== prevProps.location.search){
      this.FilterProductsByCategory();
    }
  }
  GetAllProducts = async() => {
    try {
      const categoriesList = await fetch("http://localhost:8080/api/v1/category/" , {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json' 
        },
      })
      const categories = await categoriesList.json()

      const productsResponse = await fetch("http://localhost:8080/api/v1/product/" , {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json' 
        },
      })
      const products = await productsResponse.json()

      const mappedProducts = categories?.map(categories => {
        const productsForCategory = products?.filter(product => product.category === categories._id)
        return {
          ...categories, 
          id: categories?.id,
          title: categories?.title,
          routeName: categories?.url,
          items: productsForCategory
        }
        
      }
      )
      this.setState({
        products : mappedProducts,
      },
        this.FilterProductsByCategory()
        )
    }catch (err){
      console.log('Error:', err);
    }
  }

    FilterProductsByCategory = () => {
    const params = new URLSearchParams(this.props.location.search);
    const categoryName = params.get('category');
    console.log('categoryName:', categoryName);
    const filteredProducts = categoryName
      ? this.state.mappedProducts.filter(category => category.title.toLowerCase() === category.routeName.toLowerCase())
      : this.state.products;
    this.setState({ filteredProducts });
    console.log('filteredProducts:', filteredProducts); 

  }
  render () {
    return (
      <div className='shop-page'>
        { this.state.products.map(categories =><  CollectionPreviewComponent key= {categories.id} data = {categories} filteredProducts={this.state.filteredProducts}/> ) }
      </div>
    )
  }
 
}

export default withRouter(ShopPageComponent)