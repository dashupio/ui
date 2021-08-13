
// import dependencies
import React from 'react';

// let context
let DashupContext = null;

// create menu component
const DashupUIPageBody = (props = {}) => {

  // return JSX
  return (
    <DashupContext.Consumer>
      { ({ type, centered }) => {
        return (
          <div className={ `page-body body-${type} d-flex flex-1 fit-content` }>
            <div className={ `d-flex w-100 h-100${centered ? ' d-flex align-items-center' : ''}` }>
              { centered ? (
                <div className="w-100">
                  { props.children }
                </div>
              ) : props.children }
            </div>
          </div>
        );
      } }
    </DashupContext.Consumer>
  );
};

// export default page menu
export default (ctx) => {
  // use context
  DashupContext = ctx;

  // return actual component
  return DashupUIPageBody;
};
      