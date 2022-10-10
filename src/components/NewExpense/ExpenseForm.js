import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    date: ''
  })

  const changeHandler = (e) =>{
    const {name, value} = e.target
    // setFormData({...formData, [name]: value})
    setFormData((prevState)=>{
      return {...prevState, [name]:value}
    })
    // setFormData((prevState)=> ({...prevState, [name]:value}))
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    const userData = {
      title: formData.title,
      amount: formData.amount,
      date: new Date(formData.date)
    }
    props.onSave(userData)
    setFormData({
      title: '',
      amount: '',
      date: ''
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' name='title' value={formData.title} onChange={changeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' name='amount' step='0.01' value={formData.amount} onChange={changeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' name='date' max='2022-12-31' onChange={changeHandler} value={formData.date}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;