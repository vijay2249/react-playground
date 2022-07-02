import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

// const emailReducer = (prevState, action) => {
//   if(action.type==="USER_INPUT"){
//     return {value: action.value, isValid:action.value.includes('@')}
//   }
//   if(action.type === "INPUT_BLUR"){
//     return {value: prevState.value, isValid:prevState.value.includes('a')}
//   }
//   return {value:'', isValid:false}
// }

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

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  // const [formIsValid, setFormIsValid] = useState(false);

  // const [loginData, setLoginData] = useState({
  //   email: '',
  //   password: ''
  // })
  // const handleChange = e =>{
  //   const {id, value} = e.target
  //   setLoginData({...loginData, [id]:value})
  // }

  // const [emailState, dispathEmail] = useReducer(emailReducer, {value:'', isValid:null})
  
  const [userData, dispatchUserData] = useReducer(dataReducer, {
    userEmail: '',
    isEmailValid: '',
    userPassword: '',
    isPasswordValid: ''
  })

  useEffect(() =>{
    const identifier = setTimeout(()=>{
      // setFormIsValid(
      //   emailState.isValid && enteredPassword.trim().length > 6
      // );
      console.log("executed");
      dispatchUserData({type: 'FORM_VALIDATION'})
    }, 1000)
    return () =>{
      console.log("cleanup");
      clearTimeout(identifier)
    }

  }, [userData.isEmailValid, userData.isPasswordValid])

  const emailChangeHandler = (event) => {
    // dispathEmail({type:"USER_INPUT", value: event.target.value})
    dispatchUserData({type: "USER_EMAIL", value: event.target.value})
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchUserData({type:"USER_PASSWORD", value: event.target.value})
  };

  const validateEmailHandler = () => {
    // dispathEmail({type:'INPUT_BLUR'})
    dispatchUserData({type: 'USER_EMAIL_VALIDATE'})
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchUserData({type: 'USER_PASSWORD_VALIDATE'})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(userData.userEmail, userData.userPassword);
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
