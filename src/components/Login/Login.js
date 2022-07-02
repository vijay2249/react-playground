import React, { useEffect, useReducer, useContext } from 'react';
import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../state/auth-context';

const dataReducer = (prevState, action) =>{
  if(action.type === 'USER_EMAIL'){
    return {...prevState, userEmail: action.value, isEmailValid: action.value.includes('@')}
  }else if(action.type === 'USER_PASSWORD'){
    return {...prevState, userPassword: action.value, isPasswordValid: action.value.trim().length > 6 }
  }else if(action.type === 'USER_EMAIL_VALIDATE'){
    return {...prevState, isEmailValid: prevState.userEmail.includes('@')}
  }else if(action.type === 'USER_PASSWORD_VALIDATE'){
    return {...prevState, isPasswordValid: prevState.userPassword.trim().length > 6 }
  }else if(action.type === 'FORM_VALIDATION'){
    return {...prevState }
  }
}

const Login = () => {

  const context = useContext(AuthContext)
  
  const [userData, dispatchUserData] = useReducer(dataReducer, {
    userEmail: '',
    isEmailValid: '',
    userPassword: '',
    isPasswordValid: ''
  })

  useEffect(() =>{
    const identifier = setTimeout(()=>{
      console.log("executed");
      dispatchUserData({type: 'FORM_VALIDATION'})
    }, 1000)
    return () =>{
      console.log("cleanup");
      clearTimeout(identifier)
    }

  }, [userData.isEmailValid, userData.isPasswordValid])

  const emailChangeHandler = (event) => {
    dispatchUserData({type: "USER_EMAIL", value: event.target.value})
  };

  const passwordChangeHandler = (event) => {
    dispatchUserData({type:"USER_PASSWORD", value: event.target.value})
  };

  const validateEmailHandler = () => {
    dispatchUserData({type: 'USER_EMAIL_VALIDATE'})
  };

  const validatePasswordHandler = () => {
    dispatchUserData({type: 'USER_PASSWORD_VALIDATE'})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    context.onLogin(userData.userEmail, userData.userPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler} autoComplete='off'>
        <div className={`${classes.control} ${ userData.isEmailValid === false ? classes.invalid : ''}`}>
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={userData.userEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div className={`${classes.control} ${ userData.isPasswordValid === false ? classes.invalid : '' }`}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={userData.userPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!(userData.isPasswordValid && userData.isEmailValid)}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
