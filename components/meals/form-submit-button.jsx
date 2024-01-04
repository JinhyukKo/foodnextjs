"use client";
import { useFormStatus } from "react-dom";
import { shareMeal } from "@/lib/actions";
export default function FormSubmitButton() {
  const { pending } = useFormStatus();
  return (
    <>
      <button type="submit" disabled={pending}>
        {pending ? "Submiting" : "Share Meal"}
      </button>
    </>
  );
}
