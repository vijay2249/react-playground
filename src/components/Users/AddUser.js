import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from './AddUser.module.css'
import React, { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = props =>{

  const [data, setData] = useState({
    username: '',
    age: '',
    id: Math.random().toString()
  })
  const [error, setError] = useState(false)
  const addUserHandler = event =>{
    event.preventDefault();
    if(data.username.trim().length === 0 || data.age.trim().length === 0){
      setError({
        title: 'Invalid Input',
        msg: 'Entered invalid name/age'
      })
      return
    }
    if(+data.age < 1) {
      setError({
        title: 'Invalid Input',
        msg: 'Entered valid age(>0)'
      })
      return
    }

    props.onAddUser(data)
    setData({
      username: '',
      age: ''
    })
  }

  const handleChange = event =>{
    const {name, value} = event.target
    setData((prevState) =>{
      return {...prevState, [name]: value}
    })
  }

  const errorHandler =  () =>{
    setError(null)
  }

  return(
    <React.Fragment>
      { error && <ErrorModal  onConfirm={errorHandler} title={error.title} msg={error.msg} /> }
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type='text' name='username' value={data.username} onChange={handleChange}/>
          <label htmlFor="age">Age(years)</label>
          <input id="age" type='text' value={data.age} name='age' onChange={handleChange}/>
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </React.Fragment>
  )
}

export default AddUser