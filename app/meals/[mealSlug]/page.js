import React from "react";
import classes from "./page.module.css";
import Image from "next/image";

import { notFound } from "next/navigation";
import { getMeal } from "@/lib/meals";
export default async function MealSlug({ params }) {
  const meal = await getMeal(params.mealSlug);
  if (!meal) {
    notFound();
  }
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p>{meal.creator}</p>
          <p>{meal.creator_email}</p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <div className={classes.instructions}>{meal.instructions}</div>
      </main>
    </>
  );
}
