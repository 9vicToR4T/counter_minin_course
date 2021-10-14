import React, { useState } from "react";

import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navBar";

function App() {
  const initialCountersValue = [
    { value: 1, id: 1, name: "Banana" },
    { value: 2, id: 2, name: "Apple" },
    { value: 3, id: 3, name: "Orange" },
    { value: 0, id: 4, name: "Qiwi" },
  ];

  const [counters, setCounter] = useState(initialCountersValue);
 
 
  // const newCounters= [...counters]
      // const elementIndex = newcounters.findIndex( c => c.id === counterId)
      // newCounters[elementIndex].value++
      // setCounter(newCounters)


  const handleIncrement = (counterId) => {
    let newCounters = counters.map((el) => {
      if (el["id"] === +counterId) {
        el["value"]++;
        return el;
      } else {
        return el;
      }
    });
      setCounter(newCounters);
  };

  const handleDecrement = (counterId) => {
    let newCounters = counters.map((el) => {
      //findIndex( c => c.id === counterId)
      if (el["id"] === +counterId) {
        el["value"]--;
        return el;
      } else {
        return el;
      }
    });
      setCounter(newCounters);
  };

  const handleReset = () => setCounter(initialCountersValue);
  const handleDelete =(id) =>{
    const newCounters = counters.filter(el => el.id !== id)
    setCounter(newCounters)
  }

  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <NavBar totalCount={counters.reduce((a, c) => a + c.value, 0)} />
      <Counters
        counters={counters}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onReset={handleReset}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
