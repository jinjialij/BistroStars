import Card from "../UI/Card/Card";
import classes from "./AvailableMeal.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeal = () => {
  return (
    <section className={classes.meals}>
      {DUMMY_MEALS.map((el) => {
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
