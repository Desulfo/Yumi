import React, { useState } from "react";
import ReactDOM from "react-dom";

import Cart from "./Cart";
import CartButton from "../molecules/CartButton";
import styles from "./MainNav.module.css";

function MainNav() {
  const [isOpen, setIsOpen] = useState(false);
  const isOpenHandler = (e) => {
    e.stopPropagation();
    setIsOpen((prevState) => !prevState);
  };
  return (
    <nav className={styles.mainNav}>
      <h2 className={styles.logo}>YumiMeals</h2>
      <CartButton isOpenHandler={isOpenHandler} />
      {ReactDOM.createPortal(
        <Cart open={isOpen} close={isOpenHandler} />,
        document.body
      )}
    </nav>
  );
}

export default MainNav;
