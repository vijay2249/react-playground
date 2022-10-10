import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

export default function NewExpense(props){

  const appendNewData = (expenseData) =>{
    const data = {...expenseData, id:Math.random().toString()}
    // console.log(data);
    props.onAddExpense(data)
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onSave={appendNewData}/>
    </div>
  )
}