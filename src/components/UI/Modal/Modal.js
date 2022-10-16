import { Fragment } from 'react'
import styles from './Modal.module.css'
import ReactDOM from 'react-dom'

const Backdrop = props =>{
  return (
    <div className={styles.backdrop} onClick={props.onClose}/>
  )
}

const ModalOverlay = props =>{
  return(
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  )
}

const element = document.getElementById('overlays')

const Modal = props =>{
  return(
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, element)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, element)}
    </Fragment>
  )
}

export default Modal