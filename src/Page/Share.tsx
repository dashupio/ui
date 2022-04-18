
// import dependencies
import copy from 'copy-to-clipboard';
import QRCode from 'qrcode.react';
import { Alert } from '@mui/material';
import React, { useRef, useState } from 'react';
import { Icon, View, Modal, DialogActions, FormControlLabel, FormGroup, Switch, DialogContentText, Box, TextField, Dialog, DialogTitle, Stack, Button, DialogContent, MenuItem, Divider, Tooltip, IconButton, LoadingButton, InputAdornment } from '../';

// let context
let loading = false;
let DashupContext = null;

// debounce
let timeout;
const debounce = (fn, to = 500) => {
  clearTimeout(timeout);
  timeout = setTimeout(fn, to);
};

// create menu component
const DashupUIPageShare = (props = {}) => {
  // use state
  const [share, setSharing] = useState(null);
  const [shares, setShares] = useState([]);
  const [saving, setSaving] = useState(false);
  const [prevent, setPrevent] = useState(false);
  const [copying, setCopying] = useState(null);
  const [removing, setRemoving] = useState(null);

  // set ref
  const structRef = useRef(null);

  // get type
  const getType = (struct, page) => {
    // map
    return ['Link', 'Embed', 'Marketplace'].filter((item) => {
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
  const onSubmit = async (page, dashup, revert = true) => {
    // loading
    setSaving(true);

    // get result
    const result = await eden.router.post(`/app/${dashup.get('_id')}/share/${page.get('_id')}/${share.id ? `${share.id}/update` : 'create'}`, share);

    // push result
    if (result.success) {
      // set id
      if (!share.id) {
        shares.push(share);
      }
      
      // set to found
      Object.keys(result.data).forEach((key) => {
        // update values
        share[key] = result.data[key];
      });
    }

    // loading
    setShares([...shares]);
    setSaving(false);
    if (revert) {
      setSharing(null);
    } else {
      setSharing({ ...share });
    }
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
  const setShare = (key, value, page, dashup) => {
    // set value
    share[key] = value;

    // set share
    setSharing({ ...share });

    // debounce
    debounce(() => onSubmit(page, dashup, false));
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

  // check is share
  const isShare = !!(typeof eden === 'undefined' ? {} : eden).state?.share;

  // check share
  if (isShare) return null;

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

        // add to ref
        structRef.current = struct;

        // return jsx
        return (
          <>
            <Modal
              open={ !!props.show }
              icon={ page.get('icon') || struct?.icon }
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
                        <Alert severity="info" sx={ { mb : 1 } }>
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
                                      <Icon type="fas" icon={ sPage.get('icon') || 'plus' } fixedWidth />
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
                      value={ share.type || '' }
                      select
                      onChange={ (e) => setShare('type', e.target?.value, page, dashup) }
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
                      value={ share.name || '' }
                      onChange={ (e) => setShare('name', e.target?.value, page, dashup) }
                      fullWidth
                    />

                    <TextField
                      rows={ 4 }
                      label="Share Description"
                      value={ share.description || '' }
                      multiline
                      onChange={ (e) => setShare('description', e.target?.value, page, dashup) }
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
                          onChange={ (f, val) => setShare('image', val, page, dashup) }
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
                            onChange={ (f, val) => setShare('categories', val, page, dashup) }
                            />
                        ) }
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

                    { !!['embed', 'link'].includes(share.type) && (
                      <>

                        { !!share.slug && (
                          <>
                            <Box py={ 2 }>
                              <Divider />
                            </Box>

                            <Box pb={ 2 }>
                              <QRCode value={ `https://${eden.get('config.domain')}/share/${share.slug}` } />
                            </Box>

                            <TextField
                              label="Share URL"
                              value={ `https://${eden.get('config.domain')}/share/${share.slug}` }
                              fullWidth

                              InputProps={ {
                                readOnly : true,
                              } }
                            />
                          </>
                        ) }

                        <Box py={ 2 }>
                          <Divider />
                        </Box>

                        <FormGroup>
                          <FormControlLabel control={ (
                            <Switch checked={ !!share.disableMenu } onChange={ (e) => setShare('disableMenu', !!e.target.checked, page, dashup) } />
                          ) } label="Disable Menu" />
                          <FormControlLabel control={ (
                            <Switch checked={ !!share.disableFilter } onChange={ (e) => setShare('disableFilter', !!e.target.checked, page, dashup) } />
                          ) } label="Disable Filter" />
                          <FormControlLabel control={ (
                            <Switch checked={ !!share.disablePadding } onChange={ (e) => setShare('disablePadding', !!e.target.checked, page, dashup) } />
                          ) } label="Disable Padding" />
                        </FormGroup>
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
                                <Tooltip title="Remove Share">
                                  <IconButton color="error" onClick={ (e) => setRemoving(share) }>
                                    <Icon type="fas" icon="trash" fixedWidth />
                                  </IconButton>
                                </Tooltip>
                              </InputAdornment>
                              <InputAdornment position="end">
                                <Tooltip title="Share Config">
                                  <IconButton onClick={ (e) => setSharing(share) }>
                                    <Icon type="fas" icon="ellipsis-h" fixedWidth />
                                  </IconButton>
                                </Tooltip>
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
                        Back
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