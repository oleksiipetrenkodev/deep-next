import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((res) => setTimeout(res, 500));
  return db.prepare("SELECT * FROM meals").all();
}
