// import logic
import React from 'react';
import Handlebars from './Handlebars';

// template cache
const templates = {};

// create dashup ui
const DashupUIHbs = (props = {}) => {
  // create template
  if (!templates[props.template]) templates[props.template] = Handlebars.compile(props.template || '');

  // try/catch
  let html = 'N/A';

  // created
  try {
    // run template
    html = templates[props.template]({
      ...(props.data || {}),
      ...(props.item ? props.item.get() : {}),
    });
  } catch (e) {}

  // return jsx
  return props.isInline ? (
    <span dangerouslySetInnerHTML={ { __html : html } } />
  ) : (
    <div dangerouslySetInnerHTML={ { __html : html } } />
  );
};

// dashup ui hbs
DashupUIHbs.Handlebars = Handlebars;

// return logic
export default DashupUIHbs;
