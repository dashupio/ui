
// import dependencies
import React, { useState } from 'react';

// local imports
import Rule from './Rule';
import Group from './Group';

// operators
const operators = {
  $eq : {
    fn     : 'eq',
    title  : 'Equals',
    symbol : '==',
  },
  $ne : {
    fn     : 'ne',
    title  : 'Doesn\'t Equal',
    symbol : '!=',
  },
  $gt : {
    fn     : 'gt',
    title  : 'Greater than',
    symbol : '>',
  },
  $gte : {
    fn     : 'gte',
    title  : 'Greater than or Equal to',
    symbol : '>=',
  },
  $in : {
    in     : 'in',
    title  : 'Includes',
    symbol : 'in', 
  },
  $nin : {
    fn     : 'nin',
    title  : 'Does not Include',
    symbol : 'nin', 
  },
  $lt : {
    fn     : 'lt',
    title  : 'Less than',
    symbol : '<',
  },
  $lte : {
    fn     : 'lte',
    title  : 'Less than or Equal to',
    symbol : '<=',
  },
  $inc : {
    fn     : 'inc',
    title  : 'Contains',
    symbol : '~=',
  },
  $ninc : {
    fn     : 'ninc',
    title  : 'Does not Contain',
    symbol : '!~=',
  },
  $exists : {
    fn     : 'exists',
    title  : 'Exists',
    symbol : '!!',
  },
};

// groups
const groups = {
  $and : {
    title  : 'And',
    symbol : 'and',
  },
  $or : {
    title  : 'Or',
    symbol : 'or',
  },
  $not : {
    title  : 'Not',
    symbol : 'not'
  },
  $nor : {
    title  : 'Not or',
    symbol : 'nor'
  },
};

// global timer
let timer;

// global debounce
const debounce = (func, timeout = 1000) => {

  // return debounced
  return (...args) => {
    // clear timeout previously
    clearTimeout(timer);

    // create new timeout
    timer = setTimeout(() => func(...args), timeout);
  };
}

// create menu component
const DashupUIQuery = (props = {}) => {
  // query
  let query = props.query || [];

  // check string
  if (props.isString) {
    try {
      query = JSON.parse(query);
    } catch (e) {}
  }

  // use state
  const [tree, setTree] = useState(query);

  // get fields
  const getFields = () => {
    // return nothing yet
    return (props.fields || []).reduce((accum, field) => {
      // struct
      const struct = props.getFieldStruct(field.type);

      // field
      accum[field.name || field.uuid] = {
        ...field,

        subs      : struct?.data?.subs || null,
        icon      : struct?.icon,
        operators : struct?.data?.operators || ['$eq'],
      };

      // return accum
      return accum;
    }, {});
  };

  // on change
  const onChange = (val) => {
    // update
    setTree([...val]);

    // run props
    debounce(props.onChange)(props.isString ? JSON.stringify(val) : val);
  };

  // on remove
  const onRemove = (i) => {
    // remove
    tree.splice(i, 1);

    // on change
    onChange(tree);
  };

  // set query
  const setValue = (i, value) => {
    // set value
    tree[i] = value;

    // on change
    onChange(tree);
  };

  // return jsx
  return (
    <div className="dashup-query mb-3">
      <div className="text-end">
        <div className="btn-group">
          <button className="btn btn-success" onClick={ (e) => !setTree([...tree, { $eq : {} }]) && e.preventDefault() }>
            Add Rule
          </button>
          <button className="btn btn-success" onClick={ (e) => !setTree([...tree, { $and : [] }]) && e.preventDefault() }>
            Add Group
          </button>
        </div>
      </div>
      { tree.map((group, i) => {
        // get key
        const key = Object.keys(group)[0];

        // get el
        let SubEl = Rule;

        // check includes
        if (groups[key]) {
          SubEl = Group;
        }

        // return jsx
        return (
          <React.Fragment key={ `query-${i}` }>
            <SubEl
              page={ props.page }
              value={ group }
              groups={ groups }
              fields={ getFields() }
              dashup={ props.dashup }
              operator={ key }
              onRemove={ () => onRemove(i) }
              setValue={ (val) => setValue(i, val) }
              operators={ operators }
            />
          </React.Fragment>
        )
      }) }
    </div>
  );
};

// rule/group
DashupUIQuery.Rule = Rule;
DashupUIQuery.Group = Group;

// export default
export default DashupUIQuery;