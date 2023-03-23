import React, { useContext } from 'react';
import   from '../../store/auth-context';

import classes from './Navigation.module.css';


// without context hook
// const Navigation = (props) => {
//   return (
//     <nav className={classes.nav}>
//       <ul>
//         {props.isLoggedIn && ( <li><a href="/">Users</a></li> )}
//         {props.isLoggedIn && ( <li><a href="/">Admin</a></li> )}
//         {props.isLoggedIn && ( <li><button onClick={props.onLogout}>Logout</button></li> )}
//       </ul>
//     </nav>
//   );
// };


// with AuthContext.Consumer hook
// const Navigation = (props) => {
//   return (
//     <AuthContext.Consumer>
//       {(context)=>{
//         return(
//           <nav className={classes.nav}>
//           <ul>
//             {context.isLoggedIn && ( <li><a href="/">Users</a></li> )}
//             {context.isLoggedIn && ( <li><a href="/">Admin</a></li> )}
//             {context.isLoggedIn && ( <li><button onClick={props.onLogout}>Logout</button></li> )}
//           </ul>
//           </nav>
//         )
//       }}
      
//     </AuthContext.Consumer>
//   );
// };


// with useContext hook
const Navigation = () => {

  const context = useContext(AuthContext)
  return (
    <nav className={classes.nav}>
      <ul>
        {context.isLoggedIn && ( <li><a href="/">Users</a></li> )}
        {context.isLoggedIn && ( <li><a href="/">Admin</a></li> )}
        {context.isLoggedIn && ( <li><button onClick={context.onLogout}>Logout</button></li> )}
      </ul>
    </nav>
  );
};

export default Navigation;