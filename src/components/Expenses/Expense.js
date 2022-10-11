import {useState} from 'react'
import Card from '../UI/Card';
import ExpenseFilters from '../Filters/ExpenseFilters.js'
import ExpenseList from './ExpenseList';
import './Expense.css';
import ExpenseChart from './ExpenseChart';

function Expense(props) {

  const [filteredYear, setFilteredYear] = useState('2020')
  const handleFilter = (year) =>{
    setFilteredYear(year)
  }

  const filteredItems = props.items.filter(item => {
    return item.date.getFullYear().toString() === filteredYear
  })



  return (
      <Card className="expenses">
        <ExpenseFilters handleFilter={handleFilter} selected={filteredYear}/>
        <ExpenseChart expenses={filteredItems}/>
        <ExpenseList items={filteredItems}/>
      </Card>
  );
}

export default Expense;