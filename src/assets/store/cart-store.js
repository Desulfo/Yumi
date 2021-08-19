import React from "react";

const CartContext = React.createContext({
  meals: [],
  addMeal: () => {},
  removeMeal: () => {},
  reset: () => {},
});

export default CartContext;
