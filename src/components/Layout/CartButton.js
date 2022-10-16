import { useContext, useEffect, useState } from "react"
import CartContext from "../../store/cart-context"
import CartIcon from "../Cart/CartIcon"
import classes from './CartButton.module.css'

const CartButton = props =>{
  const [animate, setAnimate] = useState(false)
  const contextData = useContext(CartContext)
  const total = contextData.items.reduce((curNum, item)=>{
    return curNum + item.amount
  },0)

  const buttonClass = `${classes.button} ${animate ? classes.bump : ''}`

  useEffect(()=>{
    if(contextData.items.length === 0){return}
    setAnimate(true)
    const timer = setTimeout(()=>{
      setAnimate(false)
    }, 300)
    return ()=>{ clearTimeout(timer) }
  },[contextData.items])

  return(
    <button className={buttonClass} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{total}</span>
    </button>
  )
}

export default CartButton