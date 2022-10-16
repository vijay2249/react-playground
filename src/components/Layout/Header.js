
import React from 'react'
import mealsImage from '../../assets/meals.jpg'
import CartButton from './CartButton'
import classes from './Header.module.css'

const Header = (props) => {
  return(
    <React.Fragment>
      <header className={classes.header}>
        <h1>Foodie</h1>
        <CartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt=''/>
      </div>
    </React.Fragment>
  )
}

export default Header