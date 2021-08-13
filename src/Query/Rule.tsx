
// import dependencies
import View from '@dashup/view';
import Select from '../Select';
import React, { useState } from 'react';

// create menu component
const DashupUIQueryRule = (props = {}) => {
  // key
  const [key, setKey] = useState(Object.keys(props.value)[0]);

  // get parts
  const op    = key && Object.keys(Object.values(props.value || {})[0])[0];
  const parts = key.split('..').join('.').split('.').filter((p) => p.length);

  // set value
  const onOp = (val) => {
    // data value
    const dataValue = ((props.value || {})[key] || {})[op] || null;

    // get current key
    props.setValue({
      [key] : {
        [val] : dataValue,
      },
    });
  };

  // on part
  const onPart = (i, key, sub) => {
    // set parts
    parts[i] = key;

    // sub
    if (sub) parts[i + 1] = sub;

    // new parts
    const newParts = parts.slice(0, i + (sub ? 2 : 1)).filter((p) => p && p.length);
    
    // data value
    const dataValue = (props.value || {})[key] || {
      $eq : null,
    };

    // check value
    setKey(newParts.join('.'));

    // get current key
    props.setValue({
      [newParts.join('.')] : dataValue,
    });
  };

  // on value
  const onValue = (val) => {
    // fix value
    if (val && val.id) val = val.id;
    if (val && typeof val.get === 'function') val = val.get('_id');
    if (Array.isArray(val)) val = val.map((v) => typeof v?.get === 'function' ? v.get('_id') : v?.id || v);
    if (!['$in', '$nin'].includes(op) && Array.isArray(val)) val = val[0];

    // data value
    props.setValue({
      [key] : {
        [op] : val,
      },
    });
  };

  // get bottom
  const getBottom = () => {
    // get last part
    let lastPart = parts[parts.length - 1];

    // previous last part
    if (!props.fields[lastPart]) {
      lastPart = parts[parts.length - 2]
    }

    // get field
    return props.fields[lastPart];
  };

  // get children
  const getChildren = (field) => {
    // return values
    return Object.values(props.fields).filter((f) => f.parent && field.uuid && f.parent === field.uuid);
  };

  // get sub
  const getSub = () => {
    // get bottom
    const field = getBottom();

    // bottom
    if (!field) return;

    // get subs
    const subs = field.subs || [];

    // find
    return subs.find((s) => s.key === parts[parts.length - 1]) || subs.find((s) => s.default);
  };

  // has subs
  const hasSubs = () => {
    // field
    const field = getBottom();
    
    // check field
    if (!field) return;

    // has subs
    return !!field.subs?.length;
  };

  // has children
  const hasChildren = () => {
    // field
    const field = getBottom();
    
    // check field
    if (!field) return;

    // children
    const children = getChildren(field);
    
    // return children
    return !!children.length;
  };

  /**
   * get opts
   */
  const getOps = () => {
    // get bottom
    const sub = getSub();

    // check sub
    if (sub) return sub.operators || [];

    // field
    const field = getBottom();

    // check field
    if (!field) return [];

    // operators
    return field.operators || [];
  };

  // return jsx
  return (
    <div className="card card-sm border-secondary mt-2">
      <div className="card-body p-2 d-flex align-items-center">
        <button className="btn btn-white me-2">
          <i className="fa fa-fw fa-bars" />
        </button>

        { parts.map((p, i) => {
          // get part field
          const prev  = i > 0 && props.fields[parts[i - 1]];
          const field = props.fields[p];

          // check field
          if (!field && i > 0) return null;

          // return jsx
          return (
            <div key={ `part-${i}` } className="d-inline-block me-2 select-inline">
              <Select
                value={ field ? {
                  value : field.name || field.uuid,
                  label : field.label,
                } : null }
                options={ Object.values(props.fields || {}).filter((f) => {
                  // check prev
                  if (prev) return f.parent === prev.uuid;
      
                  // root only
                  return (f.parent || 'root') === 'root';
                }).map((field) => {
                  // return value
                  return {
                    icon  : field.icon,
                    label : field.label,
                    value : field.name || field.uuid,
                  };
                }) }
                onChange={ (val) => onPart(i, val?.value) }
                placeholder="Select Field"
              />
            </div>
          );
        }) }

        { hasChildren() && (
          <div className="d-inline-block me-2 select-inline">
            <Select
              value={ null }
              options={ getChildren(getBottom()).map((field) => {
                // return value
                return {
                  icon  : field.icon,
                  label : field.label,
                  value : field.name || field.uuid,
                };
              }) }
              onChange={ (val) => {
                // check value
                const field = props.fields[val?.value];

                // field
                if (!field) return;

                // default sub
                const defaultSub = field.subs?.find((s) => s.default);

                // on part
                if (defaultSub) {
                  onPart(parts.length + 1, val?.value, defaultSub.key);
                } else {
                  onPart(parts.length, val?.value);
                }
              } }
              placeholder="Select Field"
            />
          </div>
        ) }

        { hasSubs() && (
          <div className="d-inline-block me-2 select-inline">
            <Select
              value={ getSub() }
              options={ getBottom().subs.map((sub) => {
                // return value
                return {
                  icon  : sub.icon,
                  label : sub.label,
                  value : sub.key,
                };
              }) }
              onChange={ (val) => onPart(parts.length - (getSub() && (getSub().key === parts[parts.length - 1]) ? 1 : 0), val?.value) }
              placeholder="Select Sub Field"
            />
          </div>
        ) }

        { !!getOps().length && (
          <div className="d-inline-block me-2 select-inline">
            <Select
              value={ op ? {
                value : op,
                label : props.operators[op]?.title,
              } : null }
              options={ Object.keys(props.operators || {}).map((key, i) => {
                // check null
                if (!getOps().includes(key)) return;

                // return value
                return {
                  label : props.operators[key].title,
                  value : key,
                };
              }).filter((o) => o) }
              onChange={ (val) => onOp(val?.value) }
              placeholder="Select Operator"
            />
          </div>
        ) }

        { !!(op && getBottom()) && (
          <div className="d-inline-block me-2 select-inline mw-25">
            <View
              view="input"
              type="field"
              page={ props.page }
              dashup={ props.dashup }
              struct={ op === '$exists' ? 'boolean' : (getSub()?.type || getBottom()?.type) }
              noLabel

              field={ {
                ...(getBottom()),
                ...(getSub() || {}),

                label    : getSub()?.label || getBottom()?.label,
                multiple : ['$in', '$nin'].includes(op),
              } }
              value={ ((props.value || {})[key] || {})[op] }

              onChange={ (f, val) => onValue(val) }
            />
          </div>
        ) }
        
        <button className="btn btn-danger ms-auto" onClick={ (e) => !props.onRemove() && e.preventDefault() }>
          <i className="fa fa-fw fa-trash" />
        </button>
      </div>
    </div>
  );
};

// export default
export default DashupUIQueryRule;