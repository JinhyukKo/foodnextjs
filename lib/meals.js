import sql from "better-sqlite3";
import { S3 } from "@aws-sdk/client-s3";
import { redirect } from "next/navigation";
import slugify from "slugify";
import xss from "xss";

const s3 = new S3({
  region: "ap-northeast-2",
});
const db = sql("meals.db");

export async function getMeals() {
  let meals;

  await new Promise((resolve) => {
    setTimeout(() => resolve(), 3000);
  });
  meals = db.prepare("SELECT * FROM meals").all();

  return meals;
}
export async function getMeal(slug) {
  await new Promise((resolve) => {
    setTimeout(() => resolve(), 1000);
  });
  const meal = db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
  console.log(meal);
  return meal;
}

export async function saveMeal(meal) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);
  meal.summary = xss(meal.summary);
  const extension = meal.image.name.split(".").pop();
  const fileName = meal.slug + "." + extension;
  const BufferedImage = await meal.image.arrayBuffer();

  // const writeStream = fs.createWriteStream(`public/images/${fileName}`);
  // writeStream.write(Buffer.from(BufferedImage));
  // writeStream.end();
  s3.putObject({
    Bucket: "kojinhyuk-very-sexy",
    Key: fileName,
    Body: Buffer.from(bufferedImage),
    ContentType: meal.image.type,
  });

  meal.image = fileName;

  console.log(meal);

  db.prepare(
    "INSERT INTO meals (title, slug, creator, summary, instructions, image, creator_email) VALUES (@title, @slug, @creator, @summary, @instructions, @image, @creator_email)"
  ).run(meal);
}
