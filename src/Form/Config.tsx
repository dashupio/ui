

// import dependencies
import moment from 'moment';
import React, { useRef, useState, useEffect } from 'react';
import { Chat, Query, Color, View, Modal, Tabs, Tab } from '../';

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

  // return JSX
  return !!field && !!struct && (
    <Modal size="xl" show={ props.show } onHide={ props.onHide } enforceFocus={ false } autoFocus={ false }>
      <Modal.Body className="card bg-light p-0">
        <div className="row g-0">
          <div className="col-lg-8 bg-white d-flex flex-column has-shadow">
            
            <div className="card-header py-3 border-bottom flex-0">
              <h5 className="modal-title">
                <i className={ `me-2 ${struct.icon || 'fa fa-align-justify'} fa-fw` } />
                { field.label || field.name || `${struct.title} Field` }
              </h5>
              <button type="button" className="btn btn-link ms-auto d-inline d-lg-none" onClick={ props.onHide }>
                <i className="fa fa-times" />
              </button>
            </div>

            { struct && (
              <div className="card-body flex-0 border-bottom">
                <i className={ `me-2 ${struct.icon || 'fa fa-align-justify'} fa-fw` } />
                { struct.title } Field
              </div>
            ) }

            <div className="card-body flex-0">
              <div className="d-flex mb-3">
                { !!struct.data?.color && (
                  <div className="flex-0 me-2">
                    <label className="form-label">
                      Color
                    </label>
                    <button ref={ colorRef } type="button" className="btn px-3" onClick={ () => setColor(true) } style={ {
                      background : colors[field.color] || field.color?.hex,
                    } }>
                      &nbsp;
                    </button>
                  </div>
                ) }
                <div className="flex-1 me-2">
                  <label className="form-label">
                    Label
                  </label>
                  <input className="form-control" ref={ labelRef } value={ field.label || '' } onChange={ (e) => onLabel(e) } />
                </div>
                <div className="flex-1 ms-2">
                  <label className="form-label">
                    Name
                  </label>
                  <input className="form-control" value={ field.name || '' } onChange={ (e) => setField(field, 'name', toName(e.target.value), true) } />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Placeholder
                </label>
                <input className="form-control" value={ field.placeholder || '' } onChange={ (e) => setField(field, 'placeholder', e.target.value, true) } />
              </div>

              <div>
                <label className="form-label">
                  Help Text
                </label>
                <input className="form-control" value={ field.help || '' } onChange={ (e) => setField(field, 'help', e.target.value, true) } />
              </div>

            </div>
            
            <div className="card-body flex-0 border-bottom">
              <Tabs
                id="page-config"
                onSelect={ (k) => setTab(k) }
                activeKey={ `${tab}`.toLowerCase() }
              >
                { tabs.map((tab, i) => {
                  // return jsx
                  return (
                    <Tab key={ `page-config-${tab}`.toLowerCase() } eventKey={ `${tab}`.toLowerCase() } title={ `${tab.charAt(0).toUpperCase()}${tab.slice(1)}` } className="pt-4">
                      { `${tab}`.toLowerCase() === 'config' && (
                        <>
                          { !!struct?.data?.multiple && (
                            <div className={ struct?.data?.default ? 'mb-3' : '' }>
                              <label className="form-label">
                                Allow Multiple
                              </label>
                              <select className="form-control" value={ field.multiple ? 'true' : 'false' } onChange={ (e) => setField(field, 'multiple', e.target.value === 'true', true) }>
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                              </select>
                            </div>
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
                      { `${tab}`.toLowerCase() === 'display' && (
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
                          view   : `${tab}`.toLowerCase(),
                          struct : field?.type,
                        } }
                      />
                    </Tab>
                  );
                }) }
              </Tabs>
            </div>

          </div>
          <div className="col-lg-4 d-flex flex-column">
            <div className="card-header bg-transparent d-flex">
              <div className="d-inline-block me-auto">
                <small className="d-block">
                  Created At
                </small>
                <div>
                  { moment(field._meta?.created || new Date()).format('Do MMM, h:mma') }
                </div>
              </div>
              <button type="button" className="btn btn-link ms-auto" onClick={ props.onHide }>
                <i className="fa fa-times" />
              </button>
            </div>
            
            <div className="card-body flex-1" />
            
            <div className="card-footer chat-sm bg-transparent d-flex flex-column border-top border-secondary h-75 py-3">
              <Chat size="sm" dashup={ props.dashup } page={ props.page } thread={ `${props.page.get('_id')}.${field.uuid}` }>
                <div className="d-flex flex-column flex-1">
                  <div className="flex-1 fit-content">
                    <Chat.Thread />
                  </div>
                  <div className="flex-0">
                    <Chat.Input />
                  </div>
                </div>
              </Chat>
            </div>
          </div>
        </div>
      </Modal.Body>

      { !!color && <Color target={ colorRef } show color={ colors[field.color] || field.color?.hex || 'transparent' } colors={ Object.values(colors) } onHide={ () => setColor(false) } onChange={ (hex) => setField(field, 'color', hex.hex === 'transparent' ? null : hex) } /> }
    </Modal>
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