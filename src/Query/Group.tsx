
// import dependencies
import React from 'react';

// import rule
import Rule from './Rule';
import Select from '../Select';

// create menu component
const DashupUIQueryGroup = (props = {}) => {
  // op
  const op = Object.keys(props.value || {})[0];

  // operator
  const setOperator = (val) => {
    // op
    const dv = props.value[op] || [];

    // check value
    props.setValue({
      [val] : dv,
    });
  };

  // set value
  const setValue = (i, val) => {
    // op
    const dv = (props.value[op] || []);

    // value
    dv[i] = val;

    // check value
    props.setValue({
      [op] : dv,
    });
  };

  // on remove
  const onRemove = (i) => {
    // op
    const dv = (props.value[op] || []);

    // remove
    dv.splice(i, 1);

    // remove
    props.setValue({
      [op] : dv,
    });
  };

  // return jsx
  return (
    <div className="dashup-query-group card mt-2">
      <div className="card-header p-2 d-flex">
        <button className="btn btn-white me-2">
          <i className="fa fa-fw fa-bars" />
        </button>
        <div className="d-inline-block me-auto select-inline">
          <Select
            value={ { value : props.operator, label : props.groups[props.operator].title } }
            options={ Object.keys(props.groups || {}).map((op, i) => {
              // return value
              return {
                label : props.groups[op].title,
                value : op,
              };
            }) }
            onChange={ (val) => setOperator(val?.value) }
          />
        </div>

        <button className="btn ms-auto btn-success" onClick={ (e) => !props.setValue({
          [op] : [...props.value[op], { $eq : {} }],
        }) && e.preventDefault() }>
          Add Rule
        </button>
        <button className="btn btn-danger ms-2" onClick={ (e) => !props.onRemove() && e.preventDefault() }>
          <i className="fa fa-fw fa-trash" />
        </button>
      </div>
      { !!(props.value[op] || []).length && (
        <div className="card-body p-2 pt-0">
          { (props.value[op] || []).map((val, i) => {
            // return jsx
            return (
              <div className="ms-3 rule-inner" key={ `rule-${i}` }>
                <Rule
                  page={ props.page }
                  value={ val }
                  fields={ props.fields }
                  groups={ props.groups }
                  dashup={ props.dashup }
                  onRemove={ () => onRemove(i) }
                  setValue={ (val) => setValue(i, val) }
                  operators={ props.operators }
                />
              </div>
            );
          }) }
        </div>
      ) }
    </div>
  );
};

// export default
export default DashupUIQueryGroup;