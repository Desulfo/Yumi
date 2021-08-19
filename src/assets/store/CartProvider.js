import React, { useState } from "react";
import CartContext from "./cart-store";

// [{meal.title: "", meal.price: number, amount: number}]
const initMealsInCart = [];
function CartProvider(props) {
  const [mealsInCart, setMealsInCart] = useState(initMealsInCart);
  const addMealHandler = (item, amount) => {
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
