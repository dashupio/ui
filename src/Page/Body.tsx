// let context
let DashupContext = null;

// create menu component
const DashupUIPageBody = (props = {}) => {

  // return JSX
  return props.children;
};

// export default page menu
export default (ctx) => {
  // use context
  DashupContext = ctx;

  // return actual component
  return DashupUIPageBody;
};