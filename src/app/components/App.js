import React from "react";
import { connect} from "react-redux";

import { User } from './User';
import { Main } from './Main';

// easy
// export class xxxx
class App extends React.Component {
  // this.props.user
  // .user is userReducer
  // because userReducer returns state, so state.name
  // User has props.username from this.props.user.name
  // 
  // changeUsername is like a method
  // {}
  // pass fat arrow func
  // () => this.props.setName();
  // <Main> now has method
  // <User> now has props
  render() {
    return (
      <div className="container">
        <Main changeUsername={() => this.props.setName("Anna")}/>
        <User username={this.props.user.name} />
      </div>
    );
  }
}


// why state has userReducer and mathReducer?
// is it because store contains 2 reducers
// 
// map state to props
// =
// (state) => {}
// return {}
// user
// state.user
// math
// state.math
const mapStateToProps = (state) => {
  return {
    // .user is the key for useReducer
    // remember the reducer changes state and return it
    // it is called map state to props
    // so this.props.user
    user: state.userReducer,
    math: state.mathReducer
  };

};


// const
// map dispatch to props
// =
// (dispatch) => {}
const mapDispatchToProps = (dispatch) => {
  return {
    // set name, method
    // then reply on dispatch
    // to pass type
    // to pass value
    // (name) => {}
    setName: (name) => {
      // from above, dispatch
      dispatch({
        type: "SET_NAME",
        payload: name
      });
    } 
  
  };
};

// export
// default
// connect this will hook into app component
// the app component now has mapStateToProps and mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(App);
