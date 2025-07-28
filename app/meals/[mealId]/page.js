export default function Home({ params }) {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        meal {params.mealId}
      </h1>
    </main>
  );
}
