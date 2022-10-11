import ExpenseItem from './ExpenseItem';
import './ExpenseList.css'

const ExpenseList = props =>{

  if(props.items.length === 0) {
    return <h2 className='expenses-list__fallback'> No Expenses found</h2>
  }

  return (
    <ul className='expenses-list'>
      {props.items.map(item=>(
        <ExpenseItem title={item.title} amount={item.amount} date={item.date} key={Math.random().toString()}/>
      ))}
    </ul>
  );
}

export default ExpenseList