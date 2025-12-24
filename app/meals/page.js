import Link from "next/link";
import classes from './page.module.css';
import MealGrid from "@/Components/meals/meal-grid";
import {getMeals} from "@/lib/meals";
import { Suspense } from "react";


export const metadata = {
    title: 'ALL MEALS',
    description: 'Browse Shared Meals By Our Vibrant Community.',
  };

async function Meal(){
    const meals = await getMeals();
    return <MealGrid meals={meals}/>;
}
export default  function Meals(){
    return(
     <>
       <header className={classes.header}>
        <h1>Delicious meals , created{' '} 
            <span className={classes.highlight}>By You</span>
        </h1>
        <p>Choose your favourite Recipe and cook it yourself.It's easy and Fun.</p>
        <p className={classes.cta}>
            <Link href="/meals/share" >Share your  Favourite Recipe</Link>
        </p>
       </header>
       <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>fetching Meals...</p>}>
         <Meal/>
        </Suspense>
       </main>

       </>
    );
}