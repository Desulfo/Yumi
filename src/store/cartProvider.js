import React from "react";
import CartContext from "./cart-store";

function CartProvider(props) {
  return (
    <CartContext.Provider
      value={{
        meals: [{ name: "sushi" }],
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
