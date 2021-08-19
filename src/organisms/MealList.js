import React from "react";

import "./MealList.css";
import meals from "../assets/data/meals";
import SingleMeal from "../molecules/SingleMeal";

function MealList() {
  return (
    <main className="Meals">
      <ul>
        {meals.map((meal) => (
          <SingleMeal key={meal.title} meal={meal} />
        ))}
      </ul>
    </main>
  );
}

export default MealList;
