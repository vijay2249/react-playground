import { useState } from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {

  const [usersData, setUsersData] = useState([])

  const addUserHandler = (uName, uAge) =>{
    setUsersData((prevState) => {
      return [...prevState, {username: uName, age: uAge}]
    })
  }

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersData} />
    </div>
  );
}

export default App;
