import React from "react";

import "./Button.css";

function Button(props) {
  return (
    <button
      className={`btn ${props.className}`}
      type={props.type}
      onClick={props.onClick}
    >
      {" "}
      {/*how to not display undefine as className?
      how to pass {..props} without passing className */}
      {props.children}
    </button>
  );
}

export default Button;
