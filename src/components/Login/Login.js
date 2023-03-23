import React, { useContext, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from './Input';


const loginReducer = (state, action) =>{
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
  
  const [userInput, dispatchUserInput] = useReducer(loginReducer, {
    email:"",
    password:"",
    isEmailValid: null,
    isPasswordValid: null
  })
  // initial values are null, thats to distract at initial load of red border around input even before any input from user

  const {onLogin} = useContext(AuthContext)

  useEffect(()=>{
    const identifier = setTimeout(()=>{
      dispatchUserInput({type: "FORM_VALIDATION"})
    }, 500)
    return ()=>{
      clearTimeout(identifier)
    }
  }, [userInput.isEmailValid, userInput.isPasswordValid])

  const handleInputChange = event =>{
    const {type, value} = event.target
    dispatchUserInput({
      type: `${type.toUpperCase()}_INPUT`,
      value: value
    })
  }

  const validateEmailHandler = () => {
    dispatchUserInput({ type: "EMAIL_VALIDATE" })
  };

  const validatePasswordHandler = () => {
    dispatchUserInput({ type: "PASSWORD_VALIDATE" })
  };

  const submitHandler = (event) => {
    event.preventDefault();
    onLogin(userInput.email, userInput.password);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input 
          isValid={userInput.isEmailValid === false ? classes.invalid : ''}
          htmlFor='email'
          label='E-Mail'
          id='email'
          type='email'
          value={userInput.email}
          onChange={handleInputChange}
          onBlur={validateEmailHandler}
        />
        <Input 
          isValid={userInput.isPasswordValid === false ? classes.invalid : ''}
          htmlFor='password'
          label='Password'
          id='password'
          type='password'
          value={userInput.password}
          onChange={handleInputChange}
          onBlur={validatePasswordHandler}
        />
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