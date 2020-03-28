export const ActionType = {
  INCREMENT: "increment",
  DECREMENT: "decrement"
}

export const increment = () => ({ type: ActionType.INCREMENT })
export const decrement = () => ({ type: ActionType.DECREMENT })
