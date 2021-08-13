

// import dependencies
import copy from 'copy-to-clipboard';
import Chat from '../Chat';
import Form from '../Form';
import View from '@dashup/view';
import moment from 'moment';
import SimpleBar from 'simplebar-react';
import React, { useState, useRef, useEffect } from 'react';
import { Modal, Tooltip, Overlay, Popover, OverlayTrigger, Dropdown, Button } from 'react-bootstrap';
import DashupUIPageAudit from './Audit';

// let context
let DashupContext = null;

// create menu component
const DashupUIPageItem = (props = {}) => {
  // copying
  const [form, setForm] = useState(props.form);
  const [audits, setAudits] = useState([]);
  const [copying, setCopying] = useState(false);
  const [tagOpen, setTagOpen] = useState(false);
  const [updated, setUpdated] = useState(null);
  const [prevent, setPrevent] = useState(false);
  const [creating, setCreating] = useState(true);
  const [removing, setRemoving] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [confirming, setConfirming] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [actualData, setActualData] = useState((props.item && props.item.get()) || {});

  // refs
  const tagRef = useRef(null);
  const userRef = useRef(null);

  // use effect
  useEffect(() => {
    // set loading
    if (props.item) {
      // set data
      setActualData((props.item && props.item.get()) || {});
    } else if (!props.item) {
      // set data
      setActualData({});
    }
  }, [props.item && props.item.toJSON()]);

  // on copy
  const onCopy = (e, page, item) => {
    // prevent
    e.preventDefault();
    e.stopPropagation();

    // set loading
    setCopying(true);

    // timeout
    setTimeout(() => setCopying(false), 2000);

    // copy
    copy(`https://${window.location.host}/app/${page.get('_id')}/${item.get('_id')}`);
  };

  // get tag types
  const getTagFields = (data) => {
    // check get field
    if (!props.getField && !data.getField) return [];

    // set types
    let types = typeof props.tag !== 'undefined' ? props.tag : (data.page.get('data.tag') || []);
    if (!Array.isArray(types)) types = [types];

    // return fields
    return types.map((f) => (props.getField || data.getField)(f)).filter((f) => f);
  };

  // get user types
  const getUserFields = (data) => {
    // check get field
    if (!props.getField && !data.getField) return [];
    
    // set types
    let types = typeof props.user !== 'undefined' ? props.user : (data.page.get('data.user') || []);
    if (!Array.isArray(types)) types = [types];

    // return fields
    return types.map((f) => (props.getField || data.getField)(f)).filter((f) => f);
  }

  // get form
  const getForm = (forms) => {
    // found
    const found = forms.find((f) => f.get('_id') === form);

    // check found
    if (found) return found;

    // current
    const meta = forms.find((f) => f.get('_id') === (props.item && props.item.get('_meta.form')));

    // check found
    if (meta) return meta;

    // return 0
    return forms[0];
  };

  // get tags
  const getTags = (tagField) => {
    // tag field
    if (!tagField) return [];

    // get options
    const options = tagField.options || [];

    // check options
    if (!options.length) return [];

    // get value
    let val = props.item.get(tagField.name || tagField.uuid) || [];

    // set value
    if (!Array.isArray(val)) val = [val].filter((v) => v);

    // tags
    return options.filter((t) => {
      // return has tag
      return val.includes(t.value);
    });
  };

  // get users
  const getUsers = (userField) => {
    // check options
    if (!userField) return [];

    // get value
    let val = props.item.get(userField.name || userField.uuid) || [];

    // set value
    if (!Array.isArray(val)) val = [val].filter((v) => v);

    // tags
    return val;
  };

  // get short name
  const getName = (user) => {
    // get name
    const name = `${user.name || ''}`.trim() || 'N A';

    // return name
    return `${(name.split(' ')[0] || '')[0] || ''}${(name.split(' ')[1] || '')[0] || ''}`;
  };

  // get avatar
  const getAvatar = (user) => {
    // return avatar
    return ((((user.avatar || [])[0] || {}).thumbs || {})['1x-sq'] || {}).url;
  };

  // has tags
  const hasTags = (data) => {
    // check page
    if (!data.page) return;

    // tag uuid
    return !!(props.tag || data.page.get('data.tag') || []).length;
  }

  // has user
  const hasUser = (data) => {
    // check page
    if (!data.page) return;

    // tag uuid
    return !!(props.user || data.page.get('data.user') || []).length;
  };

  // set data
  const onData = (data) => {
    // set updated
    setUpdated(new Date());
    setActualData({ ...data });
  };

  // on tag
  const onUser = (field, value) => {
    // get tag value
    props.item.set(field.name || field.uuid, value);

    // set updated
    setUpdated(new Date());
    
    // check id
    if (props.item.get('_id')) {
      props.item.save();
      setUpdated(null);
    }
  };

  // on tag
  const onTag = (field, value) => {
    // get tag value
    let tagVal = (props.item.get(field.name || field.uuid) || []);

    // check array
    if (!Array.isArray(tagVal)) tagVal = [tagVal].filter((t) => t && typeof t === 'string');

    // check includes
    if (tagVal.includes(value)) {
      tagVal = tagVal.filter((v) => v !== value);
    } else {
      tagVal.push(value);
    }

    // set and save
    props.item.set(field.name || field.uuid, field.multiple ? tagVal : tagVal.pop());

    // set updated
    setUpdated(new Date());
    
    // check id
    if (props.item.get('_id')) {
      props.item.save();
      setUpdated(null);
    }
  };

  // on hide
  const onHide = () => {
    // check updated
    if (updated) {
      // check confirm
      if (confirming) {
        setConfirming(false);
        props.onHide();
      } else {
        setConfirming(true);
      }
    } else {
      // hide immediately
      props.onHide();
    }
  };

  // on remove
  const onRemove = async (e) => {
    // prevent
    e.preventDefault();
    e.stopPropagation();

    // loading remove
    setSubmitting(true);

    // submit form
    await props.item.remove();

    // loading remove
    setSubmitting(false);
    onHide();
  };

  // on create
  const onCreate = (dashup) => {
    // unset for form remove
    setCreating(false);
    setActualData({});
    props.setItem(new dashup.Model({}, dashup));
    setTimeout(() => setCreating(true), 200);
  };

  // on submit
  const onSubmit = async (e, form, data) => {
    // prevent
    e.preventDefault();
    e.stopPropagation();

    // check submitting
    if (submitting) return;

    // submitting
    setSubmitting(true);

    // creating
    const creating = !props.item?.get('_id');

    // submit form
    const result = await data.dashup.action({
      type   : 'page',
      page   : data.page.get('_id'),
      form   : form.get('_id'),
      model  : (props.item && props.item.get('_meta.model')) || form.get('data.model'),
      struct : 'form',
    }, 'form.submit', {
      _id : props.item ? props.item.get('_id') : null,

      ...actualData,
    });

    // set to item
    props.item.set('_id', result._id);
    props.item.set('_meta', result._meta);

    // set item
    if (creating && result._id && typeof eden !== 'undefined') {
      // url
      const url = `/app/${data.page.get('_id')}/${result._id}`;
      
      // check state
      const state = Object.assign({}, {
        prevent : true,
      }, eden.router.history.location.state);
  
      // replace history
      eden.router.history.replace({
        pathname : url,
      }, state);
    }

    // submitting
    setUpdated(null);
    setSubmitting(false);
  };

  // audits
  useEffect(() => {
    // check eden
    if (typeof eden === 'undefined') return;

    // audits
    let localAudits = audits || [];

    // check item
    if (!props.item || !props.item.get('_id')) {
      localAudits = [];
      return setAudits([]);
    }

    // on audits
    const onAudits = (changes = []) => {
      // loop audits
      changes.forEach((audit) => {
        // new audits
        localAudits = localAudits.filter((a) => a.id !== audit.id);

        // push new audit
        localAudits.push(audit);
      });

      // update audits
      setAudits([...localAudits]);
    };

    // load audits
    eden.dashup.socket.on(`audit.${props.item.get('_id')}`, onAudits);
    eden.dashup.rpc({}, 'audit.subscribe', props.item.get('_id')).then(onAudits);

    // return unlisten
    return () => {
      eden.dashup.rpc({}, 'audit.unsubscribe', props.item.get('_id'));
      eden.dashup.socket.off(`audit.${props.item.get('_id')}`, onAudits);
    };
  }, [props.item && props.item.get('_id')]);

  // return JSX
  return (
    <DashupContext.Consumer>
      { (data) => {
        // destruct
        const { item, page, dashup, getPageStruct, getFieldStruct, getForms, getFields } = data;

        // get struct
        const struct = getPageStruct();

        // get forms
        const forms = (props.getForms || getForms)();
        const chosenForm = getForm(forms);

        // return jsx
        return (
          <Modal size="xl" show={ props.show } onHide={ onHide } enforceFocus={ false }>
            { !!props.item && (
              <Modal.Body className="card p-0">
                <div className="row g-0">
                  <div className="col-lg-8 d-flex flex-column has-shadow">

                    <div className="card-header py-3 border-bottom border-secondary d-flex">
                      { !!props.item.get('_id') && (
                        <OverlayTrigger
                          overlay={
                            <Tooltip>
                              Copy URL
                            </Tooltip>
                          }
                          placement="top"
                        >
                          <button className="btn btn-link me-3" onClick={ (e) => onCopy(e, page, props.item) }>
                            { copying ? (
                              <i className="fa fa-check text-success" />
                            ) : (
                              <i className="fa fa-clipboard-check" />
                            ) }
                          </button>
                        </OverlayTrigger>
                      ) }

                      { !!hasTags(data) && (
                        <div className="d-flex ms-0 me-3 tags" ref={ tagRef }>
                          { getTagFields(data).map((type, i) => {
                            // return jsx
                            return (
                              <React.Fragment key={ `tag-${type.uuid}` }>
                                { getTags(type).map((tag, a) => {
                                  // return jsx
                                  return (
                                    <OverlayTrigger
                                      key={ `tag-${type.uuid}-${tag.value}` }
                                      overlay={
                                        <Tooltip>
                                          { `${type.label}: ${tag.value}`}
                                        </Tooltip>
                                      }
                                      placement="top"
                                    >
                                      <button className={ `btn me-1 btn-${tag.color}` } onClick={ () => setTagOpen(type) }>
                                        { tag.label }
                                      </button>
                                    </OverlayTrigger>
                                  );
                                }) }

                                <OverlayTrigger
                                  overlay={
                                    <Tooltip>
                                      Add { type.label }
                                    </Tooltip>
                                  }
                                  placement="top"
                                >
                                  <button className="btn btn-outline-dark" onClick={ () => setTagOpen(type) }>
                                    <i className="fa fa-tag" />
                                  </button>
                                </OverlayTrigger>
                              </React.Fragment>
                            );
                          }) }
                        </div>
                      ) }

                      { !!hasUser(data) && (
                        <div className="d-flex ms-0 me-3 tags" ref={ userRef }>
                          { getUserFields(data).map((type, i) => {
                            // return jsx
                            return (
                              <React.Fragment key={ `user-${type.uuid}` }>
                                { getUsers(type).map((user, a) => {
                                  // return jsx
                                  return (
                                    <OverlayTrigger
                                      key={ `user-${type.uuid}-${user._id || user.id}` }
                                      overlay={
                                        <Tooltip>
                                          { `${type.label}: ${user.name}`}
                                        </Tooltip>
                                      }
                                      placement="top"
                                    >
                                      <button className="btn me-1 btn-circle" style={ {
                                        backgroundImage : getAvatar(user) ? `url(${getAvatar(user)})` : null,
                                      } } onClick={ () => setUserOpen(type) }>
                                        { getAvatar(user) ? '' : getName(user) }
                                      </button>
                                    </OverlayTrigger>
                                  );
                                }) }

                                <OverlayTrigger
                                  overlay={
                                    <Tooltip>
                                      Add { type.label }
                                    </Tooltip>
                                  }
                                  placement="top"
                                >
                                  <button className="btn btn-outline-dark" onClick={ () => setUserOpen(type) }>
                                    <i className="fa fa-plus" />
                                  </button>
                                </OverlayTrigger>
                              </React.Fragment>
                            );
                          }) }
                        </div>
                      ) }

                      { !!chosenForm && forms.length > 1 && (
                        <Dropdown className="ms-auto" align="right">
                          <Dropdown.Toggle variant="primary">
                            <i className={ `fa-${chosenForm.get('icon') || 'plus fa'} me-2` } />
                            { chosenForm.get('name') }
                            <i className="fa fa-caret-down ms-2" />
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            { forms.map((form, i) => {
                              // return jsx
                              return (
                                <Dropdown.Item key={ `form-${form.get('_id')}` } onClick={ (e) => setForm(form.get('_id')) }>
                                  <i className={ `fa-${form.get('icon') || 'plus fa'} me-2` } />
                                  { form.get('name') }
                                </Dropdown.Item>
                              );
                            }) }
                          </Dropdown.Menu>
                        </Dropdown>
                      ) }
                    </div>
                    
                    { removing ? (
                      <div className="card-body bg-white pb-0 flex-1">
                        Are you sure you want to remove this item?
                      </div>
                    ) : (
                      confirming ? (
                        <div className="card-body bg-white pb-0 flex-1">
                          You have unsaved data. Are you sure you want to disregard the changes?
                        </div>
                      ) : (
                        !!chosenForm && (
                          <div className="card-body bg-white pb-0 flex-1">
                            { creating && (
                              <Form
                                { ...data }
      
                                id={ page.get('_id') }
                                data={ actualData }
                                fields={ chosenForm.get('data.fields') || [] }
                                setData={ onData }
                                onSubmit={ (e) => onSubmit(e, chosenForm, data) }
                                setPrevent={ setPrevent }
                                />
                            ) }
                          </div>
                        )
                      )
                    ) }
                    
                    <div className="card-footer d-flex border-top border-secondary py-3">
                      { removing ? (
                        <>
                          <Button variant="info" className="me-auto" onClick={ (e) => setRemoving(false) }>
                            Cancel
                          </Button>
                          <Button variant="danger" className="ms-auto" onClick={ (e) => onRemove(e) }>
                            Confirm
                          </Button>
                        </>
                      ) : (
                        confirming ? (
                          <>
                            <Button variant="info" className="me-auto" onClick={ (e) => setConfirming(false) }>
                              Cancel
                            </Button>
                            <Button variant="danger" className="ms-auto" onClick={ onHide }>
                              Confirm
                            </Button>
                          </>
                        ) : (
                          <>
                            { !!props.item.get('_id') && (
                              <>
                                <Button variant="danger" className={ updated ? 'me-auto' : 'me-2' } onClick={ (e) => setRemoving(true) }>
                                  Remove
                                </Button>
                                { !updated && (
                                  <Button variant="info" className="me-auto" onClick={ (e) => onCreate(dashup) }>
                                    Create New
                                  </Button>
                                ) }
                              </>
                            ) }
                            <Button variant="success" className="ms-auto" disabled={ !updated || prevent || submitting } onClick={ (e) => onSubmit(e, chosenForm, data) }>
                              { submitting ? 'Submitting...' : 'Submit' }
                            </Button>
                          </>
                        )
                      ) }
                    </div>

                  </div>
                  <div className="col-lg-4 d-flex flex-column">
                    <div className="modal-sidebar">
                      <div className="card-header d-flex">
                        <div className="d-inline-block me-auto">
                          <small className="d-block">
                            Created At
                          </small>
                          <div>
                            { moment(props.item.get('_meta.created_at')).format('Do MMM, h:mma') }
                          </div>
                        </div>
                        <button type="button" className="btn btn-link ms-auto" onClick={ props.onHide }>
                          <i className="fa fa-times" />
                        </button>
                      </div>
                      
                      <div className="flex-1 card-audits mh-25 fit-content">
                        <SimpleBar className="p-relative">
                          <div className="card-body">
                            { audits.map((audit, i) => {
                              // changes
                              if (!audit?.changes?.length) return null;

                              // return jsx
                              return (
                                <DashupUIPageAudit
                                  key={ `audit-${audit.id}` }
                                  page={ page }
                                  item={ props.item }
                                  forms={ forms }
                                  audit={ audit }
                                  dashup={ dashup }
                                  getFields={ getFields }
                                  getFieldStruct={ getFieldStruct }
                                  />
                              );
                            }) }
                          </div>
                        </SimpleBar>
                      </div>
                      
                      <div className="card-footer chat-sm d-flex flex-column border-top border-secondary h-75 flex-1 py-3">
                        { !!props.item.get('_id') && (
                          <Chat size="sm" dashup={ dashup } page={ page } thread={ `${props.item.get('_id')}` }>
                            <div className="d-flex flex-column flex-1">
                              <div className="flex-1 fit-content">
                                <Chat.Thread />
                              </div>
                              <div className="flex-0">
                                <Chat.Input />
                              </div>
                            </div>
                          </Chat>
                        ) }
                      </div>
                    </div>
                  </div>
                </div>

                <Overlay show={ !!tagOpen } target={ tagRef.current } onHide={ () => setTagOpen(false) } rootClose placement="bottom-start">
                  <Popover className="dropdown-menu dropdown-menu-edit p-2">
                    { getTagFields(data).map((field, i) => {
                      // return jsx
                      return (
                        <React.Fragment key={ `tag-${field.uuid}` }>
                          { i !== 0 && (
                            <Dropdown.Divider />
                          ) }
                          <div className="tags">
                            { (field.options || []).map((opt, a) => {
                              // return jsx
                              return (
                                <button
                                  key={ `opt-${opt.value}` }
                                  onClick={ () => onTag(field, opt.value) }
                                  className={ `btn w-100${a !== 0 ? ' mt-2' : ''} btn-${opt.color || 'secondary'}` }
                                  >
                                  { opt.label }
                                </button>
                              );
                            }) }
                          </div>
                        </React.Fragment>
                      );
                    }) }
                  </Popover>
                </Overlay>

                <Overlay show={ !!userOpen } target={ userRef.current } onHide={ () => setUserOpen(false) } rootClose placement="bottom-start">
                  <Popover className="dropdown-menu popover-grid">
                    <View
                      view="input"
                      type="field"
                      struct="user"
                      dashup={ data.dashup }

                      field={ userOpen }
                      value={ props.item && props.item.get(userOpen?.name || userOpen?.uuid) }

                      noLabel
                      onClick={ (e) => e.preventDefault() }
                      onChange={ onUser }
                      menuIsOpen
                    />
                  </Popover>
                </Overlay>
              </Modal.Body>
            ) }
          </Modal>
        );
      } }
    </DashupContext.Consumer>
  );
};

// export default page menu
export default (ctx) => {
  // use context
  DashupContext = ctx;

  // return actual component
  return DashupUIPageItem;
};