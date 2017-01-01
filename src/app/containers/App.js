// react
import React from "react";

// react redux
import { connect} from "react-redux";

// user view
import { User } from '../components/User';

// main view
import { Main } from '../components/Main';

// Action
import { setName } from '../actions/userActions';

// class
// app, for index.js, for index.html
// app extends
// React.Component
class App extends React.Component {
  // render() {}
  // main view
  // user view
  // for <Main>
  // Why need {fat arrow func}
  // changeUsername={() => xxxx}, because, not sure why, but every view child component uses it.
  render() {
    return (
      <div className="container">
        <Main changeUsername={() => this.props.setName("Anna")}/>
        <User username={this.props.user.name} />
      </div>
    );
  }
}


// map state to props
// this.props.user(state)
// this.props.user.name
// this.props.user.age
//
// this.props.math.result
// this.props.math.lastValues
const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
    math: state.mathReducer
  };

};


// map dispatch to props
// so this.props.setName(xxx)
// (dispatch) => {}
// call setName is actually SET_NAME with name
const mapDispatchToProps = (dispatch) => {
  return {
    // setName is key, linked to a func
    setName: (name) => {
      dispatch(setName(name));
    } 
  
  };
};

// export
// default
// connect this will hook into app component
// the app component now has mapStateToProps and mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(App);
