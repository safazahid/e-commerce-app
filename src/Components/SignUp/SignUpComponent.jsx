import React from 'react';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import CustomButtonComponent from '../CustomButton/CustomButtonComponent';
import './signUp.scss'
import FormInput from '../FormInput/FormInput';

class SignUpComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      passwordHash:'',
      username: '',
      phoneNumber: '',
      gender: '' 
    }
  }
  handleSubmit = async(e) => {
    e.preventDefault();
    try{
      
      const responseFromAPI = await fetch("http://localhost:8080/api/v1/user/register" , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/JSON' 
        },
        body: JSON.stringify({
          email :'email',
          passwordHash: 'passwordHash',
          username: 'username',
          phoneNumber: 'phoneNumber',
          gender: 'gender'

        })
      })
      const data = responseFromAPI.json()
      if (data){
        localStorage.setItem("user", JSON.stringify(data));
        this.props.history.push('/')
      }
      
    }catch(err){
      console.log("Error:" + err);
    }
    this.setState({
      email: '',
      passwordHash:'',
      username: '',
      phoneNumber: '',
      gender: ''
    })
  }
  
  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name] : value
    })
  }
  render () {
    return (
      <div className='sign-in'>
        <h2>Register Yourself!</h2>
        <form onSubmit={this.handleSubmit}>
          <FormInput
          name = 'email'
          type = 'email'
          value= {this.state.email}
          onChange = {this.handleChange}
          label = 'Email'
          required = 'required'
          />
          <FormInput
          name = "passwordHash"
          type = 'passwordHash'
          value= {this.state.passwordHash}
          onChange = {this.handleChange}
          label = 'Password'
          required = 'required'
          />
          <FormInput
          name = "username"
          type = 'username'
          value= {this.state.username}
          onChange = {this.handleChange}
          label = 'Username'
          required = 'required'
          />
          <FormInput
          name = "phoneNumber"
          type = 'phoneNumber'
          value= {this.state.phoneNumber}
          onChange = {this.handleChange}
          label = 'Phone Number'
          required = 'required'
          />
          <FormInput
          name = "gender"
          type = 'gender'
          value= {this.state.gender}
          onChange = {this.handleChange}
          label = 'Gender'
          required = 'required'
          />
          <div className='buttons'>
          <CustomButtonComponent> Sign Up </CustomButtonComponent>
          </div>
          

        </form>
      </div>
    )
  }
}

export default withRouter(SignUpComponent)