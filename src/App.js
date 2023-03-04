import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import React, { useState } from 'react';

const INITAL_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2022, 5, 12),
  },
];


function App() {

  const [expenses, setExpenses] = useState(INITAL_EXPENSES)


  const addExpenseHandler = (newData) =>{
    setExpenses((prevState) =>{
      return [newData, ...prevState]
    }
  )}


  const [users, setUsers] = useState([])
  const handleAddUser = user =>{
    setUsers((prevState) =>{
      return [...prevState, user]
    })
  }

  return (
    <React.Fragment>
      <div className="App">
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expense items={expenses}/>
      </div>
      <AddUser onAddUser={handleAddUser}/>
      <UsersList users={users}/>
    </React.Fragment>
  );
}

export default App;
