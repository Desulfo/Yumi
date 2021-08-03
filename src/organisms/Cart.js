import React from "react";

import classes from "./Cart.module.css";
import Button from "../atoms/Button";

function Cart(props) {
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
          <li></li>
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
