import React, { useState } from "react";
import ReactDOM from "react-dom";

import Cart from "./Cart";
import CartButton from "../molecules/CartButton";
import "./MainNav.css";

function MainNav() {
  const [isOpen, setIsOpen] = useState(false);
  const isOpenHandler = (e) => {
    e.stopPropagation();
    setIsOpen((prevState) => !prevState);
  };
  return (
    <nav className="Main-nav">
      <h2 className="Company-name">YumiMeals</h2>
      <CartButton isOpenHandler={isOpenHandler} />
      {ReactDOM.createPortal(
        <Cart open={isOpen} close={isOpenHandler} />,
        document.body
      )}
    </nav>
  );
}

export default MainNav;
