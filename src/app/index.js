/*
import React from "react";
import {render} from "react-dom";

import { User } from './components/User';
import { Main } from './components/Main';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "Max"
        };
    }

    changeUsername(newName) {
        this.setState({
            username: newName
        });
    }

    render() {
        return (
            <div className="container">
                <Main changeUsername={this.changeUsername.bind(this)}/>
                <User username={this.state.username}/>
            </div>
        );
    }
}

render(<App />, window.document.getElementById('app'));
*/

// import
// create store
// from
// redux
import { createStore } from "redux";

// what reducer does is
// get state and action -> state
// const
// reducer
// (state, action)
// =>
// {}
const reducer = (state, action) => {
  // switch
  // action.type
  switch(action.type) {
    // add
    // state == 1
    // state = 1 + 10 (payload)
    case "ADD":
      state = state + action.payload;
      break;
    
    // substract
    case "SUBSTRACT":
      state = state - action.payload;
      break;
  }

  // return new state
  return state;
}


// const
// store
// create store
// reducer
// state: 1
const store = createStore(reducer, 0);


// because it is sub, so every time, there is action
// it will react
// store
// subscribe
// () => {}
// console.log(x, y);
// store
// .getState();
store.subscribe(() => {
  console.log("store updated!", store.getState());
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
  type: "SUBSTRACT",
  payload: 10
});

