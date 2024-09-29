import React, {createContext, useEffect, useState} from "react";
export const ProductContext = createContext();

const ProductProvider = (props) => {
  const [products, setProducts] = React.useState([]);

  useEffect(()=>{
    GetAllProducts()
  },[])
  const GetAllProducts = async() => {
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
          id: categories?._id,
          title: categories?.title,
          routeName: categories?.url,
          items: productsForCategory
        }  
      }
      )
      setProducts(mappedProducts)
    }catch (err){
      console.log('Error:', err);
    }}
  return (
    <ProductContext.Provider value = {{products}}>
      {props.children}
    </ProductContext.Provider>
  )
}


export default ProductProvider