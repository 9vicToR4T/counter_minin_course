import React from "react";
import Counter from './counter';


const Counters = ({counters, onReset, ...rest}) => {
  return (
    <>
      <button className="btn btn-danger m-3" onClick={() => onReset()}>
        Reset
      </button>
      {counters.map((counter) => {
        return (
          <Counter
            key={counter.id}
            {...counter}
            {...rest}
          />
        );
      })}
    </>
  );
};

export default Counters;
