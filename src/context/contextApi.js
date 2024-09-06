import React, {createContext} from "react";
export const AuthContext = createContext();

const AuthProvider = ({children}) =>{
  const [currentUser, setCurrentUser] = JSON.parse(localStorage.getItem('user')) || null;
  return (
    <AuthContext.Provider value={{currentUser}}>
      {children}
    </AuthContext.Provider>
  )
} 
export default AuthProvider;