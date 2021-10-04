
import Query from 'query';
import dotProp from 'dot-prop';
import React, { useState, useEffect } from 'react';
import { Hbs, View, Box, ToolTip, Icon, IconButton, Button, Stack } from '../';

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
    <Box
      sx={ {
        width    : props.col ? 'auto' : '100%',
        display  : isViewOnly(props.clean || {}) && !props.updating ? 'none' : 'block',
        opacity  : isViewOnly(props.clean || {}) ? .5 : 1,
        position : 'relative',

        '&:hover .updating' : {
          display : 'flex',
        }
      } }
      data-field={ props.field.uuid }
      data-type={ props.field.type }
      id={ `field-${props.field.uuid}${props.iKey ? `-${props.iKey}` : '' }` }
    >
      { props.updating && (
        <Box
          sx={ {
            width         : '100%',
            bottom        : '100%',
            display       : 'none',
            position      : 'absolute',
            alignItems    : 'center',
            flexDirection : 'row'
          } }
          className="updating"
        >
          <Button size="small" variant="contained" color="primary">
            { struct.title } Field
          </Button>

          <Stack direction="row" spacing={ 1 } sx={ { ml : 'auto', mr : 2 } }>
            <ToolTip title={ props.field.col ? 'Expand Field' : 'Compress Field' }>
              <IconButton size="small" onClick={ (e) => onCompress(e) } color="primary">
                <i className={ `fa ${props.field.col ? 'fa-expand-wide' : 'fa-compress-wide'}` } />
              </IconButton>
            </ToolTip>
            <ToolTip title={ props.field.break ? 'Remove Break after' : 'Add Break after' }>
              <IconButton size="small" onClick={ (e) => onBreak(e) } color="primary">
                <i className={ `fa ${props.field.break ? 'fa-file' : 'fa-page-break'}` } />
              </IconButton>
            </ToolTip>
            <ToolTip title="Move Field">
              <IconButton size="small" onClick={ (e) => onBreak(e) } color="primary" className="moves">
                <i className="fa fa-arrows-alt" />
              </IconButton>
            </ToolTip>
            <ToolTip title="Field Config">
              <IconButton size="small" onClick={ (e) => props.onConfig(props.field) } color="primary">
                <i className="fa fa-ellipsis-h" />
              </IconButton>
            </ToolTip>
            <ToolTip title="Remove Field">
              <IconButton size="small" onClick={ (e) => props.onRemove(props.field) } color="error">
                <i className="fa fa-trash" />
              </IconButton>
            </ToolTip>
          </Stack>
        </Box>
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
    </Box>
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