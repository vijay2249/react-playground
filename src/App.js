import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import React, { useState } from 'react';

function App() {
  const [users, setUsers] = useState([])
  const handleAddUser = user =>{
    setUsers((prevState) =>{
      return [...prevState, user]
    })
  }

  return (
    <React.Fragment>
      <AddUser onAddUser={handleAddUser}/>
      <UsersList users={users}/>
    </React.Fragment>
  );
}

export default App;
