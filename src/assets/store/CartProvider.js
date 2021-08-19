import React, { useState } from "react";
import CartContext from "./cart-store";

// [{meal.title: "", meal.price: number, amount: number}]
function CartProvider(props) {
  const [mealsInCart, setMealsInCart] = useState([]);
  const addMealHandler = (item) => {};
  const removeMealHandler = () => {};

  const cartContext = {
    meals: mealsInCart,
    addMeal: addMealHandler,
    removeMeal: removeMealHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
