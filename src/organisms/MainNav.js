import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./MainNav.css";
import Button from "../atoms/Button";
import Cart from "./Cart";

function MainNav() {
  const [isOpen, setIsOpen] = useState(false);
  const isOpenHandler = (e) => {
    e.stopPropagation();
    console.log("klik");
    setIsOpen((prevState) => !prevState);
  };
  return (
    <nav className="Main-nav">
      <h2 className="Company-name">YamiMeals</h2>
      <Button onClick={isOpenHandler} type="button">
        Cart
      </Button>
      {ReactDOM.createPortal(
        <Cart open={isOpen} close={isOpenHandler} />,
        document.body
      )}
    </nav>
  );
}

export default MainNav;
