import React from "react";

const CartContext = React.createContext({
  meals: [{ name: "sushi" }],
});

export default CartContext;
