import React, { useState } from "react";

import Button from "../atoms/Button";

function SingleMeal(props) {
  const [amountInput, setAmountInput] = useState("1");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(amountInput);
  };
  return (
    <li>
      <div>
        <h3 className="meal--title">{props.meal.title}</h3>
        <p>
          <small>{props.meal.description}</small>
        </p>
        <p className="meal--price">${props.meal.price}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Amount
          <input
            value={amountInput}
            onChange={(e) => setAmountInput(e.target.value)}
            type="number"
            min="1"
            max="5"
          />
        </label>
        <Button type="submit">Add</Button>
      </form>
    </li>
  );
}

export default SingleMeal;
