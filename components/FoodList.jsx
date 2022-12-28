/** @format */

import styles from '../styles/FoodList.module.css'
import FoodCard from './FoodCard'

function FoodList({ productList }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>e-Mama Pizza</h1>
      <p className={styles.description}>
        Welcome to Mama Pizza ! <br />
        Pizzas are all homemade with joy by Mama.
      </p>
      <div className={styles.wrapper}>
        {productList.map((food) => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>
    </div>
  )
}

export default FoodList
