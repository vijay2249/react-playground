import React from "react";

import Card from "./Card";
import Button from "./Button";
import classes from './ErrorModal.module.css'

const ErrorModal = props => {
  return (
    <React.Fragment>
      <div className={classes.backdrop} onClick={props.onClick}/>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.msg}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onClick}>OK</Button>
        </footer>
      </Card>
    </React.Fragment>
  )
}

export default ErrorModal;