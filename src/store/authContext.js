import React, { useState, useEffect } from "react"

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: ()=>{},
  onLogIn: ()=>{}
})

export const AuthContextProvider = (props) =>{
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  useEffect(()=>{
    const isUserLoggedIn = localStorage.getItem('isLoggedIn')
    if(isUserLoggedIn === 'LOGGED_IN'){
      setIsLoggedIn(true)
    }
  }, [])

  const logoutHandler = ()=>{
    localStorage.setItem('isLoggedIn', "LOGGED_OUT")
    setIsLoggedIn(false)
  }
  
  const loginHandler = () =>{ 
    localStorage.setItem('isLoggedIn', "LOGGED_IN")
    setIsLoggedIn(true)
  }
  
  const values = {
    isLoggedIn: isLoggedIn, 
    onLogIn: loginHandler,
    onLogout: logoutHandler
  }
  
  return <AuthContext.Provider value={values}>{props.children}</AuthContext.Provider>
}

export default AuthContext