import React from "react";

const CartContext = React.createContext({
  meals: [],
  addMeal: () => {},
  removeMeal: () => {},
});

export default CartContext;
