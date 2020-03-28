export const ActionType = {
  INCREMENT: "increment",
  DECREMENT: "decrement"
};

export const increment = () => {
  return { type: ActionType.INCREMENT };
};

export const decrement = () => {
  return { type: ActionType.DECREMENT };
};
