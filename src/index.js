import React from "react"
import ReactDOM from "react-dom"
import { useRedux } from "./state/useRedux"
import { AppContext } from "./context"
import App from "./App"

const Root = () => {
  const [state, dispatch] = useRedux()
  return (
    <AppContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      <App />
    </AppContext.Provider>
  )
}
ReactDOM.render(<Root />, document.querySelector("#root"))
