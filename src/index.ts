
// regenerator
import '@babel/polyfill';

// import default modules
import moment from 'moment';
import prettyMs from 'pretty-ms';
import reactDOM from 'react-dom';
import handlebars from 'handlebars';
import dashupCore from '@dashup/core';
import * as dashupUI from '@dashup/ui';
import ReactSortable from 'react-sortablejs';
import SimplebarReact from 'simplebar-react';
import InfiniteScroll from 'react-infinite-scroll-component';
import HandlebarsHelpers from 'handlebars-helpers';

// view
import View from '@dashup/view';

// set cache
View.setDefaults({
  moment,
  handlebars,
  'pretty-ms'                       : prettyMs,
  'react-dom'                       : reactDOM,
  '@dashup/ui'                      : dashupUI,
  '@dashup/core'                    : dashupCore,
  'simplebar-react'                 : SimplebarReact,
  'react-sortablejs'                : ReactSortable,
  'handlebars-helpers'              : HandlebarsHelpers,
  'react-infinite-scroll-component' : InfiniteScroll,
});

// create library
import Hbs from './Hbs';
import Page from './Page';
import Icon from './Icon';
import Chat from './Chat';
import Form from './Form';
import Item from './Item';
import Modal from './Modal';
import Color from './Color';
import Chart from './Chart';
import Block from './Block';
import Query from './Query';
import Avatar from './Avatar';
import colors from './colors';
import IconPicker from './IconPicker';
import Permission from './Permission';
import AdapterMoment from '@mui/lab/AdapterMoment';

// hooks
import useCache from './hooks/useCache';

// utilities
import cacheUtility from './utilities/cache';

// export all mui logic
export * from '@mui/material';

// license
import { LicenseInfo } from '@mui/x-data-grid-pro';

// do license
LicenseInfo.setLicenseKey(
  '85d894fd9df3d68884c23e17ff9072d0T1JERVI6MzEwMjAsRVhQSVJZPTE2NjU5ODY1OTYwMDAsS0VZVkVSU0lPTj0x',
);

// export mui extra
export { withStyles } from '@mui/styles';
export { alpha, styled, useTheme } from '@mui/material/styles';
export { DataGridPro as DataGrid, GridActionsCellItem, GridColumnMenuContainer, SortGridMenuItems } from '@mui/x-data-grid-pro';
export { TabList, TabPanel, TabContext, LocalizationProvider, TimePicker, DatePicker, DateTimePicker, LoadingButton } from '@mui/lab';

// exporting
export {
  Hbs,
  Page,
  Icon,
  Item,
  View,
  Chat,
  Form,
  Modal,
  Color,
  Chart,
  Block,
  Query,
  Avatar,
  IconPicker,
  Permission,

  AdapterMoment,

  // hooks
  useCache,

  // utilites
  cacheUtility as cache,

  colors,
};