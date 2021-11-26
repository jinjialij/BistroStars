import Card from "../UI/Card/Card";
import classes from "./AvailableMeal.module.css";

import { useEffect, useState } from "react";

const AvailableMeal = () => {
  const [meals, setsMeals] = useState([]);
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://learn-5c267.firebaseio.com/Meals.json"
      );
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
    };
    fetchMeals();
  }, []);

  return (
    <section className={classes.meals}>
      {meals.map((el) => {
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
    </section>
  );
};

export default AvailableMeal;
