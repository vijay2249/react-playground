import { useContext } from 'react'
import CardContext from '../../../store/cart-context'
import styles from './MealItem.module.css'
import MealItemForm from './MealItemForm'

const MealItem = props =>{
  const price = `$${props.price.toFixed(2)}`
  const context = useContext(CardContext)

  const addItemToCart = amount =>{
    context.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  }

  return(
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addItemToCart}/>
      </div>
    </li>
  )
}

export default MealItem