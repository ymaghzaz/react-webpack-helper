import React from "react";
import * as actions from "../state/actions";
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

const Counter = ({ counter, dispatch }) => {
  return (
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
  );
};

export default Counter;
