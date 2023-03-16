import React, { useState, Fragment } from "react";

import Card from "../UI/Card";
import Cart from "./Cart/Cart";
import classes from "./DhikrList.module.css";

const DHIKR = [
  {
    id: 1,
    name: "سبحان اللە",
  },
  {
    id: 2,
    name: "الحمد اللە",
  },
  {
    id: 3,
    name: "اللە اکبر",
  },
  {
    id: 4,
    name: "استغفراللە",
  },
  {
    id: 5,
    name: "أشهد أن لا إله إلا الله وأشهد أن محمدا رسول الله",
  },
  {
    id: 6,
    name: "لا اله الا الله",
  },
];

const DhikrList = () => {
  const [counters, setCounters] = useState(0);

  const countHandler = (item) => {
    const enteredAmount = counters + 1;
    setCounters(enteredAmount);
  };

  return (
    <dev className={classes.dhikr}>
      <Cart onCounters={counters} />
      <Card>
        {DHIKR.map((item) => (
          <ul className={classes.ul} id={item.id} key={item.id}>
            <li>
              <div>
                <h3>{item.name}</h3>
                <button className={classes.btn} onClick={countHandler}>
                  ژماردن
                </button>
              </div>
            </li>
          </ul>
        ))}
      </Card>
    </dev>
  );
};

export default DhikrList;
