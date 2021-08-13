
// regenerator
import '@babel/polyfill';

// import default modules
import moment from 'moment';
import prettyMs from 'pretty-ms';
import reactDOM from 'react-dom';
import handlebars from 'handlebars';
import dashupCore from '@dashup/core';
import ReactSelect from 'react-select';
import * as dashupUI from '@dashup/ui';
import ReactSortable from 'react-sortablejs';
import SimplebarReact from 'simplebar-react';
import ReactSelectAsync from 'react-select/async';
import HandlebarsHelpers from 'handlebars-helpers';
import * as ReactBootstrap from 'react-bootstrap';

// view
import View from '@dashup/view';

// set cache
View.setDefaults({
  moment,
  handlebars,
  'pretty-ms'          : prettyMs,
  'react-dom'          : reactDOM,
  '@dashup/ui'         : dashupUI,
  '@dashup/core'       : dashupCore,
  'react-select'       : ReactSelect,
  'react-bootstrap'    : ReactBootstrap,
  'simplebar-react'    : SimplebarReact,
  'react-sortablejs'   : ReactSortable,
  'react-select/async' : ReactSelectAsync,
  'handlebars-helpers' : HandlebarsHelpers,
});

// create library
import Hbs from './Hbs';
import Date from './Date';
import Page from './Page';
import Grid from './Grid';
import Card from './Card';
import Chat from './Chat';
import Form from './Form';
import Color from './Color';
import Chart from './Chart';
import Block from './Block';
import Query from './Query';
import colors from './colors';
import Select from './Select';
import Permission from './Permission';

// export page
export {
  Hbs,
  Page,
  View,
  Chat,
  Grid,
  Card,
  Form,
  Date,
  Color,
  Chart,
  Block,
  Query,
  Select,
  Permission,

  colors,
};