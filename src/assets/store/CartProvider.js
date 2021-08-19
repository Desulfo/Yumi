import React, { useState } from "react";
import CartContext from "./cart-store";

// [{meal.title: "", meal.price: number, amount: number}]
const initMealsInCart = [];
const isNameInArr = (item) => {};
function CartProvider(props) {
  const [mealsInCart, setMealsInCart] = useState(initMealsInCart);

  const addMealHandler = (item, amount) => {
    const mealInCart = mealsInCart.find((meal) => meal.title === item.title);
    if (mealInCart) {
      mealInCart.amount = mealInCart.amount + amount;
      setMealsInCart((prevState) => [...prevState]);
      //Why not: setMealsInCart((prevState) => [mealInCart, ...prevState]);
      return;
    }
    setMealsInCart((prevState) => [{ ...item, amount: amount }, ...prevState]);
  };
  const removeMealHandler = () => {};
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
