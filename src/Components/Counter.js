import React, { useState } from "react";

export default function Counter() {
  let [counter, setCounter] = useState(0);
  let [color, setColor] = useState();

  function incrementer() {
    setCounter(() => counter++);
    if (counter >= 0) {
      setColor("orange");
    }
  }

  function decrementer() {
    setCounter(() => counter--);
    if (counter <= 0) {
      setColor("light");
    }
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col my-2 ">
          <button
            className="container  "
            style={{ width: "100px", height: "100px", marginLeft: "200px" }}
            onClick={decrementer}
          >
            -
          </button>
        </div>
        <div
          className="col text-size"
          style={{ fontSize: "40px", marginRight: "150px", marginTop: "20px" }}
        >
          {counter} {color}
        </div>
        <div className="col mx-4 my-2">
          <button
            className="container bg-warning "
            style={{ width: "100px", height: "100px", marginLeft: "-300px" }}
            onClick={incrementer}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
