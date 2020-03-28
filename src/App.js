import React, { useState, useEffect, useReducer, useContext } from "react";
import ReactDOM from "react-dom";
import withCounterModule from "./hooks/withCounterModule";
import { useRedux } from "./state/useRedux";
import Counter from "./components/Counter";
import { AppContext } from "./context";

const App = () => {
  const { state } = useContext(AppContext);
  const { counter } = state;
  console.log("state", state);
  withCounterModule(counter);
  return (
    <div>
      <h1>Hello from react webpack babel </h1>
      <Counter />
    </div>
  );
};

const Approot = () => {
  const [state, dispatch] = useRedux();
  return (
    <AppContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      <App />
    </AppContext.Provider>
  );
};
ReactDOM.render(<Approot />, document.querySelector("#root"));
