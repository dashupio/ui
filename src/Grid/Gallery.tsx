
import React from 'react';

// import card
import Card from '../Card';

// let context
let DashupUIContext = null;

// create dashup grid body
const DashupUIGridGallery = (props = {}) => {

  // get props
  const getProps = () => {
    // new props
    const newProps = { ...props };

    // delete
    delete newProps.item;
    delete newProps.view;
    delete newProps.struct;

    // return props
    return newProps;
  };

  // return JSX
  return (
    <DashupUIContext.Consumer>
      { ({ items = [], display, loading }) => {
        return (
          <div className="grid-body">
            { loading ? (
              <div className="card">
                <div className="card-body py-5 text-center">
                  <i className="fa fa-spinner fa-spin h1" />
                </div>
              </div>
            ) : (
              <div className="row">
                { items.map((item, i) => {
                  // return jsx
                  return (
                    <div key={ `card-${item.get('_id')}` } className={ props.column || 'col-3' }>
                      <Card template={ props.display || display } item={ item } { ...getProps() } />
                    </div>
                  );
                }) }
              </div>
            ) }
          </div>
        );
      } }
    </DashupUIContext.Consumer>
  );
};

// export default page menu
export default (ctx) => {
  // use context
  DashupUIContext = ctx;

  // return actual component
  return DashupUIGridGallery;
};