// it needs react, because 
// return (the view)
import React from "react";

// export
// const
// user =
// (props) => {}
export const User = (props) => {
  // return
  // title, then props.username
  return (
    <div>
      <div className="row">
        <div className="col-xs-12">
          <h1>The User Page</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <p>User Name: {props.username}</p>
        </div>
      </div>
    </div>
  );
}
