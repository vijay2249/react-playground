import React, { useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

  
//   useEffect(()=>{
//     const userLoggedIn = localStorage.getItem("userLoggedIn")
//     if(userLoggedIn === "1") setIsLoggedIn(true)
//   },[])

//   const loginHandler = (email, password) => {
//     localStorage.setItem("userLoggedIn", "1")
//     setIsLoggedIn(true);
//   };

//   const logoutHandler = () => {
//     localStorage.removeItem("userLoggedIn")
//     setIsLoggedIn(false);
//   };

//   return (
//     <React.Fragment>
//       <AuthContext.Provider 
//         value={{
//           isLoggedIn: isLoggedIn,
//           onLogout: logoutHandler
//         }}
//       >
//         <MainHeader/>
//         <main>
//           {!isLoggedIn && <Login onLogin={loginHandler} />}
//           {isLoggedIn && <Home onLogout={logoutHandler} />}
//         </main>
//       </AuthContext.Provider>
//     </React.Fragment>
//   );
// }

function App(){
  const context = useContext(AuthContext)
  return(
    <React.Fragment>
      <MainHeader/>
      <main>
        {!context.isLoggedIn && <Login />}
        {context.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  )
}

export default App;