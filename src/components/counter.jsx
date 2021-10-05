import React, { useState } from "react";

const Counter = () => {
  const arrayOfListItems = ["q", "w", "u"];

  const [count, setCount] = useState(0);

  let setClassNameIncrement = " m-3 btn btn";
  count > 0
    ? (setClassNameIncrement += "-primary")
    : (setClassNameIncrement += "-danger");

  let setClasNameDecrement = "m-3 btn btn";
  count <= 0
    ? (setClasNameDecrement += " disabled")
    : (setClasNameDecrement += "-warning");

  const createItemsList = (arr) => {
    return (
      <ul>
        {arr.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
    );
  };

  const formCount = () => {
    return count === 0 ? "Zero" : count;
  };

  const handleIncrement = (tagId, flag = true) => {
    console.log(tagId);
    return flag ? setCount(count + 1) : setCount(count - 1);
  };

  return (
    <>
      {arrayOfListItems && createItemsList(arrayOfListItems)}
      <span className="m-3">{formCount()} </span>
      <button
        onClick={() => handleIncrement({ id: 1 }, true)}
        className={setClassNameIncrement}
      >
        Increment
      </button>
      <button
        onClick={() => handleIncrement({ id: 1 }, false)}
        className={setClasNameDecrement}
      >
        Decrement
      </button>
    </>
  );
};

export default Counter;
