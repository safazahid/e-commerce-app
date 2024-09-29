import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Header from './Components/Header/HeaderComponent.jsx'
import HomePageComponent from './Page/HomePage/HomePageComponent';
import ShopPageComponent from './Page/ShopPage/ShopPageComponent';
import SigninSignup from './Page/Signin&Signup/SigninSignupComponent.jsx';
import  AuthProvider, { AuthContext } from './context/contextApi.js';
import ProductProvider from './context/ProductContext.js';

const App = () => {
  const user = React.useContext(AuthContext);

  const handleLogout = ()=> {
    localStorage.removeItem('user')
   }

   return (
    <AuthProvider>
      <ProductProvider>
      <div >
      <Header handleLogout = {handleLogout} />
      <Switch>
        <Route path="/" exact component={HomePageComponent} />
        <Route path="/shop"  component={ShopPageComponent} />
        <Route path="/signin" exact component={SigninSignup} />
      </Switch> 
    </div>
      </ProductProvider>
    </AuthProvider>
  )

}



// class App extends React.Component {
//   constructor(){
//     super();
//     this.state={
//       currentUser: JSON.parse(localStorage.getItem('user')) || null
//     }
//   }
//  HandleLogOut = ()=> {
//   this.setState({currentUser : null})
//   localStorage.removeItem('user')
//  }
  
//   render(){
//     const {currentUser} = this.state;
//     return (
//       <AuthProvider>
//       <div >
//         <Header currentUser={currentUser} HandleLogOut = {this.HandleLogOut} />
//         <Switch>
//         <Route path="/" exact component={HomePageComponent} />
//         <Route path="/shop"  component={ShopPageComponent} />
//         <Route path="/signin"  component={SigninSignup} />
//         </Switch> 
//       </div>
//       </AuthProvider>
//     )
//   }
  
// }
export default App;
