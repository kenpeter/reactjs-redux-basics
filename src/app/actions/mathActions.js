// much simpler
// export func
// export func
// those fun returns an action
export function addNumber(number) {
  return {
    type: "ADD",
    payload: number
  };
}


export function substractNumber(number) {
  return {
    type: "SUBSTRACT",
    payload: number
  };
}
