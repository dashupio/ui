
import Hbs from '../Hbs';
import View from '@dashup/view';
import Query from 'query';
import dotProp from 'dot-prop';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';

// let context
let DashupUIContext = null;

// create dashup grid body
const DashupUIFormField = (props = {}) => {
  // get field struct
  const struct = props.getFieldStruct(props.field.type);

  // clean data
  const cleanQuery = (obj = {}) => {
    // keys
    Object.keys(obj).map((key) => {
      // val
      const val = obj[key];

      // check key
      if (key.includes('.') && Array.isArray(dotProp.get(props.clean || {}, key.split('.')[0]))) {
        // make elemmatch
        return obj = {
          [key.split('.')[0]] : {
            $elemMatch : {
              [key.split('.')[1]] : val,
            }
          }
        };
      }

      // check key
      if (key === '$inc') {
        obj = {
          $likeI : val,
        };
      }
      if (key === '$eq') return obj = val;

      // check key
      if (val && typeof val === 'string' && val.includes('{{')) {
        try {
          // compile template
          const tmpl = Hbs.Handlebars.compile(val);

          // return actual value
          obj[key] = tmpl(props.clean || {});
        } catch (e) {
          // check value
          obj[key] = '';
        }
      }

      // check obj
      if (val && val instanceof Object) {
        obj[key] = cleanQuery(val);
      }
    });

    // return obj
    return obj;
  };

  // use state
  const [defaultValue, setDefaultValue] = useState(struct?.data?.actions?.includes('sanitise') ? null : cleanQuery({ val : props.field?.default }).val);
  const [loading, setLoading] = useState(!defaultValue && !props.value && !!props.field?.default && struct?.data?.actions?.includes('sanitise'));
  const [actualDefaultValue, setActualDefaultValue] = useState(struct?.data?.actions?.includes('sanitise') ? null : props.field?.default);

  // on break
  const onBreak = (e) => {
    // set field
    props.setField(props.field, 'break', !props.field.break);
  };

  // on compress
  const onCompress = (e) => {
    // set field
    props.setField(props.field, 'col', !props.field.col);
  };

  // is visible
  const isViewOnly = (clean) => {
    // check value
    if ((props.field.viewOnly || '[]').length <= 2) return false;

    // try/catch
    try {
      // match
      return !Query.query([clean], {
        $and : cleanQuery(JSON.parse(props.field.viewOnly)),
      }, Query.undot).length;
    } catch (e) {}

    // return true
    return true;
  };

  // is visible
  const isReadOnly = (clean) => {
    // check value
    if ((props.field.readOnly || '[]').length <= 2) return false;

    // try/catch
    try {
      // match
      return !Query.query([clean], {
        $and : cleanQuery(JSON.parse(props.field.readOnly)),
      }, Query.undot).length;
    } catch (e) {}
    
    // return true
    return true;
  };

  // check default value
  useEffect(() => {
    // check struct actions
    if (props.value) return;
    if (!actualDefaultValue) return;
    if (typeof props.field?.default === 'undefined') return;

    // new default value
    const newDefaultValue = cleanQuery({ val : actualDefaultValue }).val;


    // check value
    if (JSON.stringify(defaultValue) === JSON.stringify(newDefaultValue)) return;

    // set value
    setLoading(true);
    setDefaultValue(newDefaultValue);

    // timeout
    setTimeout(() => setLoading(false), 100);
  }, [JSON.stringify(props.clean)]);

  // check default value
  useEffect(() => {
    // check struct actions
    if (defaultValue) return setLoading(false);
    if (typeof props.field?.default === 'undefined') return setLoading(false);
    if (!struct?.data?.actions?.includes('sanitise')) return setLoading(false);

    // loading default
    setLoading(true);

    // load value
    props.dashup.action({
      type   : 'field',
      page   : props.page.get('_id'),
      struct : struct?.type,
    }, 'sanitise', props.field, props.field?.default).then((data) => {
      // check data
      if (!data || !data.sanitised) return setLoading(false);

      // set value
      setDefaultValue(cleanQuery({ val : data.sanitised }).val);
      setActualDefaultValue(data.sanitised);

      // loading default
      setLoading(false);
    });
  }, [props.field?.uuid]);
        
  // return jsx
  return !struct ? null : (
    <div className={ `dashup-field${isViewOnly(props.clean || {}) ? ' field-hidden' : ''}${props.updating ? ' field-updating' : ''}${props.field.col ? ' col' : ''}` } data-field={ props.field.uuid } data-type={ props.field.type } id={ `field-${props.field.uuid}${props.iKey ? `-${props.iKey}` : '' }` }>
      { props.updating && (
        <div className="field-hover">
          <div className="d-flex align-items-center">
            <div className="me-2">
              <div className="btn-group"> 
                <button className="btn btn-sm btn-info" onClick={ (e) => props.onConfig(props.field) }>
                  { struct.title } Field
                </button>
              </div>
            </div>
            <div className="ms-auto">
              <div className="btn-group">
                <OverlayTrigger
                  overlay={
                    <Tooltip>
                      { props.field.col ? 'Expand Field' : 'Compress Field' }
                    </Tooltip>
                  }
                  placement="top"
                >
                  <button className="btn btn-sm btn-primary" onClick={ (e) => onCompress(e) }>
                    <i className={ `fa ${props.field.col ? 'fa-expand-wide' : 'fa-compress-wide'}` } />
                  </button>
                </OverlayTrigger>
                <OverlayTrigger
                  overlay={
                    <Tooltip>
                      { props.field.break ? 'Remove Break after' : 'Add Break after' }
                    </Tooltip>
                  }
                  placement="top"
                >
                  <button className="btn btn-sm btn-primary" onClick={ (e) => onBreak(e) }>
                    <i className={ `fa ${props.field.break ? 'fa-file' : 'fa-page-break'}` } />
                  </button>
                </OverlayTrigger>
                <OverlayTrigger
                  overlay={
                    <Tooltip>
                      Move Field
                    </Tooltip>
                  }
                  placement="top"
                >
                  <span className="btn btn-sm btn-primary moves">
                    <i className="fa fa-arrows-alt" />
                  </span>
                </OverlayTrigger>
                <OverlayTrigger
                  overlay={
                    <Tooltip>
                      Field Config
                    </Tooltip>
                  }
                  placement="top"
                >
                  <button className="btn btn-sm btn-primary" onClick={ (e) => props.onConfig(props.field) }>
                    <i className="fa fa-ellipsis-h" />
                  </button>
                </OverlayTrigger>
                <OverlayTrigger
                  overlay={
                    <Tooltip>
                      Remove Field
                    </Tooltip>
                  }
                  placement="top"
                >
                  <button className="btn btn-sm btn-danger" onClick={ (e) => props.onRemove(props.field) }>
                    <i className="fa fa-trash" />
                  </button>
                </OverlayTrigger>
              </div>
            </div>
          </div>
        </div>
      ) }

      { loading ? (
        <div className="text-center py-3">
          <i className="fa fa-spinner fa-spin" />
        </div>
      ) : (
        <View
          { ...props }

          view="input"
          type="field"
          dashup={ props.dashup || props.dashup }
          struct={ props.field.type }

          field={ props.field }
          value={ props.value || defaultValue }

          onChange={ props.onChange || props.onChange }
          onConfig={ props.onConfig || props.onConfig }
          readOnly={ isReadOnly(props.clean || {}) }
          setPrevent={ props.setPrevent || props.setPrevent }
        />
      ) }
    </div>
  );
};

// consumer wrapper
const DashupUIFormFieldWrap = (props = {}) => {

  // return JSX
  return (
    <DashupUIContext.Consumer>
      { (data) => (
        <DashupUIFormField { ...data } { ...props } />
      ) }
    </DashupUIContext.Consumer>
  );
};

// export default page menu
export default (ctx) => {
  // use context
  DashupUIContext = ctx;

  // return actual component
  return DashupUIFormFieldWrap;
};