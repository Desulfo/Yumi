import React, { useContext } from "react";

import CartContext from "../assets/store/cart-store";
import styles from "./OrderedMeal.module.css";

function OrderedMeal(props) {
  const cartCtx = useContext(CartContext);
  const { meal } = props;
  const removeHandler = () => {
    cartCtx.removeMeal(meal);
  };
  const addHandler = () => {
    cartCtx.addMeal(meal);
  };
  return (
    <li className={styles.meal} key={meal.title}>
      <header className={styles.mealHeader}>
        <h4>{meal.title}</h4>
        <small>{meal.price}$</small>
      </header>
      <div className={styles.amountWrapper}>
        <button className={styles.btnSecondary} onClick={removeHandler}>
          -
        </button>
        {meal.amount}
        <button className={styles.btnSecondary} onClick={addHandler}>
          +
        </button>
      </div>
    </li>
  );
}

export default OrderedMeal;
