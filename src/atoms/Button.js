import React from "react";

import "./Button.css";

function Button(props) {
  return (
    <button type={props.type} className={`btn ${props.className}`}>
      {props.children}
    </button>
  );
}

export default Button;
