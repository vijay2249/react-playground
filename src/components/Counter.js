import { useDispatch, useSelector } from 'react-redux';

import { counterActions } from '../store/counter-slice';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.counter)
  const showCounter = useSelector(state => state.counter.showCounter)

  const increment = ()=>{
    dispatch(counterActions.increment())
  }
  const decrement = () =>{
    dispatch(counterActions.decrement())
  }
  const increase = () =>{
    dispatch(counterActions.increase(4))
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter &&<div className={classes.value}>{counter}</div> }
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={increase}>Increase</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;