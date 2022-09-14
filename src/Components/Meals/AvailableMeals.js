import Card from "../UI/Card";
import MealItem from "./MealItem";
import classes from "./AvailableMeals.module.css";

function AvailableMeals() {
  const menu = [
    {
      id: "m1",
      name: "Feta salad",
      description: "Finest cheese and veggies",
      price: 12,
    },
    {
      id: "m2",
      name: "Mediterranean fish",
      description: "Fresh fish with lots of herbs",
      price: 22,
    },
    {
      id: "m3",
      name: "Tasty pasta",
      description: "Fall in love with cherry tomatoes and basil",
      price: 15,
    },
    {
      id: "m4",
      name: "Green plate",
      description: "Healthy...and green...",
      price: 18,
    },
  ];

  return (
    <section className={classes["meals-container"]}>
      <Card>
        <ul>
          {menu.map((item) => (
            <MealItem
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
