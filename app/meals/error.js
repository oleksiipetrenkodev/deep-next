"use client";
export default function MealsError({ error }) {
  return (
    <main className="error">
      <h1>Something went wrong</h1>
      <p>{error.message}</p>
    </main>
  );
}
