import Button from "./Button";
import Card from "./Card";
import React from "react";
import ReactDOM from 'react-dom'

import styles from './ErrorModal.module.css'

const Backdrop = props => {
  return <div className={styles.backdrop} onClick={props.onConfirm}/>
}

const ModelOverlay = props =>{
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.msg}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  )
}

export default function ErrorModal(props){

  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm}/>, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(
        <ModelOverlay title={props.title} msg={props.msg} onConfirm={props.onConfirm}/>,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  )
}