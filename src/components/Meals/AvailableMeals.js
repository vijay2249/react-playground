import React from 'react';
import { useEffect, useState } from 'react';
import Card from '../UI/Card/Card';
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {

  const [mealItems, setMealsItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(()=>{
    async function fetchData() {
      setIsLoading(true)
      setError(null)
      try{
        const response = await fetch("https://react-learn-ee457-default-rtdb.asia-southeast1.firebasedatabase.app/meals_demo.json")
        if(!response.ok) throw new Error("Something went wrong!!!!")
        const data = await response.json()
        const arrayData = []
        for(const keys in data){
          arrayData.push(data[keys])
        }
        setMealsItems(arrayData)
      }catch(err){
        setError(err.message || "SomeThing went wrong!!!")
      }
      setIsLoading(false)
    }
    fetchData();

  }, [])

  return(
    <React.Fragment>
      <section className={classes.meals}>
        { error ? <p className={classes.MealsLoading}>{error}</p> :
          isLoading ? <p className={classes.MealsLoading}>Loading</p> : 
          <Card>
            <ul>
              {mealItems.map(meal => (
                <MealItem 
                  id={meal.id}
                  key={meal.id} 
                  name={meal.name}
                  description={meal.description}
                  price={meal.price} 
                />
              ))}
            </ul>
          </Card>
        }
      </section>
    </React.Fragment>
  )
}

export default AvailableMeals