import React, { useState } from "react"

import Card from "../UI/Card"
import Button from "../UI/Button"
import ErrorModal from "../UI/ErrorModal"
import classes from './AddUser.module.css'

const AddUser = (props) =>{

  const [userData, setUserData] = useState({
    username: '',
    age: ''
  })

  const [errorData, setErrorData] = useState()

  const handleChange = event =>{
    const {id, value} = event.target
    setUserData({...userData, [id]:value})
  }
  
  const addUserHandler = (e) =>{
    e.preventDefault()
    if(userData.age.trim().length === 0 || userData.username.trim().length === 0 || +userData.age < 1) {
      setErrorData({
        msg: 'Enter valid age/username',
        title: 'Invalid Input',
      })
      return
    }
    props.onAddUser(userData.username, userData.age)
    setUserData({username:'', age: ''})
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
          <input type="text" value={userData.username} id="username" onChange={handleChange} />
          <label htmlFor="age">Age</label>
          <input type="number" id="age" value={userData.age} onChange={handleChange}/>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  )
}

export default AddUser;