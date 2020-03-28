import { ActionType } from "./actions"
export const initState = {
  counter: 0
}

export const reducer = (state, action) => {
  switch (action.type) {
    case ActionType.INCREMENT:
      return { counter: state.counter + 1 }
    case ActionType.DECREMENT:
      return { counter: state.counter - 1 }
    default:
      return state
  }
}
