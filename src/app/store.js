// store is to store reducers, middle wares, etc

// create store
// combine reducer
// appy middle ware
import {
  createStore, 
  combineReducers, 
  applyMiddleware
}
from "redux";

// logger
import logger from "redux-logger";

// thunk
import thunk from "redux-thunk";


// https://github.com/pburtchaell/redux-promise-middleware/blob/master/examples/simple/store.js
// promise
import promise from "redux-promise-middleware";

// math reducer
import mathReducer from "./reducers/mathReducer";

// user reducer
import userReducer from "./reducers/userReducer";

// const
// store
// create store
// reducer
// state: 1
// we don't need to pass state here.
// combine + reducers
export default createStore(
  // combine reducers
  // {}
  // math: math reducer
  // user: user reducer
  
  //combineReducers({math: mathReducer, user: userReducer}),
  combineReducers({
    mathReducer, 
    userReducer
  }),
  
  // just pass func name
  //applyMiddleware(myLogger)
  // here we execute the func, why?
  applyMiddleware(logger(), thunk, promise())
);
