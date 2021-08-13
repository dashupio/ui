// import dependencies
import moment from 'moment';
import pretty from 'pretty-ms';
import Handlebars from 'handlebars';
import HandlebarsHelpers from 'handlebars-helpers';

// register helper
Handlebars.registerHelper(HandlebarsHelpers());
Handlebars.registerHelper('ms', (amount, extra, options) => {
  // check now
  amount = parseInt(amount);

  // return formatted
  return pretty(amount);
});
Handlebars.registerHelper('age', (date, start, options) => {
  // date
  let from = new Date();

  // check options
  if (start instanceof Date) {
    from = start;
  }

  // return amount
  return moment(from).diff(date, 'years');
});
Handlebars.registerHelper('date', (date, fmt, options) => {
  // check now
  if (date === 'now') date = new Date();

  // check options
  if (typeof fmt !== 'string') {
    fmt = 'MMMM DD YYYY, LT';
    options = fmt;
  }

  // return formatted
  return moment(date).format(fmt);
});
Handlebars.registerHelper('timezone', (tz, options) => {
  // check now
  let date = new Date();

  // return formatted
  return moment(date).tz(tz).format('ha z');
});
Handlebars.registerHelper('since', (date, extra, options) => {
  // check now
  if (date === 'now') date = new Date();

  // check options
  if (typeof extra !== 'boolean') {
    extra = true;
    options = extra;
  }

  // return formatted
  return moment(date).fromNow(extra);
});
Handlebars.registerHelper('var', (varName, varValue, options) => {
  // set var
  options.data.root[varName] = varValue;
});

// export default
export default Handlebars;