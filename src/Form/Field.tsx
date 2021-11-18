
import Query from 'query';
import dotProp from 'dot-prop';
import React, { useState, useEffect, useCallback } from 'react';
import { Icon, Hbs, View, Box, Tooltip, useTheme, ToggleButtonGroup, ToggleButton, Stack, CircularProgress } from '../';

// let context
let DashupUIContext = null;

// create dashup grid body
const DashupUIFormField = (props = {}) => {
  // theme
  const theme = useTheme();
  
  // get field struct
  const struct = props.getFieldStruct(props.field.type);

  // clean data
  const cleanQuery = useCallback((obj = {}) => {
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
  }, [JSON.stringify(props.clean)]);

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
  const isViewOnly = useCallback((clean) => {
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
  }, [props.field.viewOnly, JSON.stringify(props.clean)]);

  // is visible
  const isReadOnly = useCallback((clean) => {
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
  }, [props.field.readOnly, JSON.stringify(props.clean)]);

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

  // button sx
  const buttonSx = {
    paddingLeft : 1,
    paddingRight : 1,
  };
        
  // return jsx
  return !struct ? null : (
    <Box
      sx={ {
        width    : props.col ? 'auto' : '100%',
        display  : isViewOnly(props.clean || {}) && !props.updating ? 'none' : 'block',
        position : 'relative',

        '&:hover > .updating' : {
          display : 'flex',
        }
      } }
      data-field={ props.field.uuid }
      data-type={ props.field.type }
      id={ `field-${props.field.uuid}${props.iKey ? `-${props.iKey}` : '' }` }
    >
      { props.updating && (
        <>
          <Box sx={ {
            top             : 2,
            left            : -5,
            right           : -5,
            bottom          : -1,
            zIndex          : 0,
            display         : 'none',
            opacity         : 0.25,
            position        : 'absolute',
            borderRadius    : 2,
            backgroundColor : 'primary.main',
          } } className="updating" />
          <Box
            sx={ {
              right           : 2,
              zIndex          : 1,
              bottom          : '100%',
              padding         : 1,
              display         : 'none',
              position        : 'absolute',
              alignItems      : 'center',
              borderRadius    : 2,
              flexDirection   : 'row',
              justifyContent  : 'end',
              backgroundColor : theme.palette.mode === 'dark' ? 'darker.main' : 'lighter.main',
            } }
            className="updating"
          >
            <Stack direction="row" spacing={ 1 }>
              <ToggleButton selected color="primary" size="small" value="title" sx={ {
                paddingLeft  : 3,
                paddingRight : 3,
              } }>
                { struct.title } Field
              </ToggleButton>

              <ToggleButtonGroup size="small" color="primary" value={ [
                ...(props.field.col ? ['compress'] : []),
                ...(props.field.break ? ['break'] : []),
              ] }>
                <Tooltip title={ props.field.col ? 'Expand Field' : 'Compress Field' }>
                  <ToggleButton value="compress" onClick={ (e) => onCompress(e) } sx={ buttonSx }>
                    { props.field.col ? (
                      <Icon type="fas" icon="window-maximize" fontSize="small" />
                    ) : (
                      <Icon type="fas" icon="window-minimize" fontSize="small" />
                    ) }
                  </ToggleButton>
                </Tooltip>
                <Tooltip title={ props.field.break ? 'Remove Break after' : 'Add Break after' }>
                  <ToggleButton value="break" onClick={ (e) => onBreak(e) } sx={ buttonSx }>
                    <Icon type="fas" icon="line-height" fontSize="small" />
                  </ToggleButton>
                </Tooltip>
                <Tooltip title="Move Field">
                  <ToggleButton value="move" onClick={ (e) => onBreak(e) } className="moves" sx={ buttonSx }>
                    <Icon type="fas" icon="grip-vertical" fontSize="small" />
                  </ToggleButton>
                </Tooltip>
                <Tooltip title="Field Config">
                  <ToggleButton value="config" onClick={ (e) => props.onConfig(props.field) } sx={ buttonSx }>
                    <Icon type="fas" icon="ellipsis-h" fontSize="small" />
                  </ToggleButton>
                </Tooltip>
              </ToggleButtonGroup>
              
              <Tooltip title="Remove Field">
                <ToggleButton value="trash" size="small" onClick={ (e) => props.onRemove(props.field) } selected color="error" sx={ buttonSx }>
                  <Icon type="fas" icon="trash" fontSize="small" />
                </ToggleButton>
              </Tooltip>
            </Stack>
          </Box>
        </>
      ) }

      { loading ? (
        <CircularProgress />
      ) : (
        <Box
          sx={ {
            opacity : isViewOnly(props.clean || {}) ? .5 : 1,
          } }
        >
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
        </Box>
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