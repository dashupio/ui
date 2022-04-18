

// import dependencies
import copy from 'copy-to-clipboard';
import moment from 'moment';
import { Tab } from '@mui/material';
import SimpleBar from 'simplebar-react';
import DashupUIPageAudit from './Audit';
import React, { useState, useEffect } from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Icon, Form, View, Modal, Chat, Box, Paper, Avatar, Tooltip, Chip, Dialog, DialogTitle, DialogActions, DialogContentText, Stack, Button, DialogContent, IconButton, Menu, LoadingButton } from '../';

// let context
let DashupContext = null;

// create menu component
const DashupUIPageItem = (props = {}) => {
  // copying
  const [form, setForm] = useState(props.form);
  const [audits, setAudits] = useState([]);
  const [copying, setCopying] = useState(false);
  const [tagOpen, setTagOpen] = useState(null);
  const [updated, setUpdated] = useState(null);
  const [prevent, setPrevent] = useState(false);
  const [creating, setCreating] = useState(true);
  const [removing, setRemoving] = useState(false);
  const [userOpen, setUserOpen] = useState(null);
  const [confirming, setConfirming] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [actualData, setActualData] = useState((props.item && props.item.get()) || {});
  const [buttonLoading, setButtonLoading] = useState(null);

  // destruct
  const { page, dashup, getField, getModels, getFieldStruct, getForms, getFields } = props;

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
  const getTagFields = () => {
    // check get field
    if (!getField) return [];

    // set types
    let types = typeof props.tag !== 'undefined' ? props.tag : (props.page.get('data.tag') || []);
    if (!Array.isArray(types)) types = [types];

    // return fields
    return types.map((f) => getField(f)).filter((f) => f);
  };

  // get user types
  const getUserFields = () => {
    // check get field
    if (!getField) return [];
    
    // set types
    let types = typeof props.user !== 'undefined' ? props.user : (props.page.get('data.user') || []);
    if (!Array.isArray(types)) types = [types];

    // return fields
    return types.map((f) => getField(f)).filter((f) => f);
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

  // get buttons
  const getButtons = (placement = 'modal-footer') => {
    // load buttons
    return getModels().reduce((accum, model) => {
      // check page
      const connects = (model.get('connects') || []).filter((c) => c.type === 'button' && (c.placements || []).includes(placement));

      // connects
      accum.push(...connects);

      // return accum
      return accum;
    }, []);
  };

  // has tags
  const hasTags = () => {
    // check page
    if (!props.page) return;

    // tag uuid
    return !!(props.tag || props.page.get('data.tag') || []).length;
  }

  // has user
  const hasUser = () => {
    // check page
    if (!props.page) return;

    // tag uuid
    return !!(props.user || props.page.get('data.user') || []).length;
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
    setRemoving(false);
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

  // on button
  const onButton = async (e, button) => {
    // set loading
    setButtonLoading(button?.uuid);

    // load key
    await dashup.action({
      type   : 'connect',
      page   : props.page.get('_id'),
      struct : 'button',
    }, 'trigger', {
      button,
      item  : props.item && props.item.get('_id'),
      model : getModels()[0].get('_id'),
    });

    // set loading
    setButtonLoading(null);
  };

  // on submit
  const onSubmit = async (e, form) => {
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
    const result = await props.dashup.action({
      type   : 'page',
      page   : props.page.get('_id'),
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
      const url = `/app/${props.page.get('_id')}/${result._id}`;
      
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

  // get forms
  const forms = props.page.get('data.sorted.0') ? props.page.get('data.sorted').map((form) => props.dashup.page(form)).filter((f) => f) : getForms();
  const chosenForm = getForm(forms);

  // return jsx
  return (
    <>
      <Modal
        open={ !!props.show }
        thread={ props.item?.get('_id') }
        dashup={ dashup }
        onClose={ onHide }
        sidebar={ (
          <Box flex={ 1 } sx={ {
            maxHeight : '40%'
          } }>
            <SimpleBar className="p-relative" style={ {
              height : '100%',
            } }>
              <Stack spacing={ 1 }>
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
              </Stack>
            </SimpleBar>
          </Box>
        ) }
      >
        <DialogTitle sx={ { padding : 0 } }>
          <Stack spacing={ 1 } direction="row" flexWrap="wrap">
            { !!props.item.get('_id') && (
              <Tooltip title="Copy URL">
                <IconButton color={ copying ? 'primary' : undefined } onClick={ (e) => onCopy(e, page, props.item) }>
                  { copying ? (
                    <Icon type="fas" icon="clipboard-check" fontSize="small" />
                  ) : (
                    <Icon type="fas" icon="clipboard" fontSize="small" />
                  ) }
                </IconButton>
              </Tooltip>
            ) }

            { !!hasTags() && (
              getTagFields().map((type, i) => {
                // return jsx
                return (
                  <Stack spacing={ 1 } direction="row" key={ `tag-${type.uuid}` } alignItems="center">
                    { getTags(type).map((tag, a) => {
                      // get color
                      const color = tag.color?.hex;

                      // return jsx
                      return (
                        <Tooltip title={ `${type.label}: ${tag.value}`} key={ `tag-${type.uuid}-${tag.value}` }>
                          <Chip
                            sx={ {
                              color           : color && window.theme?.palette?.getContrastText(color),
                              backgroundColor : color,
                            } }
                            label={ tag.label }
                            onClick={ (e) => setTagOpen({ type : type.uuid, el : e.target }) }
                            onDelete={ () => {} }
                          />
                        </Tooltip>
                      );
                    }) }

                    <Tooltip title={ `Add ${type.label}` }>
                      <IconButton onClick={ (e) => setTagOpen({ type : type.uuid, el : e.target }) }>
                        <Icon type="fas" icon="tag" fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Menu
                      open={ tagOpen?.type === type.uuid }
                      onClose={ () => setTagOpen(null) }
                      anchorEl={ tagOpen?.el }
                      MenuListProps={ {
                        sx : {
                          width : 240,
                        },
                      } }
                    >
                      <View
                        view="input"
                        type="field"
                        struct={ type.type }
                        dashup={ props.dashup }

                        field={ type }
                        value={ props.item && props.item.get(type.name || type.uuid) }

                        onChange={ onTag }
                        isInline
                        autoFocus
                      />
                    </Menu>
                  </Stack>
                );
              })
            ) }

            { !!hasUser() && (
              getUserFields().map((type, i) => {
                // return jsx
                return (
                  <Stack spacing={ 1 } direction="row" key={ `tag-${type.uuid}` } flexWrap="wrap" alignItems="center">
                    { getUsers(type).map((user, a) => {
                      // return jsx
                      return (
                        <Tooltip title={ `${type.label}: ${user.name}`} key={ `tag-${type.uuid}-${user._id || user.id}` }>
                          <Chip
                            label={ user.name }
                            avatar={ <Avatar image={ user.image || user.avatar } name={ user.name } /> }
                            onClick={ (e) => setUserOpen({ type : type.uuid, el : e.target }) }
                            onDelete={ () => {} }
                          />
                        </Tooltip>
                      );
                    }) }

                    <Tooltip title={ `Add ${type.label}` }>
                      <IconButton onClick={ (e) => setUserOpen({ type : type.uuid, el : e.target }) }>
                        <Icon type="fas" icon="user-plus" fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Menu
                      open={ userOpen?.type === type.uuid }
                      onClose={ () => setUserOpen(null) }
                      anchorEl={ userOpen?.el }
                      MenuListProps={ {
                        sx : {
                          width : 240,
                        },
                      } }
                    >
                      <View
                        view="input"
                        type="field"
                        struct="user"
                        dashup={ props.dashup }

                        field={ type }
                        value={ props.item && props.item.get(type.name || type.uuid) }

                        onChange={ onUser }
                        isInline
                        autoFocus
                      />
                    </Menu>
                  </Stack>
                );
              })
            ) }
          </Stack>
        </DialogTitle>
        <Box flex={ 1 }>
          { !!creating && (
            <Box py={ 2 }>
              <TabContext value={ chosenForm.get('_id') }>
                <Box sx={ { borderBottom : 1, borderColor : 'divider' } }>
                  <Box component={ SimpleBar } width="100%" sx={ {
                    '& .MuiTabs-root' : {
                      overflow : 'visible!important',
                    },
                    '& .MuiTabs-scroller' : {
                      overflow : 'visible!important',
                    }
                  } }>
                    <TabList onChange={ (e, v) => setForm(v) }>
                      { forms.map((t, i) => {
                        // return jsx
                        return <Tab key={ `tab-${t.get('_id')}` } value={ t.get('_id') } label={ t.get('name') } />;
                      }) }
                    </TabList>
                  </Box>
                </Box>
                { forms.map((t, i) => {
                  // return jsx
                  return (
                    <TabPanel key={ `tab-${t.get('_id')}` } value={ t.get('_id').toLowerCase() } sx={ {
                      paddingLeft  : 0,
                      paddingRight : 0,
                    } }>
                      <Form
                        { ...props }

                        id={ page.get('_id') }
                        data={ actualData }
                        fields={ t.get('data.fields') || [] }
                        setData={ onData }
                        onSubmit={ (e) => onSubmit(e, t) }
                        setPrevent={ setPrevent }
                      />
                    </TabPanel>
                  );
                }) }
              </TabContext>
            </Box>
          ) }
        </Box>
        <Box pt={ 2 } flex={ 0 }>
          <Stack spacing={ 1 } direction="row" sx={ {
            width : '100%',
          } } alignItems="center">
            { !!props.item.get('_id') && (
              <Tooltip title="Remove Item">
                <IconButton onClick={ (e) => setRemoving(true) }>
                  <Icon type="fas" icon="trash" fontSize="small" />
                </IconButton>
              </Tooltip>
            ) }
            { !!props.item.get('_id') && (
              <Tooltip title="Create New">
                <IconButton onClick={ (e) => onCreate(dashup) }>
                  <Icon type="fas" icon="plus" fontSize="small" />
                </IconButton>
              </Tooltip>
            ) }
            <Stack spacing={ 1 } direction="row" sx={ {
              flex           : 1,
              justifyContent : 'end',
            } }>
              { getButtons().map((button) => {
                // return buttons
                return (
                  <LoadingButton color="primary" variant="contained" onClick={ (e) => onButton(e, button) } loading={ buttonLoading === button.uuid }>
                    { button.label || button.name || button.uuid }
                  </LoadingButton>
                );
              }) }
              <LoadingButton color="success" variant="contained" onClick={ (e) => onSubmit(e, chosenForm) } disabled={ (!props.saveEmpty && !updated) || prevent || submitting } loading={ submitting }>
                { submitting ? 'Submitting...' : 'Submit' }
              </LoadingButton>
            </Stack>
          </Stack>
        </Box>
      </Modal>
      
      <Dialog
        open={ !!removing }
        onClose={ () => setRemoving(false) }
      >
        <DialogTitle>
          Confirm Remove
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          Are you sure you want to remove this item?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={ () => setRemoving(false) }>Cancel</Button>
          <LoadingButton color="error" onClick={ (e) => onRemove(e) } loading={ submitting }>
            Remove
          </LoadingButton>
        </DialogActions>
      </Dialog>
      
      <Dialog
        open={ !!confirming }
        onClose={ () => setConfirming(false) }
      >
        <DialogTitle>
          Unsaved Changes
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            You have unsaved changes, closing the modal will clear them.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={ () => setConfirming(false) }>Cancel</Button>
          <Button color="error" onClick={ (e) => onHide() }>
            Continue
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

// wrapper
const DashupUIPageItemWrapper = (props = {}) => {
  // return jsx
  return (
    <DashupContext.Consumer>
      { (data) => {
        // return jsx
        return (
          <DashupUIPageItem { ...props } { ...data } />
        );
      } }
    </DashupContext.Consumer>
  )
};

// export default page menu
export default (ctx) => {
  // use context
  DashupContext = ctx;

  // return actual component
  return DashupUIPageItemWrapper;
};