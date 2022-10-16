import { useRef, useState } from 'react'
import Input from '../../UI/Input/Input'
import styles from './MealItemForm.module.css'

const MealItemForm = props =>{
  const amountInputRef = useRef();
  const [isAmountValid, setIsAmountValid] = useState(true)

  const submitHandler = event =>{
    event.preventDefault()
    const amount = +amountInputRef.current.value
    if(amount < 1 || amount > 10){
      setIsAmountValid(false)
      return
    }
    props.onAddToCart(amount)
  } 

  return(
    <form className={styles.form} onSubmit={submitHandler}>
      <Input 
        ref={amountInputRef}
        label={'Amount'}
        input={{
          id:'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '10',
          step: '1',
          defaultValue: '1'
        }}
      />
      <button>Add</button>
      {!isAmountValid && <p>Enter a valid amount</p>}
    </form>
  )
}

export default MealItemForm