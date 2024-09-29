import React, {createContext, useState} from "react";
export const AuthContext = createContext();

const AuthProvider = (props) => {
const [currentUser, setCurrentUser]= useState(JSON.parse(localStorage.getItem('user' ) || null))
    
    return(
        <AuthContext.Provider value={{
            currentUser:currentUser,
            setCurrentUser:setCurrentUser
        }}>
        {props.children}
        </AuthContext.Provider>
    )
}
// class AuthProvider extends React.Component{
//   constructor(props) {
//       super(props);
//       this.state = {
//           currentUser:  JSON.parse(localStorage.getItem('user' ) || null)
          
//       }
//   }
//   render() {
//       return(
//           <AuthContext.Provider value={this.state.currentUser}>
//           {this.props.children}
//       </AuthContext.Provider>
//       )
     
//   }
// }
export default AuthProvider;