import React, { useContext } from "react";

import classes from "./Cart.module.css";
import Button from "../atoms/Button";
import CartContext from "../assets/store/cart-store";

function Cart(props) {
  const cartCtx = useContext(CartContext);

  const orderHandler = (e) => {
    e.preventDefault();
    console.log("Ordering ....");
    props.close();
  };
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const totalPrice = 1;
  return (
    <section
      onClick={props.close}
      className={`${classes.ModalWrapper} ${props.open ? classes.open : ""}`}
    >
      <main onClick={stopPropagation}>
        <ul>
          {cartCtx.meals &&
            cartCtx.meals.map((item) => (
              <li key={item.name}>
                <div>{item.name}</div>
                <div>price</div>
              </li>
            ))}
        </ul>
        <footer>
          <p>Total Price: </p>
          <p>${totalPrice}</p>
        </footer>
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
