import React, { useContext } from "react";

import classes from "./Cart.module.css";
import Button from "../atoms/Button";
import CartContext from "../store/cart-store";

function Cart(props) {
  const cartCtx = useContext(CartContext);
  const orderHandler = (e) => {
    e.preventDefault();
    console.log("Ordering ....");
    props.close();
  };
  return (
    <section
      onClick={props.close}
      className={`${classes.ModalWrapper} ${props.open ? classes.open : ""}`}
    >
      <main>
        <ul>
          {cartCtx.meals.map((item) => (
            <li key={item.name}>{item.name}</li>
          ))}
        </ul>
        <div>
          <Button onClick={props.close} type="button">
            Close
          </Button>
          <Button onClick={orderHandler} type="button">
            Order
          </Button>
        </div>
      </main>
    </section>
  );
}

export default Cart;
