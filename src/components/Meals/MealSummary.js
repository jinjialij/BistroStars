import classes from "./MealSummary.module.css";

const MealSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Amazing food, Amazing life</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy delivery to your home directly from our Bistro
      </p>
      <p>
        Cooked with high-quality ingredients, professional chefs and
        just-in-time delivery
      </p>
    </section>
  );
};

export default MealSummary;
