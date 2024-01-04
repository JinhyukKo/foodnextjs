import React from "react";
import classes from "./page.module.css";
import Link from "next/link";
import MealGrid from "@/components/meals/meal-grid";
import { Suspense } from "react";

export default function Meals() {
  return (
    <div className={classes.page}>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favorite meal and share it with the community!</p>
        <div className={classes.cta}>
          <Link href="/meals/share">Share your meal</Link>
        </div>
      </header>
      <main>
        <Suspense fallback={<h1 className={classes.loading}>LOADING</h1>}>
          <MealGrid />
        </Suspense>
      </main>
    </div>
  );
}
