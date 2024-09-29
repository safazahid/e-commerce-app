import React, {useContext} from 'react';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import CustomButtonComponent from '../CustomButton/CustomButtonComponent';
import FormInput from '../FormInput/FormInput';
import './signIn.scss'

const SignInComponent = (props) => {
  const [user, setUser] = React.useState(
    {
      email: '',
      password:''
    }
  )
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const emailInput = user.email;
      const passwordInput = user.password;
      const responseFromAPI = await fetch("http://localhost:8080/api/v1/user/login" , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/JSON' 
        },
        body: JSON.stringify({
          email :emailInput,
          password: passwordInput
        })
      })
      const data = responseFromAPI.json()
      if (data){
        localStorage.setItem("user", JSON.stringify(data));
        props.history.push('/')
      }
      
    }catch(err){
      console.log("Error:" + err);
    }
    setUser({
      email: '',
      password:''
    })
  }
  const handleChange = (e) => {
    const {name, value} = e.target
    setUser({
      ...user,
      [name] : value
    })
  }
  return (
    <div className='sign-in'>
    <h2>I already have an account</h2>
    <span>Sign In with your email and password</span>
    <form onSubmit={handleSubmit}>
      <FormInput
      name = 'email'
      type = 'email'
      value= {user.email}
      onChange = {handleChange}
      label = 'Email'
      required = 'required'
      />
      <FormInput
      name = "password"
      type = 'password'
      value= {user.password}
      onChange = {handleChange}
      label = 'Password'
      required = 'required'
      />
      <div className='buttons'>
      <CustomButtonComponent> Sign In </CustomButtonComponent>
      </div>
    </form>
  </div>
  )
}

// class SignInComponent extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       email: '',
//       password:''
//     }
//   }
//   handleSubmit = async(e) => {
//     e.preventDefault();
//     try{
//       const emailInput = this.state.email;
//       const passwordInput = this.state.password;
//       const responseFromAPI = await fetch("http://localhost:8080/api/v1/user/login" , {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/JSON' 
//         },
//         body: JSON.stringify({
//           email :emailInput,
//           password: passwordInput
//         })
//       })
//       const data = responseFromAPI.json()
//       if (data){
//         localStorage.setItem("user", JSON.stringify(data));
//         this.props.history.push('/')
//       }
      
//     }catch(err){
//       console.log("Error:" + err);
//     }
//     this.setState({
//       email: '',
//       password:''
//     })
//   }
  
//   handleChange = (e) => {
//     const {name, value} = e.target
//     this.setState({
//       [name] : value
//     })
//   }
//   render () {
//     return (
//       <div className='sign-in'>
//         <h2>I already have an account</h2>
//         <span>Sign In with your email and password</span>
//         <form onSubmit={this.handleSubmit}>
//           <FormInput
//           name = 'email'
//           type = 'email'
//           value= {this.state.email}
//           onChange = {this.handleChange}
//           label = 'Email'
//           required = 'required'
//           />
//           <FormInput
//           name = "password"
//           type = 'password'
//           value= {this.state.password}
//           onChange = {this.handleChange}
//           label = 'Password'
//           required = 'required'
//           />
//           <div className='buttons'>
//           <CustomButtonComponent> Sign In </CustomButtonComponent>
//           </div>
          

//         </form>
//       </div>
//     )
//   }
// }

export default withRouter(SignInComponent)