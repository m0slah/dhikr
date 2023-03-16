import React, { useState, Fragment, useEffect, useCallback } from "react";

import Card from "../UI/Card";
import Cart from "./Cart/Cart";
import classes from "./DhikrList.module.css";

const DhikrList = () => {
  const [dhikrData, setDhikrData] = useState([]);
  const [counters, setCounters] = useState(0);

  const fetchDhikrHandler = useCallback(async () => {
    try {
      const response = await fetch(
        "https://dhikr-1ccd5-default-rtdb.firebaseio.com/dhikr.json"
      );

      if (!response.ok) {
        throw new Error("Some thing Went Wrong!");
      }

      const responseData = await response.json();

      const loadedData = [];

      for (const key in responseData) {
        loadedData.push({
          id: key,
          title: responseData[key].title,
        });
      }
      setDhikrData(loadedData);
    } catch (error) {
      alert(error);
    }
  }, []);

  useEffect(() => {
    fetchDhikrHandler();
  }, [fetchDhikrHandler]);

  const countHandler = () => {
    const enteredAmount = counters + 1;
    setCounters(enteredAmount);
  };

  return (
    <dev className={classes.dhikr}>
      <Cart onCounters={counters} />
      <Card>
        {dhikrData.map((item) => (
          <ul className={classes.ul} id={item.id} key={item.id}>
            <li>
              <div>
                <h3>{item.title}</h3>
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
