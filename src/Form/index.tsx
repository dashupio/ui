
// import dependencies
import clone from 'clone-deep';
import { Form } from 'react-bootstrap';
import { ReactSortable } from 'react-sortablejs';
import React, { useState, useEffect, createContext } from 'react';
import { Box, Fab, Button, ToolTip, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '../';

// import local modules
import Menu from './Menu';
import Field from './Field';
import onEnd from './drag';
import Config from './Config';

// create context
const DashupUIContext = createContext();

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
const DashupUIForm = (props = {}) => {
  // set saving
  const [saving, setSaving] = useState(false);
  const [config, setConfig] = useState(null);

  // clean data
  const cleanData = (obj = {}) => {
    // cleaned
    const cleanedObj = clone(obj);

    // keys
    Object.keys(cleanedObj).map((key) => {
      // val
      let val = cleanedObj[key];

      // fix value
      if (val && val.id) val = val.id;
      if (val && typeof val.get === 'function') val = val.get('_id');
      if (Array.isArray(val)) val = val.map((v) => typeof v?.get === 'function' ? v.get('_id') : (v?.id || v));

      // set value
      cleanedObj[key] = val;

      // check obj
      if (val && val instanceof Object && !(val instanceof Date)) {
        cleanedObj[key] = cleanData(val);
      }
    });

    // return obj
    return cleanedObj;
  };

  // get ctx
  const getCtx = () => {
    // return
    return {
      onConfig : setConfig,
      onSaving : setSaving,

      // variables
      id        : props.id,
      data      : props.data,
      page      : props.page,
      clean     : props.clean || cleanData(props.data),
      fields    : props.fields,
      dashup    : props.dashup,
      updating  : props.updating,
      available : props.available,

      setFields      : props.setFields,
      setPrevent     : props.setPrevent,
      getFieldStruct : props.getFieldStruct,
    };
  };

  // create context
  const [ctx, setCtx] = useState(getCtx());
  const [menu, setMenu] = useState(null);
  const [remove, setRemove] = useState(null);

  // use effect
  useEffect(() => {
    setCtx(getCtx());
  }, [props.updating, props.fields, props.data, JSON.stringify(props.clean)]);

  // set page
  const setField = async (field, key, value, prevent) => {
    // updates
    let updates = {
      [key] : value,
    };

    // find field
    const actualField = (props.fields || []).find((f) => f.uuid === field.uuid);

    // fix obj
    if (typeof key === 'object') {
      updates = key;
      prevent = value;
    }

    // loading
    setSaving(true);

    // set to field
    Object.keys(updates).forEach((k) => {
      actualField[k] = updates[k];
    });
    
    // set page
    await props.setFields(props.fields || [], prevent);

    // loading
    setSaving(false);
  };

  // on change
  const onChange = (field, value) => {
    // set value
    props.data[field.name || field.uuid] = value;

    // on data
    debounce(props.setData, 200)(props.data);
  };

  // on remove
  const onRemove = async (field) => {
    // new columns
    const newFields = (props.fields || []).filter((f) => f.uuid !== field.uuid);

    // loading
    setRemove(null);
    setSaving(true);
    
    // set page
    await props.setFields(newFields);

    // loading
    setSaving(false);
  };

  // on hide config
  const onHideConfig = async () => {
    // set config
    setConfig(null);
    setSaving(true);
    
    // set page
    await props.setFields([...props.fields]);

    // loading
    setSaving(false);
  };

  // get fields
  const getChildren = (parent = 'root') => {
    // return filtered
    return (props.fields || []).filter((f) => (f.parent || 'root') === parent).sort((a, b) => {
      // return ordered
      const oA = a.order || 0;
      const bA = b.order || 0;

      // return order
      if (oA > bA) return 1;
      if (bA > oA) return -1;
      return 0;
    });
  };

  // remove jsx
  const removeJsx = (
    <Dialog open={ !!remove } onClose={ () => setRemove(false) }>
      <DialogTitle>
        Removing <b>{ remove?.label }</b>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to remove <b>{ remove?.label || remove?.name }</b>?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={ () => setRemove(false) }>Cancel</Button>
        <Button variant="contained" color="error" onClick={ (e) => onRemove(remove) }>Confirm</Button>
      </DialogActions>
    </Dialog>
  );

  // check wrapper
  const fieldsJsx = getChildren(props.parent).map((field, i) => {
    // return jsx
    return (
      <React.Fragment key={ field.uuid }>
        <DashupUIForm.Field
          iKey={ props.iKey }
          field={ field }
          value={ (ctx.data || {})[field.name || field.uuid] }
          dashup={ props.dashup }
          onConfig={ setConfig }
          onRemove={ setRemove }
          setField={ setField }
          onChange={ onChange }
          getForms={ props.getForms }
          getField={ props.getField }
          getFields={ props.getFields }
          />
        { field.break && <Box sx={ { width : '100%' } } /> }
      </React.Fragment>
    );
  });

  // form wrapper
  const formJsx = props.updating ? (
    <ReactSortable
      id={ `${props.id}-${props.parent || 'root'}` }
      list={ getChildren(props.parent) }
      group={ props.id }
      onEnd={ (e) => onEnd(e, props.fields, props.setFields, setSaving, setConfig, setMenu) }
      handle=".moves"
      setList={ () => {} }
      className={ `dashup-form${getChildren(props.parent).length ? '' : ' py-3'}` }
      swapThreshold={ 5 }
    >
      { fieldsJsx }
    </ReactSortable>
  ) : (
    <div className="dashup-form">
      { fieldsJsx }
    </div>
  );

  // return jsx
  return (
    <DashupUIContext.Provider value={ ctx }>
      { props.adds !== false && props.updating && (
        <ToolTip title="Add Field">
          <Fab onClick={ (e) => setMenu(true) } color="primary" sx={ {
            top : 0,
            left : '50%',
            zIndex : 10,
            position : 'absolute',
            transform : 'translateX(-50%) translateY(-50%)',
          } }>
            <i className="fa fa-plus" />
          </Fab>
        </ToolTip>
      ) }
      
      { !props.action ? formJsx : (
        <form action={ props.action }>
          { formJsx }
        </form>
      ) }
      
      { menu && <DashupUIForm.Menu show onHide={ () => setMenu(null) } setField={ setField } /> }
      { config && <DashupUIForm.Config
        show={ !!config }
        field={ config }
        fields={ props.fields }
        onHide={ () => onHideConfig() }
        getForms={ props.getForms }
        getField={ props.getField }
        setField={ setField }
        getFields={ props.getFields }
        getChildren={ getChildren }
        />
      }
      { removeJsx }

      { props.adds !== false && props.updating && (
        <ToolTip title="Add Field">
          <Fab onClick={ (e) => setMenu(true) } color="primary" sx={ {
            left : '50%',
            bottom : 0,
            zIndex : 10,
            position : 'absolute',
            transform : 'translateX(-50%) translateY(50%)',
          } }>
            <i className="fa fa-plus" />
          </Fab>
        </ToolTip>
      ) }
    </DashupUIContext.Provider>
  );
};

// export bootstrap form
Object.keys(Form).forEach((key) => {
  DashupUIForm[key] = Form[key];
});

// create field
DashupUIForm.Menu = Menu(DashupUIContext);
DashupUIForm.Field = Field(DashupUIContext);
DashupUIForm.Config = Config(DashupUIContext);

// export default
export default DashupUIForm;