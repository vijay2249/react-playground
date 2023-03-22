import React, { useEffect, useReducer, useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

// const emailReducer = (state, action) =>{
//   if(action.type === 'USER_INPUT') return {value: action.val, isValid: action.val.includes('@')}
//   return {value: "", isValid: false}
// }

// const passwordReducer = (state, action) =>{
//   if(action.type === 'USER_INPUT') return {value: action.val, isValid: action.val.trim().length > 6}
//   return {value: "", isValid: false}
// }

const loginReducer = (state, action) =>{
  // console.log("inside login reducer function");
  // console.log("State =>", state);
  // console.log("Action => ", action);
  if(action.type === "EMAIL_INPUT"){
    return {...state, email: action.value}
  }else if(action.type === "PASSWORD_INPUT"){
    return {...state, password: action.value}
  }else if(action.type === "EMAIL_VALIDATE"){
    return {...state, isEmailValid: state.email.includes("@")}
  }else if(action.type === "PASSWORD_VALIDATE"){
    return {...state, isPasswordValid: state.password.trim().length>6}
  }else if(action.type === "FORM_VALIDATION"){
    return {...state}
  }
}

const Login = (props) => {

  // const [emailIsValid, setEmailIsValid] = useState();
  // const [passwordIsValid, setPasswordIsValid] = useState();

  // const [emailState, dispatchEmail] = useReducer(emailReducer, {value:'', isValid: false})
  // const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value: '', isValid: false})
  
  const [userInput, dispatchUserInput] = useReducer(loginReducer, {
    email:"",
    password:"",
    isEmailValid: null,
    isPasswordValid: null
  })
  // initial values are null, thats to distract at initial load of red border around input even before any input from user

  // const [formIsValid, setFormIsValid] = useState(false);

  // const [userDetails, setUserDetails] = useState({
  //   email: '',
  //   password: ''
  // })

  useEffect(()=>{
    const identifier = setTimeout(()=>{
      // setFormIsValid(
      //   userDetails.email.includes('@') && userDetails.password.trim().length > 6
      // );
      dispatchUserInput({type: "FORM_VALIDATION"})
      // setFormIsValid( userInput.isEmailValid && userInput.isPasswordValid );
    }, 500)
    return ()=>{
      clearTimeout(identifier)
    }
  }, [userInput.isEmailValid, userInput.isPasswordValid])

  const handleInputChange = event =>{
    const {type, value} = event.target
    
    // setUserDetails((prevState) =>{
    //   return {...prevState, [type]:value};
    // })
    // console.log({
    //   type: `${type.toUpperCase()}_INPUT`,
    //   value: value
    // })
    dispatchUserInput({
      type: `${type.toUpperCase()}_INPUT`,
      value: value
    })

  }

  const validateEmailHandler = () => {
    dispatchUserInput({ type: "EMAIL_VALIDATE" })
    // setEmailIsValid(userInput.isEmailValid);
  };

  const validatePasswordHandler = () => {
    dispatchUserInput({ type: "PASSWORD_VALIDATE" })
    // setPasswordIsValid(userInput.isPasswordValid);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(userInput.email, userInput.password);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            userInput.isEmailValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={userInput.email}
            onChange={handleInputChange}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            userInput.isPasswordValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={userInput.password}
            onChange={handleInputChange}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!(userInput.isEmailValid && userInput.isPasswordValid)}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;