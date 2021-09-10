
// import dependencies
import React from 'react';

// let context
let DashupContext = null;

// create menu component
const DashupUIPageBody = (props = {}) => {

  // return JSX
  return (
    <DashupContext.Consumer>
      { (data) => {
        // no fit
        const type = data.type || props.type;
        const noFit = data.noFit || props.noFit;
        const centered = data.centered || props.centered;

        // return jsx
        return (
          <div className={ `page-body body-${type || 'normal'} d-flex flex-1${noFit ? '' : '  fit-content'}` }>
            <div className={ `d-flex ${noFit ? 'flex-1' : 'w-100 h-100'}${centered ? ' d-flex align-items-center' : ''}` }>
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
      