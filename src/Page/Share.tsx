
// import dependencies
import copy from 'copy-to-clipboard';
import { Alert } from '@mui/material';
import React, { useState } from 'react';
import { Icon, View, Modal, DialogActions, DialogContentText, Box, TextField, Dialog, DialogTitle, Stack, Button, DialogContent, MenuItem, Divider, Tooltip, IconButton, LoadingButton, InputAdornment } from '../';

// let context
let loading = false;
let DashupContext = null;

// create menu component
const DashupUIPageShare = (props = {}) => {
  // use state
  const [share, setSharing] = useState(null);
  const [shares, setShares] = useState(null);
  const [saving, setSaving] = useState(false);
  const [prevent, setPrevent] = useState(false);
  const [copying, setCopying] = useState(null);
  const [removing, setRemoving] = useState(null);

  // get type
  const getType = (struct, page) => {
    // map
    return ['Link', 'Marketplace'].filter((item) => {
      // check item
      if (item === 'Marketplace' && (!struct?.data?.share || page.get('link'))) return false;

      // return true
      return true;
    }).map((label) => {
      // set value
      const value = label.toLowerCase();

      // return value
      return {
        label,
        value,

        selected : (share?.type || 'link') === value,
      };
    });
  };

  // on copy
  const onCopy = (share) => {
    // set copying
    setCopying(share.id);

    // timeout
    setTimeout(() => setCopying(null), 2000);

    // copy
    copy(`https://${eden.get('config.domain')}/share/${share.slug}`);
  };

  // on share
  const onSubmit = async (page, dashup) => {
    // loading
    setSaving(true);

    // get result
    const result = await eden.router.post(`/app/${dashup.get('_id')}/share/${page.get('_id')}/${share.id ? `${share.id}/update` : 'create'}`, share);

    // push result
    if (result.success) {
      // find
      const found = shares.find((s) => s.id === result.data.id);

      // check found
      if (found) {
        // set to found
        Object.keys(result.data).forEach((key) => {
          // update values
          found[key] = result.data[key];
        });
      } else {
        // push
        shares.push(result.data);
      }
    }

    // loading
    setShares([...shares]);
    setSaving(false);
    setSharing(null);
  };
  
  // on remove
  const onRemove = async (page, dashup) => {
    // loading
    setSaving(true);

    // filter
    const newShares = shares.filter((s) => s.id !== removing.id);

    // get result
    await eden.router.post(`/app/${dashup.get('_id')}/share/${page.get('_id')}/${removing.id}/remove`);

    // loading
    setShares([...newShares]);
    setSaving(false);
    setSharing(null);
    setRemoving(null);
  };

  // set share
  const setShare = (key, value) => {
    // set value
    share[key] = value;

    // set share
    setSharing({ ...share });
  };

  // get shares
  const getShares = (dashup, page, share) => {
    // accum
    return Object.keys(share).reduce((accum, item) => {
      // check array
      let ids = page.get(item);
      if (!Array.isArray(ids)) ids = [ids].filter((i) => i);

      // find page
      ids.forEach((id) => {
        // check id
        if (!dashup.page(id)) return;
        if (!accum.find((p) => p.get('_id') === id)) accum.push(dashup.page(id));
      });

      // return accum
      return accum;
    }, []);
  };

  // load shares
  const loadShares = (page, dashup) => {
    // check loading
    if (loading) return;

    // loading true
    loading = true;

    // load shares
    eden.router.get(`/app/${dashup.get('_id')}/share/${page.get('_id')}/list`).then(({
      data,
    }) => {
      // shares
      setShares(data);

      // loading done
      loading = false;
    });
  }

  // return JSX
  return (
    <DashupContext.Consumer>
      { ({ page, guest, dashup, getPageStruct }) => {
        // load shares
        if (!shares && props.show) loadShares(page, dashup);

        // shares page
        const shareP = guest && guest.page('shares');
        const sForm = shareP && Array.from(guest.get('pages').values()).find((p) => p.get('type') === 'form' && p.get('data.model') === shareP.get('_id'));
        const sFields = sForm && sForm.get('data.fields');
        const categories = sFields && (sFields || []).find((f) => f.name === 'categories');

        // get struct
        const struct = page.get('type') && getPageStruct(page.get('type'));

        // return jsx
        return (
          <>
            <Modal
              open={ !!props.show }
              icon={ page.get('icon') || struct.icon }
              page={ page }
              title={ page.get('name') || page.get('_id') }
              dashup={ dashup }
              thread={ `${page.get('_id')}` }
              onClose={ props.onClose || props.onHide }
            >
              { share ? (
                <Box py={ 2 } flex={ 1 }>
                  <Stack spacing={ 1 }>
                    { !!struct?.data?.share?.pages && (
                      <>
                        <Alert severity="info">
                          The following pages will also be shared.
                        </Alert>
                        { getShares(dashup, page, struct.data.share.pages).map((sPage) => {
                          // get color
                          const color = sPage.get('color');

                          // return jsx
                          return (
                            <TextField
                              key={ `share-${sPage.get('_id')}` }
                              label={ sPage.get('type') }
                              color={ color?.hex }
                              value={ sPage.get('name') }
                              readOnly
                              fullWidth
                              InputProps={ {
                                startAdornment : (
                                  <InputAdornment position="start">
                                    <IconButton sx={ {
                                    color      : color?.hex && theme.palette.getContrastText(color.hex),
                                    background : color?.hex,
                                    } }>
                                      <Icon type="fas" icon="plus" fixedWidth />
                                    </IconButton>
                                  </InputAdornment>
                                ),
                              } }
                            />
                          );
                        }) }
                        <Box py={ 2 }>
                          <Divider />
                        </Box>
                      </>
                    ) }

                    <TextField
                      label="Share Type"
                      value={ share.type }
                      select
                      onChange={ (e) => setShare('type', e.target?.value) }
                      fullWidth
                    >
                      { getType(struct, page).map((option) => (
                        <MenuItem key={ option.value } value={ option.value }>
                          { option.label }
                        </MenuItem>
                      ))}
                    </TextField>

                    <TextField
                      label="Share Name"
                      value={ share.name }
                      onChange={ (e) => setShare('name', e.target?.value) }
                      fullWidth
                    />

                    { share.type === 'marketplace' && (
                      <>
                        <Box py={ 2 }>
                          <Divider />
                        </Box>
                        <Alert severity="info">Adding this page to the marketplace will make it available for anyone to see once approved.</Alert>
                        <View
                          type="field"
                          view="input"
                          struct="image"
                          field={ {
                            uuid  : 'image',
                            input : 'input',
                            label : 'Image',
                          } }
                          item={ new dashup.Model() }
                          value={ share.image }
                          dashup={ dashup }
                          onChange={ (f, val) => setShare('image', val) }
                          setPrevent={ setPrevent }
                          />
                        { !!categories && (
                          <View
                            type="field"
                            view="input"
                            struct="select"
                            field={ categories }
                            item={ new dashup.Model() }
                            value={ share.categories }
                            dashup={ dashup }
                            onChange={ (f, val) => setShare('categories', val) }
                            />
                        ) }
                        <View
                          type="field"
                          view="input"
                          struct="textarea"
                          field={ {
                            uuid  : 'description',
                            label : 'Description',
                          } }
                          item={ new dashup.Model() }
                          value={ share.description }
                          dashup={ dashup }
                          onChange={ (f, val) => setShare('description', val) }
                          />
                        { /*
                        <View
                          type="field"
                          view="input"
                          struct="product"
                          field={ {
                            uuid  : 'price',
                            label : 'Product',
                          } }
                          item={ new dashup.Model() }
                          value={ share.price || { type : 'simple', price : 0 } }
                          dashup={ dashup }
                          onChange={ (f, val) => setShare('price', val) }
                          />
                        */ }
                      </>
                    ) }
                  </Stack>
                </Box>
              ) : (
                <Box flex={ 1 } py={ 2 }>
                  { (shares || []).length ? (shares || []).map((share, i) => {
                    // return jsx
                    return (
                      <TextField
                        key={ `share-${i}` }
                        label={ share.type }
                        value={ share.name }
                        readOnly
                        fullWidth
                        InputProps={ {
                          startAdornment : (
                            <InputAdornment position="start">
                              <IconButton color={ copying === share.id ? 'primary' : undefined } onClick={ (e) => onCopy(share) }>
                                { copying === share.id ? (
                                  <Icon type="fas" icon="clipboard-check" fixedWidth />
                                ) : (
                                  share.type === 'link' ? (
                                    <Icon type="fas" icon="link" fixedWidth />
                                  ) : (
                                    <Icon type="fas" icon="shopping-cart" fixedWidth />
                                  )
                                ) }
                              </IconButton>
                            </InputAdornment>
                          ),
                          endAdornment : (
                            <>
                              <InputAdornment position="end">
                                <IconButton color="error" onClick={ (e) => setRemoving(share) }>
                                  <Icon type="fas" icon="trash" fixedWidth />
                                </IconButton>
                              </InputAdornment>
                              <InputAdornment position="end">
                                <IconButton onClick={ (e) => setSharing(share) }>
                                  <Icon type="fas" icon="ellipsis-h" fixedWidth />
                                </IconButton>
                              </InputAdornment>
                            </>
                          )
                        } }
                      />
                    );
                  }) : (
                    <Box display="flex" justifyContent="center" height="100%" alignItems="center">
                      This page has no shares, click below to create one.
                    </Box>
                  ) }
                </Box>
              ) }
              <Box flex={ 0 }>
                <Stack spacing={ 1 } direction="row" sx={ {
                  width : '100%',
                } } alignItems="center">
                  { !!share && (
                    <Tooltip title="Remove Share">
                      <IconButton color="error" onClick={ (e) => setRemoving(true) }>
                        <Icon type="fas" icon="trash" fixedWidth />
                      </IconButton>
                    </Tooltip>
                  ) }
                  <Stack direction="row" spacing={ 1 } flex={ 1 } justifyContent="end">
                    { !!share && (
                      <Button onClick={ () => setSharing(null) }>
                        Cancel
                      </Button>
                    ) }
                    { share ? (
                      <LoadingButton color="success" variant="contained" disabled={ prevent || saving } loading={ saving } onClick={ () => onSubmit(page, dashup) }>
                        { saving ? 'Submitting...' : 'Submit' }
                      </LoadingButton>
                    ) : (
                      <LoadingButton color="success" variant="contained" onClick={ () => setSharing({ type : 'link' }) }>
                        New Share
                      </LoadingButton>
                    ) }
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
                  Are you sure you want to remove this share?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={ () => setRemoving(false) }>Cancel</Button>
                <LoadingButton color="error" onClick={ (e) => onRemove(page, dashup) } loading={ saving }>
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
  return DashupUIPageShare;
};