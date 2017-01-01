

const userInitState = {
  name: "Max",
  age: 27
};
 

const userReducer = (state = userInitState, action) => {
  switch(action.type) {
    // SET_NAME
    case "SET_NAME_FULFILLED":
      state = {
        ...state,
        name: action.payload
      };
         
      break;
    
    case "SET_AGE":
      state = {
        ...state, 
        age: action.payload
      };
      
      break;
  }

  return state;
}


// to export arrow func, need to assign to const
export default userReducer;
