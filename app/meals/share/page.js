"use client";

import classes from "./page.module.css";
import ImagePicker from "@/components/meals/image-picker";
import { useFormState } from "react-dom";
import { shareMeal } from "@/lib/actions";
import FormSubmitButton from "@/components/meals/form-submit-button";
export default function ShareMealPage() {
  const [state, FormAction] = useFormState(shareMeal, "");

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={FormAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="creator">Your name</label>
              <input type="text" id="creator" name="creator" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker />
          <p>{state}</p>
          <p className={classes.actions}>
            <FormSubmitButton />
          </p>
        </form>
      </main>
    </>
  );
}
