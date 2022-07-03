import React from 'react';
import classes from './Input.modules.css'

const Input = (props) =>{
  return(
    <div className={`${classes.control} ${ props.isValid === false ? classes.invalid : ''}`}>
      <label htmlFor={props.htmlFor}>{props.label}</label>
      <input 
        type={props.type}
        id={props.htmlFor}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
}

export default Input