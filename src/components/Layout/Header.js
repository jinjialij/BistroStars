/**
 * Toolbar and image under it
 * @param {*} props
 */

import React from "react";
import mealsImg from "../../assets/meals.png";
import classes from "./Header.module.css";
import HeadCartBtn from "./HeadCartBtn";

const Header = (props) => {
  return (
    <>
      <header className={classes.toolbar}>
        <h1>Bistro Stars</h1>
        <HeadCartBtn cartBtn={classes.cartBtn} onShowCart={props.onShowCart} />
      </header>
      <div className={classes.bgimg}>
        <img src={mealsImg} alt="A table full of amazing food" />
      </div>
    </>
  );
};
export default Header;
