import React, { useRef, useState } from "react"

import Card from "../UI/Card/Card"
import Button from "../UI/Button/Button"
import ErrorModal from "../UI/ErrorModal/ErrorModal"
import classes from './AddUser.module.css'

const AddUser = (props) =>{

  const userNameRef = useRef()
  const userAgeRef = useRef()

  // const [userData, setUserData] = useState({
  //   username: '',
  //   age: ''
  // })

  const [errorData, setErrorData] = useState()

  // const handleChange = event =>{
  //   const {id, value} = event.target
  //   setUserData({...userData, [id]:value})
  // }
  
  const addUserHandler = (e) =>{
    e.preventDefault()
    const username = userNameRef.current.value
    const age = userAgeRef.current.value
    if(age.trim().length === 0 || username.trim().length === 0 || +age < 1) {
      setErrorData({
        msg: 'Enter valid age/username',
        title: 'Invalid Input',
      })
      return
    }
    props.onAddUser(username, age)
    userAgeRef.current.value = ''
    userNameRef.current.value = ''
    // setUserData({username:'', age: ''})
  }

  const errorHandler = () =>{
    setErrorData(null)
  }

  return(
    <React.Fragment>
      { errorData && <ErrorModal onClick={errorHandler} title={errorData.title} msg={errorData.msg}/> }
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input type="text" id="username" ref={userNameRef} />
          <label htmlFor="age">Age</label>
          <input type="number" id="age" ref={userAgeRef}/>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  )
}

export default AddUser;