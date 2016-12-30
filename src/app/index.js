import {render} from "react-dom";

// this guy is used by render(<App />, ...)
import React from "react";

// import
// create store
// from
// redux
import { 
  createStore, 
  combineReducers, 
  applyMiddleware 
} from "redux";

// import
// logger
// redux logger
import logger from "redux-logger";

//
import {Provider} from "react-redux";


// import
// App
import App from "./container/App";

const mathInitState = {
  result: 0,
  lastValues: []
};

const userInitState = {
  name: "Max",
  age: 27
};
 
const mathReducer = (state = mathInitState, action) => {
  switch(action.type) {
    case "ADD":
      state = {
        ...state,
        result: state.result + action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
         
      break;
    
    case "SUBSTRACT":
      state = {
        ...state, 
        result: state.result - action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      
      break;
  }

  return state;
}


const userReducer = (state = userInitState, action) => {
  switch(action.type) {
    case "SET_NAME":
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

// const
// logger
// () => () => () => {......}
// store, next, action
const myLogger = (store) => (next) => (action) => {
  console.log("Logged action", action);
  
  // next
  // action
  next(action);
}

// const
// store
// create store
// reducer
// state: 1
// we don't need to pass state here.
// combine + reducers
const store = createStore(
  // combine reducers
  // {}
  // math: math reducer
  // user: user reducer
  
  //combineReducers({math: mathReducer, user: userReducer}),
  combineReducers({mathReducer, userReducer}),
  
  // just pass func name
  //applyMiddleware(myLogger)
  // here we execute the func, why?
  applyMiddleware(logger())
);


// when getting getState(), it will return all reducers.
// because it is sub, so every time, there is action
// it will react
// store
// subscribe
// () => {}
// console.log(x, y);
// store
// .getState();
store.subscribe(() => {
  //console.log("store updated!", store.getState());
});


// store
// dispatch
// type: add
// payload: 10
store.dispatch({
  type: "ADD",
  payload: 10
});

store.dispatch({
  type: "ADD",
  payload: 10
});

store.dispatch({
  type: "ADD",
  payload: 10
});

store.dispatch({
  type: "SET_AGE",
  payload: 40
});

// render
// provider
// pass store to provider
// window
// document
// get element by id
// app
// store has 2 reducers and middle wares
// reducers has a key called user
render(
  <Provider store={store}>
    <App />
  </Provider>, 
  window.document.getElementById('app'));

