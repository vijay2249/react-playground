import { useReducer } from "react"
import CartContext from "./cart-context"

//each item state => id, name, amount -> number of same items, price
const defaultState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) =>{
  if(action.type === 'ADD_ITEM'){
    const totalAmount = state.totalAmount + action.item.price*action.item.amount
    const isItemPresent_Index = state.items.findIndex(item=> item.id === action.item.id)
    let item = state.items[isItemPresent_Index]
    let updatedItems;
    if(state.items[isItemPresent_Index]){
      let updatedItem = {
        ...item,
        amount: item.amount + action.item.amount
      }
      updatedItems = [...state.items]
      updatedItems[isItemPresent_Index] = updatedItem
    }else{
      updatedItems = state.items.concat(action.item)
    }

    return {
      items: updatedItems,
      totalAmount: totalAmount
    }
  }
  else if(action.type === 'REMOVE_ITEM'){
    const existIndex = state.items.findIndex(item => item.id === action.id)
    const existItem = state.items[existIndex]
    const updatedAmount = state.totalAmount - existItem.price
    let updatedItems;
    if(existItem.amount === 1){
      updatedItems = state.items.filter(item =>item.id !== action.id)
    }else{
      const updatedItem = {...existItem, amount: existItem.amount-1}
      updatedItems = [...state.items]
      updatedItems[existIndex] = updatedItem
    }
    return{
      items: updatedItems,
      totalAmount: updatedAmount
    }
  }

  return defaultState
}

const CartProvider = props => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState)

  const addItemToList = item => {
    dispatchCartAction({
      type: 'ADD_ITEM',
      item: item
    })
  }

  const removeItemFromList = id => {
    dispatchCartAction({
      type: 'REMOVE_ITEM',
      id: id
    })
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToList,
    removeItem: removeItemFromList
  }

  return(
    <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
  )
}

export default CartProvider