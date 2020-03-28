import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import withCounterModule from "./hooks/withCounterModule";
const styles = {
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    margin: "1vw",
    width: "5vw",
    height: "4vh",
    fontSize: "large"
  }
};
const App = () => {
  const [counter, setCounter] = useState(0);
  withCounterModule(counter);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <h1>Hello from react webpack babel </h1>
      <div style={styles.container}>
        <h3> counter value : {counter}</h3>
        <button style={styles.button} onClick={increment}>
          + 1
        </button>
        <button style={styles.button} onClick={decrement}>
          - 1
        </button>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
