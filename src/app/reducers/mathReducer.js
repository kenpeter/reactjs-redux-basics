// math
// result, 0
// last values, empty array
const mathInitState = {
  result: 0,
  lastValues: []
};

// export
// default
// math reducer = 
// (state, action) => {}, because it needs action and current state to create next state
const mathReducer = (state = mathInitState, action) => {
  // switch
  // action.type
  switch(action.type) {
    // case
    // add
    case "ADD":
      // state = {}
      state = {
        // destructive
        ...state,
        // overwrite
        // result:
        // state.result, have a look at mathInitState
        result: state.result + action.payload,
        // lastValues
        // ...(state.lastValues), destrucive array
        // append action.payload
        lastValues: [...state.lastValues, action.payload]
      };
         
      // break   
      break;
    
    // similar to add
    case "SUBSTRACT":
      state = {
        ...state, 
        result: state.result - action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      
      break;
  }

  // return state, entire state
  return state;
}


// when they export, it can export as constant or func, for func can do func()
// export vs module.exports
// e.g. export.func1
// e.g. export.func2
// module.exports = {func 1, func 2}
// to export arrow func, need to assign to const
export default mathReducer;
