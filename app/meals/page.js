import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";

export default function Meals() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals created
          <span className={classes.highlight}> by you</span>
        </h1>
        <p>Choose your faviour reciepe and cook yourself</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share you favourite reciepe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}
