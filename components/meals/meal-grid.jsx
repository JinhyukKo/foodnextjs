import React from "react";
import classes from "./meal-grid.module.css";
import MealItem from "./meal-item";
import { getMeals } from "@/lib/meals";
export default async function MealGrid() {
  const meals = await getMeals();
  return (
    <div className={classes.meals}>
      {meals.map((element) => (
        <MealItem
          key={element.id}
          title={element.title}
          slug={element.slug}
          image={element.image}
          summary={element.summary}
          creator={element.creator}
        />
      ))}
    </div>
  );
}
