import { reducer, initState } from "./reducer"
import { useReducer } from "react"

export const useRedux = () => {
  return useReducer(reducer, initState)
}
