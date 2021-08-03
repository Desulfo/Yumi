import React from "react";

import "./MainNav.css";
import Button from "../atoms/Button";

function MainNav() {
  return (
    <nav className="Main-nav">
      <h2 className="Company-name">YumiMeals</h2>
      <Button type="button">Cart</Button>
    </nav>
  );
}

export default MainNav;
