import React from "react";

import "./MealList.css";
import Button from "../atoms/Button.js";
import meals from "../data/meals";

function MealList() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <main className="Meals">
      <ul>
        {meals.map((meal) => (
          <li key={meal.title}>
            <div>
              <h3 className="meal--title">{meal.title}</h3>
              <p>
                <small>{meal.description}</small>
              </p>
              <p className="meal--price">${meal.price}</p>
            </div>
            <form onSubmit={handleSubmit}>
              <label>
                Amount
                <input type="number" defaultValue="1" />{" "}
              </label>
              <Button type="submit">Add</Button>
            </form>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default MealList;
