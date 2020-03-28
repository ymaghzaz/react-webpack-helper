import React, { useState, useEffect, useReducer } from "react";
import ReactDOM from "react-dom";
import withCounterModule from "./hooks/withCounterModule";
import { useRedux } from "./state/useRedux";
import * as actions from "./state/actions";
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
  const [state, dispatch] = useRedux();
  const { counter } = state;
  withCounterModule(counter);
  return (
    <div>
      <h1>Hello from react webpack babel </h1>
      <div style={styles.container}>
        <h3> counter value : {counter}</h3>
        <button
          style={styles.button}
          onClick={() => {
            dispatch(actions.increment());
          }}
        >
          + 1
        </button>
        <button
          style={styles.button}
          onClick={() => {
            dispatch(actions.decrement());
          }}
        >
          - 1
        </button>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
