import React, { useContext } from "react";

import styles from "./Cart.module.css";
import Button from "../atoms/Button";
import CartContext from "../assets/store/cart-store";
import OrderedMeal from "../molecules/OrderedMeal";

const stopPropagation = (e) => {
  e.stopPropagation();
};

function Cart(props) {
  const cartCtx = useContext(CartContext);

  const orderHandler = (e) => {
    e.preventDefault();
    console.log("Ordering ....");
    cartCtx.reset();
    props.close(e);
  };

  const totalPrice = cartCtx.meals.reduce(
    (total, meal) => total + meal.amount * meal.price,
    0
  );

  return (
    <section
      onClick={props.close}
      className={`${styles.ModalWrapper} ${props.open ? styles.open : ""}`}
    >
      <main onClick={stopPropagation}>
        <ul>
          {cartCtx.meals &&
            cartCtx.meals.map((meal) => <OrderedMeal meal={meal} />)}
        </ul>
        <footer>
          <p>Total Price:</p>
          <p>${totalPrice.toFixed(2)}</p>
        </footer>
        <div className={styles.buttonsWrapper}>
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
