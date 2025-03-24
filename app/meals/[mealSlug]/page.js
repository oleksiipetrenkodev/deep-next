import Image from "next/image";
import classes from "./page.module.css";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

export default async function MealDetailsPage({ params }) {
  const { mealSlug } = params;

  const meal = await getMeal(mealSlug);
  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replaceAll("\n", "<br />");

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image fill src={meal.image} alt={meal.title} />
        </div>
        <div className={classes.headerText}>
          <h1>Meal {meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>John Doe</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
