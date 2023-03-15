import React from "react";

import Card from "components/UI/Card";

import classes from "./Cart.module.css";

const Cart = (props) => {
  return (
    <Card>
      <div className={classes.display}>
        <span>کۆی چاکەکان: </span>
        <span>{props.onCounters}</span>
      </div>
    </Card>
  );
};

export default Cart;
