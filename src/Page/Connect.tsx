

// import dependencies
import shortid from 'shortid';
import React, { useEffect, useState } from 'react';
import { Box, Icon, TextField, IconButton, InputAdornment, View, MenuItem, Button, Tooltip, LoadingButton, Stack, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '../';

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
}

// create menu component
const DashupUIPageConnect = (props = {}) => {
  // state
  const [saving, setSaving] = useState(false);
  const [updated, setUpdated] = useState(new Date());
  const [updating, setUpdating] = useState(null);
  const [removing, setRemoving] = useState(null);

  // get type
  const getType = (page, available) => {
    // get type
    return [...available].filter((connect) => (connect.categories || []).includes(page.get('type'))).map((connect) => {
      // return value
      return {
        icon  : connect.icon,
        value : connect.type,
        label : connect.title,

        selected : connect.type === updating?.type,
      };
    });
  };

  // set connect
  const setConnect = (key, value, { page, setPage }) => {
    // set to updating
    updating[key] = value;
    setUpdated(new Date());

    // set page
    page.set('connects', [...page.get('connects')]);

    // check key
    if (key === 'type') {
      onSubmit(page, setPage);
    }
  };

  // on submit
  const onSubmit = async (page, setPage) => {
    // set submitting
    setSaving(true);

    // set page
    await setPage('connects', page.get('connects'));

    // set saving
    setSaving(false);
  };

  // set connect
  const onRemove = async (page, setPage) => {
    // set submitting
    setSaving(true);

    // new connects
    const newConnects = (page.get('connects') || []).filter((c) => c.uuid !== removing.uuid);

    // set page
    page.set('connects', newConnects);
    await setPage('connects', newConnects);

    // set saving
    setSaving(false);
    
    // remove
    setUpdating(null);
    setRemoving(null);
  };

  // on create
  const onCreate = (page, setPage) => {
    // set connect
    const connect = {
      uuid : shortid(),
    };

    // add to connects
    const connects = page.get('connects') || [];

    // add connect
    connects.push(connect);

    // set connects
    page.set('connects', connects);

    // set connect
    setUpdating(connect);
    debounce(setPage, 500)('connects', page.get('connects'));
  };

  // use effect
  useEffect(() => {
    // page
    const onUpdate = () => {
      // check updating
      if (updating) {
        // set values
        const realUpdating = (props.page.get('connects') || []).find((c) => c.uuid === updating.uuid);

        // set values
        if (realUpdating) setUpdating(realUpdating);
      }

      // set updated
      setUpdated(new Date());
    };

    // on update
    props.page.on('connects', onUpdate);

    // return done
    return () => {
      // remove listener
      props.page.removeListener('connects', onUpdate);
    };
  }, [props.page && props.page.get('_id'), updating?.uuid]);

  // return JSX
  return (
    <DashupContext.Consumer>
      { (data) => {
        // destruct
        const { page, available, dashup, setPage, getConnectStruct } = data;

        // get connects
        const connects = page.get('connects') || [];

        // return jsx
        return (
          <>
            <Box flex={ 1 } height="100%" display="flex" flexDirection="column">
              { updating ? (
                <Box flex={ 1 }>
                  <TextField
                    label="Connect Type"
                    value={ updating.type || '' }
                    select
                    onChange={ (e) => setConnect('type', e.target?.value, { page, setPage }) }
                    fullWidth
                  >
                    { getType(page, available?.connects).map((option) => (
                      <MenuItem key={ option.value } value={ option.value }>
                        { option.label }
                      </MenuItem>
                    ))}
                  </TextField>

                  { !!updating.type && (
                    <>
                      <TextField
                        label="Connect Name"
                        value={ updating.name || '' }
                        onChange={ (e) => setConnect('name', e.target?.value, { page, setPage }) }
                        fullWidth
                      />
                      <View
                        { ...data }

                        type="connect"
                        view="config"
                        struct={ updating.type }
                        connect={ updating }
                        setConnect={ (key, value) => setConnect(key, value, { page, setPage }) }
                      />
                    </>
                  ) }
                </Box>
              ) : (
                <Box flex={ 1 }>
                  { (connects || []).length ? connects.map((connect, i) => {

                    // return jsx
                    return (
                      <TextField
                        key={ `connect-${connect.uuid}` }
                        label={ getConnectStruct(connect.type)?.title || 'N/A' }
                        value={ connect.name || connect.uuid }
                        readOnly
                        fullWidth
                        InputProps={ {
                          startAdornment : (
                            <InputAdornment position="start">
                              <IconButton>
                                <Icon type="fas" icon="plus" fixedWidth />
                              </IconButton>
                            </InputAdornment>
                          ),
                          endAdornment : (
                            <>
                              <InputAdornment position="end">
                                <IconButton color="error" onClick={ (e) => setRemoving(connect) }>
                                  <Icon type="fas" icon="trash" fixedWidth />
                                </IconButton>
                              </InputAdornment>
                              <InputAdornment position="end">
                                <IconButton onClick={ (e) => setUpdating(connect) }>
                                  <Icon type="fas" icon="pencil" fixedWidth />
                                </IconButton>
                              </InputAdornment>
                            </>
                          )
                        } }
                      />
                    );
                  }) : (
                    <Box display="flex" justifyContent="center" height="100%" alignItems="center">
                      This page has no connects, click below to create one.
                    </Box>
                  ) }
                </Box>
              ) }
              <Box pt={ 2 } flex={ 0 }>
                <Stack spacing={ 1 } direction="row" sx={ {
                  width : '100%',
                } } alignItems="center">
                  { !!updating && (
                    <Tooltip title="Remove Connect">
                      <IconButton color="error" onClick={ (e) => setRemoving(updating) }>
                        <Icon type="fas" icon="trash" fixedWidth />
                      </IconButton>
                    </Tooltip>
                  ) }
                  <Stack direction="row" spacing={ 1 } flex={ 1 } justifyContent="end">
                    { !!updating && (
                      <Button onClick={ () => setUpdating(null) }>
                        Cancel
                      </Button>
                    ) }
                    { updating ? (
                      <LoadingButton color="success" variant="contained" disabled={ saving } loading={ saving } onClick={ () => onSubmit(page, setPage) }>
                        { saving ? 'Submitting...' : 'Submit' }
                      </LoadingButton>
                    ) : (
                      <LoadingButton color="success" variant="contained" onClick={ (e) => onCreate(page, setPage) }>
                        New Connect
                      </LoadingButton>
                    ) }
                  </Stack>
                </Stack>
              </Box>
            </Box>
                
            <Dialog
              open={ !!removing }
              onClose={ () => setRemoving(null) }
            >
              <DialogTitle>
                Confirm Remove
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Are you sure you want to remove this connect?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={ () => setRemoving(null) }>Cancel</Button>
                <LoadingButton color="error" onClick={ (e) => onRemove(page, setPage) } loading={ saving }>
                  { saving ? 'Removing...' : 'Remove' }
                </LoadingButton>
              </DialogActions>
            </Dialog>
          </>
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
  return DashupUIPageConnect;
};