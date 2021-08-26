import React, { useState } from "react";
import CartContext from "./cart-store";

const initMealsInCart = [];

function CartProvider(props) {
  const [mealsInCart, setMealsInCart] = useState(initMealsInCart);

  const addMealHandler = (item, amount = 1) => {
    const mealInCart = mealsInCart.find((meal) => meal.title === item.title);
    if (mealInCart) {
      mealInCart.amount = mealInCart.amount + amount;
      setMealsInCart((prevState) => [...prevState]);
      //Why not: setMealsInCart((prevState) => [mealInCart, ...prevState]);
      return;
    }
    setMealsInCart((prevState) => [{ ...item, amount: amount }, ...prevState]);
  };

  const removeMealHandler = (item, amount = 1) => {
    const mealInCart = mealsInCart.find((meal) => meal.title === item.title);
    if (!mealInCart) {
      return;
    }
    mealInCart.amount = mealInCart.amount - amount;
    if (mealInCart.amount <= 0) {
      setMealsInCart((prevState) =>
        [...prevState].filter((meal) => meal.title !== item.title)
      );
      return;
    }
    setMealsInCart((prevState) => [...prevState]);
  };
  const resetHandler = () => {
    setMealsInCart(initMealsInCart);
  };

  const cartContext = {
    meals: mealsInCart,
    addMeal: addMealHandler,
    removeMeal: removeMealHandler,
    reset: resetHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
