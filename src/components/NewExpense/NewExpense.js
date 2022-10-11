import { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

export default function NewExpense(props){

  const [isOpen, setIsOpen] = useState(true)

  const appendNewData = (expenseData) =>{
    const data = {...expenseData, id:Math.random().toString()}
    // console.log(data);
    props.onAddExpense(data)
  }

  const handleClick = (e) =>{
    setIsOpen(!isOpen)
  }

  return (
    <div className='new-expense'>
      {isOpen && <button onClick={handleClick}>Add Expense</button>}
      {!isOpen &&<ExpenseForm onSave={appendNewData} onCancel={handleClick}/>}
    </div>
  )
}