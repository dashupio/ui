

// import dependencies
import { TabContext, TabList, TabPanel } from '@mui/lab';
import React, { useRef, useState, useEffect } from 'react';
import { Modal, Icon, Query, Color, View, Box, Tab, FormGroup, FormControlLabel, Switch, Stack, Button, TextField } from '../';

// colors
import colors from '../colors';

// let context
let DashupContext = null;

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
};

// create menu component
const DashupUIFormConfig = (props = {}) => {
  // get struct
  const struct = props.getFieldStruct(props.field?.type);

  // tabs
  const [named] = useState(!!(props.field.name || '').length);
  const [tab, setTab] = useState('config');
  const [field, setData] = useState(props.field);
  const [color, setColor] = useState(false);
  const [loading, setLoading] = useState(!props.value && !!field?.default && struct?.data?.actions?.includes('sanitise'));
  const [defaultValue, setDefaultValue] = useState(struct?.data?.actions?.includes('sanitise') ? null : field?.default);

  // use ref
  const colorRef = useRef(null);
  const labelRef = useRef(null);

  // to label
  const toName = (text) => {
    // return cammelcase
    return text
      .replace(/[\W_]+/g, ' ') // remove non alpha numeric
      .replace(/^[0-9]+/g, '') // remove leadingnumbers
      .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
        // uppercase words
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, '') // remove spaces
  };

  // set field
  const setField = (field, key, value) => {
    // check object
    let obj = {[key]:value};

    // check type
    if (typeof key === 'object') obj = key;

    // set values
    Object.keys(obj).forEach((key) => {
      field[key] = obj[key];
    });

    // save
    setData({ ...field });

    // save
    debounce(props.setField, 200)(field, field);
  };

  // on label
  const onLabel = (e) => {
    // opts
    const opts = {
      label : e.target.value,
    };

    // name
    const name = toName(e.target.value);

    // if name includes
    if (!field.name || !named) {
      opts.name = name;
    }

    // set field
    setField(field, opts);
  };

  // on default
  const onDefault = async (val) => {
    // set default
    setDefaultValue(val);

    // check submit
    if (struct?.data?.actions?.includes('submit')) {
      // set value
      const { value } = await props.dashup.action({
        type   : 'field',
        page   : props.page.get('_id'),
        struct : struct?.type,
      }, 'submit', field, val);

      // set val
      val = value;
    }

    // set field
    setField(field, 'default', val);
  };

  // check default value
  useEffect(() => {
    // check struct actions
    if (typeof field?.default === 'undefined') return setLoading(false);
    if (!struct?.data?.actions?.includes('sanitise')) return setLoading(false);

    // loading
    setLoading(true);

    // load value
    props.dashup.action({
      type   : 'field',
      page   : props.page.get('_id'),
      struct : struct?.type,
    }, 'sanitise', field, field?.default).then((data) => {
      // check data
      if (!data || !data.sanitised) return setLoading(false);

      // set value
      setDefaultValue(data.sanitised);

      // loading default
      setLoading(false);
    });
  }, [field?.type, field?.uuid]);

  // use effect
  useEffect(() => {
    // use effect
    labelRef.current?.focus();
  }, []);

  // tabs
  const tabs = struct?.data?.tabs || ['config'];

  // return modal
  return !!(field && struct) && (
    <>
      <Modal
        show={ props.show }
        icon={ struct.icon || 'fa fa-align-justify' }
        title={ `${struct.title} Block` }
        dashup={ props.dashup }
        thread={ field.uuid }
        onClose={ props.onClose || props.onHide }
      >
        <Box pt={ 4 } pb={ 2 }>
          <Stack spacing={ 2 }>
            <Stack direction="row" spacing={ 2 }>
              <Button ref={ colorRef } variant="contained" onClick={ () => setColor(true) } sx={ {
                color           : field.color?.hex && theme.palette.getContrastText(field.color?.hex),
                backgroundColor : field.color?.hex,
              } }>
                <Icon type="fas" icon="tint" />
              </Button>
              <TextField
                ref={ labelRef }
                value={ field.label || '' }
                label="Label"
                onChange={ (e) => onLabel(e) }
                fullWidth
              />
              <TextField
                value={ field.name || '' }
                label="Name"
                onChange={ (e) => setField(field, 'name', toName(e.target.value), true) }
                fullWidth
              />
            </Stack>

            <TextField
              value={ field.placeholder || '' }
              label="Placeholder"
              fullWidth
              onChange={ (e) => setField(field, 'placeholder', e.target.value, true) }
            />

            <TextField
              value={ field.help || '' }
              label="Help Text"
              fullWidth
              onChange={ (e) => setField(field, 'help', e.target.value, true) }
            />
          </Stack>
        </Box>
        <Box flex={ 1 }>
          <TabContext value={ tab }>
            <Box sx={ { borderBottom : 1, borderColor : 'divider' } }>
              <TabList onChange={ (e, v) => setTab(v.toLowerCase()) }>
                { tabs.map((t, i) => {
                  // return jsx
                  return <Tab key={ `tab-${t}` } value={ t.toLowerCase() } label={ t } />;
                }) }
              </TabList>
            </Box>
            { tabs.map((t, i) => {
              // return jsx
              return (
                <TabPanel key={ `tab-${t}` } value={ t.toLowerCase() } sx={ {
                  paddingLeft  : 0,
                  paddingRight : 0,
                } }>
                  { `${t}`.toLowerCase() === 'display' && (
                    <>
                      <div className="mb-3">
                        <label className="form-label">
                          Input only When
                        </label>
                        <Query
                          isString

                          page={ props.page }
                          query={ field.readOnly }
                          dashup={ props.dashup }
                          fields={ props.fields }
                          onChange={ (val) => setField(field, 'readOnly', val) }
                          getFieldStruct={ props.getFieldStruct }
                          />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">
                          Display only When
                        </label>
                        <Query
                          isString

                          page={ props.page }
                          query={ field.viewOnly }
                          dashup={ props.dashup }
                          fields={ props.fields }
                          onChange={ (val) => setField(field, 'viewOnly', val) }
                          getFieldStruct={ props.getFieldStruct }
                          />
                      </div>
                    </> 
                  ) }
                  <View
                    { ...{
                      ...props,

                      type   : 'field',
                      view   : `${t}`.toLowerCase(),
                      struct : field?.type,
                    } }
                  />
                  { `${t}`.toLowerCase() === 'config' && (
                    <>
                      { !!struct?.data?.multiple && (
                        <FormGroup>
                          <FormControlLabel control={ <Switch defaultChecked={ !!field.multiple } onChange={ (e) => setField(field, 'multiple', e.target.checked, true) } /> } label="Allow Multiple" />
                        </FormGroup>
                      ) }
                      { !!struct?.data?.default && !loading && (
                        <View
                          { ...{
                            ...props,
        
                            type  : 'field',
                            view  : 'input',
                            field : {
                              ...field,
        
                              label : 'Default Value',
                            },
                            value  : defaultValue,
                            struct : field?.type,
        
                            onChange : (field, val) => onDefault(val),
                          } }
                        />
                      ) }
                    </>
                  ) }
                </TabPanel>
              );
            }) }
          </TabContext>
        </Box>
      </Modal>
      { !!color && <Color target={ colorRef } show color={ field.color?.hex } colors={ Object.values(colors) } onClose={ () => setColor(false) } onChange={ (hex) => setField(field, 'color', hex.hex === 'transparent' ? null : hex) } /> }
    </>
  );
};

// consumer wrapper
const DashupUIFormConfigWrap = (props = {}) => {

  // return JSX
  return (
    <DashupContext.Consumer>
      { (data) => (
        <DashupUIFormConfig { ...data } { ...props } />
      ) }
    </DashupContext.Consumer>
  );
};

// export default page menu
export default (ctx) => {
  // use context
  DashupContext = ctx;

  // return actual component
  return DashupUIFormConfigWrap;
};