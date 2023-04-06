import React, { useContext, useState } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal/Modal';
import styles from './Cart.module.css'
import CartItem from './CartItem/CartItem';
import Checkout from './Checkout';

const Cart = props =>{
  const [showCheckout, setShowCheckout] = useState(false)
  const cartCtx = useContext(CartContext)
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
  const hasItems = cartCtx.items.length > 0

  const removeItemFromCart = id => {
    cartCtx.removeItem(id)
  }
  
  const addItemToCart = item => {
    cartCtx.addItem({...item, amount: 1})
  }

  const orderHandler = event =>{
    setShowCheckout(true);
  }

  return(
    <Modal onClose={props.onClose}>
      <ul className={styles['cart-items']}>
        {cartCtx.items.map(item => (
          <CartItem 
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={removeItemFromCart.bind(null, item.id)}
            onAdd={addItemToCart.bind(null, item)}
          />
        ))}
      </ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {
        showCheckout 
        ? <Checkout onCancel={props.onClose} /> 
        : <div className={styles.actions}>
            <button onClick={props.onClose} className={styles['button--alt']}>Close</button>
            { hasItems && <button className={styles.button} onClick={orderHandler}>Order</button> }
          </div>
      }
    </Modal>
  )
}

export default Cart;