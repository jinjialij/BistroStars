import Card from "../UI/Card/Card";
import classes from "./AvailableMeal.module.css";

import { useEffect, useState } from "react";

const AvailableMeal = () => {
  const [meals, setsMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://bistrostar-73b61-default-rtdb.firebaseio.com/Meals.json"
      );

      if (!response.ok) {
        throw new Error(
          `Something went wrong. Status code: ${response.statue} Status: ${response.statusText}`
        );
      }
      const responseData = await response.json();

      let loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setsMeals(loadedMeals);
      setIsLoading(false);
    };
    fetchMeals().catch((err) => {
      console.error(err);
      setIsLoading(false);
      setError(err.message);
    });
  }, []);

  return (
    <section className={classes.meals}>
      {isLoading && <p>Loading...</p>}
      {!isLoading &&
        meals.map((el) => {
          return (
            <Card
              key={el.id}
              s
              id={el.id}
              name={el.name}
              desc={el.description}
              price={el.price}
              label={`Amount`}
              btnDesc="Add"
            />
          );
        })}
      {!isLoading && error && <p className={classes.error}>{error}</p>}
    </section>
  );
};

export default AvailableMeal;
