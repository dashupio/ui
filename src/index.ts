
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
import Avatar from './Avatar';
import colors from './colors';
import Select from './Select';
import Permission from './Permission';
import AdapterMoment from '@mui/lab/AdapterMoment';

// import bootstrap logic
export * from 'react-bootstrap';
export {
  Box,
  Fab,
  Icon,
  Stack,
  Paper,
  Button,
  Tooltip as ToolTip,
  MenuItem,
  Container,
  Typography,
  IconButton,

  createTheme,
  ThemeProvider,
  
  TextField,
  InputAdornment,

  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText
} from '@mui/material';
export { styled } from '@mui/material/styles';
export { LocalizationProvider, TimePicker, DatePicker, DateTimePicker, LoadingButton } from '@mui/lab';

// exporting
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
  Avatar,
  Select,
  Permission,

  AdapterMoment,

  colors,
};