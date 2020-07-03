import React from "react";
import classes from "./Burger.css";
import BurgerIngedient from "./BurgerIngredient/BurgerIngredient";
import BurgerBuilder from "../../containers/BurgerBuilder/BurgerBuilder";
//import BurgerIngedient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        console.log(props.ingredients);
        return [...Array(props.ingredients[igKey])].map(( _, i) => {
            return <BurgerIngedient key={igKey + i} type={igKey} />;
        });
  });
  return (
    <div className={classes.Burger}>
      <BurgerIngedient type="bread-top" />
      {transformedIngredients}
      <BurgerIngedient type="bread-bottom" />
    </div>
  );
};

export default burger;
