import React, { useEffect, useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();

  const [formIsValid, setFormIsValid] = useState(false);

  const [userDetails, setUserDetails] = useState({
    email: '',
    password: ''
  })

  useEffect(()=>{
    const identifier = setTimeout(()=>{
      setFormIsValid(
        userDetails.email.includes('@') && userDetails.password.trim().length > 6
      );
    }, 500)
    return ()=>{
      clearTimeout(identifier)
    }
  }, [userDetails])

  const handleInputChange = event =>{
    const {type, value} = event.target
    setUserDetails((prevState) =>{
      const currentState = {...prevState, [type]:value}

      // setFormIsValid(
      //   currentState.email.includes('@') && currentState.password.trim().length > 6
      // );

      return currentState
    })
  }

  // const emailChangeHandler = (event) => {
  //   setEnteredEmail(event.target.value);

  //   setFormIsValid(
  //     event.target.value.includes('@') && enteredPassword.trim().length > 6
  //   );
  // };

  // const passwordChangeHandler = (event) => {
  //   setEnteredPassword(event.target.value);

  //   setFormIsValid(
  //     event.target.value.trim().length > 6 && enteredEmail.includes('@')
  //   );
  // };

  const validateEmailHandler = () => {
    setEmailIsValid(userDetails.email.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(userDetails.password.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(userDetails.email, userDetails.password);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={userDetails.email}
            onChange={handleInputChange}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={userDetails.password}
            onChange={handleInputChange}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;