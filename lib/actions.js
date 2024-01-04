"use server";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";
export async function shareMeal(prevState, formData) {
  const response = {
    title: formData.get("title"),
    creator: formData.get("creator"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator_email: formData.get("email"),
  };
  if (validation(response) === "invalid") {
    return "invalid";
  }

  await saveMeal(response);
  revalidatePath("/meals");
  redirect("/meals");
}

function validation(response) {
  if (
    response.title.length < 3 ||
    response.creator_email.length < 3 ||
    response.creator.length < 3 ||
    response.summary.length < 3 ||
    response.instructions.length < 3 ||
    response.image.length < 3
  ) {
    return "invalid";
  }
  return true;
}
