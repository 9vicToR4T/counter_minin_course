import React  from "react";

const Counter = ({value, id, name, onDecrement, onIncrement, onDelete}) => {
  let setClassNameIncrement = " m-3 btn btn";
  value > 0
    ? (setClassNameIncrement += "-primary")
    : (setClassNameIncrement += "-danger");

  let setClasNameDecrement = "m-3 btn btn";
  value <= 0
    ? (setClasNameDecrement += " disabled")
    : (setClasNameDecrement += "-warning");

  const formCount = () => {
    return value === 0 ? "Zero" : value;
  };

  return (
    <div>
      <h3>{name}</h3>
      <span className="m-3">{formCount()} </span>
      <button
        onClick={() => onIncrement(id)}
        className={setClassNameIncrement}
      >
        Increment
      </button>

      <button
        onClick={() => onDecrement(id)}
        className={setClasNameDecrement}
      >
        Decrement
      </button>
      <button className='btn btn-danger' onClick={() =>onDelete(id)}>Delete</button>
    </div>
  );
};

export default Counter;
