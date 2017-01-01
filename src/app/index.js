// index.html only has the id to be inserted
// index.js is like index.html, it is doing the actual insert and render
import {render} from "react-dom";

// this guy is used by render(<App />, ...)
import React from "react";

// provider for what
// provider attached with store
// inside provider, there is the app
// then inject to app
import {Provider} from "react-redux";


// import
// App
import App from "./containers/App";

// import
// store
import store from "./store";

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

