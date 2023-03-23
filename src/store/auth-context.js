import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogin: (email, password)=>{},
  onLogout: ()=>{}
});

export const AuthContextProvider = (props) =>{
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(()=>{
    const userLoggedIn = localStorage.getItem("userLoggedIn")
    if(userLoggedIn === "1") setIsLoggedIn(true)
  },[])

  const logoutHandler = () => {
    localStorage.removeItem("userLoggedIn")
    setIsLoggedIn(false);
  };
  const loginHandler = (email, password) => {
    localStorage.setItem("userLoggedIn", "1")
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext