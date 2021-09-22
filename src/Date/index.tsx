
import moment from 'moment';
import { Form } from '../';
import React, { useState } from 'react';

// ui date
const DashupUIDate = (props = {}) => {
  // week days
  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const typesOfHour = ['am', 'pm'];
  const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  // date
  const date = props.date || new Date();

  // set date
  const setDate = (d) => {
    // check change
    if (props.onChange) props.onChange(d);
  };

  // get day rows
  const getDayRows = () => {
    // get days in month
    const days = [];
    const inMonth = moment(date).daysInMonth();

    // shift
    for (let i = 1; i <= inMonth; i++) {
      // add day
      days.push({
        day    : moment(`${date.getFullYear()}-${date.getMonth() + 1}-${i}`).format('dddd'),
        date   : moment(`${date.getFullYear()}-${date.getMonth() + 1}-${i}`).toDate(),
        number : i,
      });
    }

    // add days as disabled before SOM
    while (days[0].day.toLowerCase() !== 'monday') {
      // get previous day
      const prev = moment(days[0].date).subtract(1, 'day');

      // unshift days
      days.unshift({
        day     : prev.format('dddd'),
        date    : prev.toDate(),
        number  : prev.toDate().getDate(),
        disable : true,
      });
    }

    // add days as disabled after EOM
    while (days[days.length - 1].day.toLowerCase() !== 'sunday') {
      // get previous day
      const next = moment(days[days.length - 1].date).add(1, 'day');

      // unshift days
      days.push({
        day     : next.format('dddd'),
        date    : next.toDate(),
        number  : next.toDate().getDate(),
        disable : true,
      });
    }

    // chunk into weeks
    const weeks = Array(Math.ceil(days.length / 7)).fill().map((_, i) => {
      // set weeks
      return days.slice(i * 7, i * 7 + 7);
    });
    
    // return weeks
    return weeks;
  };

  // get years
  const getYears = () => {
    // get full year
    const year = parseInt(date.getFullYear()) - 100;

    // loop years
    const years = [];

    // push years
    for (let base = year; base < year + 200; base++) {
      years.push(base);
    }

    // return years
    return years;
  };

  // on date
  const onDate = (e, d) => {
    // prevent default
    e.preventDefault();
    e.stopPropagation();
    
    // set date
    setDate(moment(date).set({
      date  : d.getDate(),
      month : d.getMonth(),
    }).toDate());
  };

  // on prev month
  const onPrev = (e) => {
    // prevent default
    e.preventDefault();
    e.stopPropagation();

    // set date
    setDate(moment(date).subtract(1, 'month').toDate());
  };

  // on next month
  const onNext = (e) => {
    // prevent default
    e.preventDefault();
    e.stopPropagation();

    // set date
    setDate(moment(date).add(1, 'month').toDate());
  };

  // on year
  const onYear = (e) => {
    // prevent default
    e.preventDefault();
    e.stopPropagation();

    // set date
    setDate(moment(date).set('year', e.target.value).toDate());
  };

  // on month
  const onMonth = (e) => {
    // prevent default
    e.preventDefault();
    e.stopPropagation();

    // set date
    setDate(moment(date).set('month', e.target.value).toDate());
  };

  // on hour
  const onHour = (e) => {
    // pm
    const pm = moment(date).format('a') === 'pm';

    // hour
    let hour = pm ? (parseInt(e.target.value) + 12) : parseInt(e.target.value);

    // check pm
    if (pm && hour === 24) hour = 12;
    if (!pm && hour === 12) hour = 0;

    // prevent default
    setDate(moment(date).set({
      date : date.getDate(),
      hour : hour,
    }).toDate());
  };

  // on hour
  const onMinute = (e) => {
    // prevent default
    setDate(moment(date).set({
      minute : parseInt(e.target.value),
    }).toDate());
  };

  // on hour
  const onType = (e) => {
    // prevent default
    e.preventDefault();
    e.stopPropagation();

    // check pm
    const pm = e.target.value === 'pm';

    // hour
    const hour = parseInt(moment(date).format('kk'));

    // value
    const value = pm ? (hour <= 12 ? hour + 12 : hour) : (hour >= 12 ? hour - 12 : hour);

    // prevent default
    setDate(moment(date).set({
      hour : value === 24 ? 0 : value,
    }).toDate());
  };

  // return jsx
  return (
    <div>
      <div className="d-flex flex-row">
        <button className="btn btn-sm btn-light me-2" onClick={ (e) => onPrev(e) }>
          <i className="fa fa-arrow-left" />
        </button>
        <div className="flex-1 me-1">
          <Form.Select onClick={ (e) => e.stopPropagation() } value={ date.getMonth() } onChange={ (e) => onMonth(e) }>
            { monthsOfYear.map((name, month) => {
              // return jsx
              return (
                <option
                  key={ `year-${month}` }
                  value={ month }
                >
                  { name }
                </option>
              );
            }) }
          </Form.Select>
        </div>
        <div className="flex-1 ms-1">
          <Form.Select onClick={ (e) => e.stopPropagation() } value={ date.getFullYear() } onChange={ (e) => onYear(e) }>
            { getYears(date).map((year, i) => {
              // return jsx
              return (
                <option
                  key={ `year-${year}` }
                  value={ year }
                >
                  { year }
                </option>
              );
            }) }
          </Form.Select>
        </div>
        <button className="btn btn-sm btn-light ms-2" onClick={ (e) => onNext(e) }>
          <i className="fa fa-arrow-right" />
        </button>
      </div>
      <table className="table table-sm m-0">
        <thead>
          <tr>
            { weekDays.map((day) => {
              // return jsx
              return (
                <th key={ `th-${day}`.toLowerCase() } className="p-2">
                  <b>{ day }</b>
                </th>
              );
            }) }
          </tr>
        </thead>
        <tbody>
          { getDayRows().map((row, i) => {
            // return jsx
            return (
              <tr key={ `row-${i}` }>
                { row.map((day, a) => {
                  // return jsx
                  return (
                    <td key={ `row-${i}-${day.number}` } className="p-0">
                      <button
                        className={ `btn btn-sm w-100 btn-${
                          moment(date).startOf('day').toDate().getTime() === moment(day.date).startOf('day').toDate().getTime() ? 'primary' : (
                            moment(day.date).startOf('day').toDate().getTime() === moment().startOf('day').toDate().getTime() ? 'light text-bold text-primary' : 'light'
                          )
                        } p-2${
                          day.disable ? ' text-muted' : ''
                        }` }
                        onClick={ (e) => onDate(e, day.date) }
                      >
                        { day.number }
                      </button>
                    </td>
                  );
                }) }
              </tr>
            );
          }) }
          <tr></tr>
        </tbody>
      </table>
      { !!props.time && (
        <div className="d-flex flex-row align-items-center mt-3">
          <div className="flex-2 me-1">
            <Form.Control type="number" min="1" max="12" value={ moment(date).format('hh') } onChange={ (e) => onHour(e) } />
          </div>
          <div className="mx-1">
            :
          </div>
          <div className="flex-2 ms-1">
            <Form.Control type="number" min="0" max="59" value={ moment(date).format('mm') } onChange={ (e) => onMinute(e) } />
          </div>
          <div className="flex-1 ms-1">
            <Form.Select onClick={ (e) => e.stopPropagation() } value={ moment(date).format('a') } onChange={ (e) => onType(e) }>
              { typesOfHour.map((type) => {
                // return jsx
                return (
                  <option
                    key={ `type-${type}` }
                    value={ type }
                  >
                    { type }
                  </option>
                );
              }) }
            </Form.Select>
          </div>
        </div>
      )}
    </div>
  );
};

// export date
export default DashupUIDate;