import React from "react";
import Button from "../atoms/Button.js";
import meals from "../data/meals.js";

function MealList() {
  return (
    <main>
      <ul>
        {meals.map((meal) => (
          <li key={meal.title}>
            <div>
              <h3>{meal.title}</h3>
              <p>
                <small>{meal.description}</small>
              </p>
              <h4>{meal.price}</h4>
            </div>
            <form>
              <label>
                Amount
                <input type="number" />{" "}
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
