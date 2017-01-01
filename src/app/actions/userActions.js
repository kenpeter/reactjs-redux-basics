// whey add promise to actions.
// it is waiting for the payload
export function setName(name) {
  return {
    // type
    type: "SET_NAME",
    // payload
    // promise
    // () => {}
    // () => {}
    payload: new Promise((resolve, reject) =>{
      setTimeout(() => {
        resolve(name);
      }, 2000);
    })
  };
}


export function setAge(age) {
  return {
    type: "SET_AGE",
    payload: age
  };
}
