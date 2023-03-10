import React, { useState, Fragment } from "react";
import Card from "../UI/Card";
import classes from "./DhikrList.module.css";
const DHIKR = [
  {
    id: 1,
    name: "سبحان اللە",
    price: 10,
  },
  {
    id: 2,
    name: "الحمد اللە",
    price: 10,
  },
  {
    id: 3,
    name: "اللە اکبر",
    price: 10,
  },
  {
    id: 4,
    name: "استغفراللە",
    price: 10,
  },
  {
    id: 5,
    name: "أشهد أن لا إله إلا الله وأشهد أن محمدا رسول الله",
    price: 10,
  },
  {
    id: 6,
    name: "لا اله الا الله",
    price: 10,
  },
];

const DhikrList = () => {
  const [counters, setCounters] = useState(0);

  const countHandler = (item) => {
    const enteredAmount = counters + item.price;
    setCounters(enteredAmount);
  };

  return (
    <dev className={classes.dhikr}>
      <Card>
        <div className={classes.display}>
          <span>کۆی چاکەکان: </span>
          <span>{counters}</span>
        </div>
      </Card>

      <Card>
        {DHIKR.map((item) => (
          <ul className={classes.ul} id={item.id} key={item.id}>
            <li>
              <div>
                <h3>{item.name}</h3>
                <button
                  className={classes.btn}
                  onClick={() => countHandler(item)}
                >
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
