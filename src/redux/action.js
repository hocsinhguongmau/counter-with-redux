export const increment = (number = 1) => ({
  type: "INCREMENT",
  payload: number
});

export const decrement = (number = 1) => ({
  type: "DECREMENT",
  payload: number
});
