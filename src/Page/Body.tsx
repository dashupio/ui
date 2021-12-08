
// import react
import React from 'react';
import { Alert } from '../';

// let context
let DashupContext = null;

// create menu component
const DashupUIPageBody = (props = {}) => {

  // return JSX
  return (
    <DashupContext.Consumer>
      { (data) => {
        // check render body
        return !data.missingRequire.length ? props.children : (
          data.missingRequire.map(({ key, label, variant = 'info' }) => {
            // return jsx
            return (
              <Alert severity={ variant } onClick={ () => data.onConfig() } key={ `missing-${key}` } sx={ {
                mb     : 2,
                cursor : 'pointer',
              } }>
                Click here to configure the <b>{ label }</b> for this page.
              </Alert>
            );
          })
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