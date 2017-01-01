// import
// react
// from react
import React from "react";

// export
// const
// main
// =
// (props)
// (props) => {}
export const Main = (props) => {
  // return ();
  // div
  // div class name row
  // div class name col-xs-12
  // main page title
  // there is a button
  // on click
  // {}
  // props above
  // props.changeUsername(xxx)
  return (
    <div>
      <div className="row">
        <div className="col-xs-12">
          <h1>The Main Page</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <button
              className="btn btn-primary"
              onClick={() => props.changeUsername('Anna')}>Change the Username</button>
        </div>
      </div>
    </div>
  );
}
