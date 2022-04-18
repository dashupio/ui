

// import dependencies
import { Tab } from '@mui/material';
import React, { useRef, useState } from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { colors, Page, Menu, MenuItem, ListItemIcon, ListItemText, Modal, Divider, Typography, InputAdornment, IconButton, Icon, View, Color, Box, TextField, Stack, Button, IconPicker, LoadingButton } from '../';

// let context
let DashupContext = null;

// create menu component
const DashupUIPageConfig = (props = {}) => {
  // destruct
  const { type, page, dashup, setPage, getPageStruct } = props;

  // get struct
  const struct = getPageStruct();

  // tabs
  let [tab, setTab] = useState(null);
  const [icon, setIcon] = useState(false);
  const [color, setColor] = useState(false);
  const [colorMenu, setColorMenu] = useState(false);
  const [importing, setImporting] = useState(false);
  const [defaulting, setDefaulting] = useState(!!(!Object.keys(props.page?.get('data')).length && props.missingRequire?.length && struct?.data?.default));

  // ref
  const colorRef = useRef(null);
      
  // on import
  const onImport = async (e) => {
    // prevent default
    e.preventDefault();
    e.stopPropagation();

    // loading
    setImporting(true);

    // load from url
    const { data } = await eden.router.post(`/api/${dashup.get('_id')}/page/${page.get('_id')}/default`, {
      default : struct.data.default,
      section : dashup.get('section') ? dashup.get('section').get('_id') : null,
    });

    // replace info
    props.dashup.set('pages', data.pages);

    // exported
    setImporting(false);
    setDefaulting(false);

    // hide
    (props.onClose || props.onHide)();

    // refresh
    props.onRefresh();
  };

  // check struct
  if (!struct) return null;

  // tabs
  const tabs = struct.data?.tabs || ['Config', 'Connects'];

  // check tab
  if (!tab) tab = `${tabs[0]}`.toLowerCase();

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
        onClose={ props.onHide || props.onClose }
      >
        <Box pt={ 4 } pb={ 2 }>
          <Stack spacing={ 2 }>
            <Stack direction="row" spacing={ 2 }>
              <Button ref={ colorRef } variant="contained" onClick={ () => setColorMenu(true) } sx={ {
                color           : page.get('color.hex') && theme.palette.getContrastText(page.get('color.hex')),
                backgroundColor : page.get('color.hex'),
              } }>
                <Icon icon={ page.get('icon') || 'pencil' } fixedWidth />
              </Button>
              <TextField
                label="Name"
                onChange={ (e) => setPage('name', e.target.value) }
                defaultValue={ page.get('name') }
                fullWidth
              />
            </Stack>

            <TextField
              rows={ 4 }
              label="Description"
              onChange={ (e) => setPage('description', e.target.value) }
              defaultValue={ page.get('description') }
              fullWidth
              multiline
            />
          </Stack>
        </Box>
        { defaulting ? (
          <Box display="flex" flex={ 1 } flexDirection="column" pt={ 2 }>
            <Typography variant="h5" gutterBottom>
              { struct.data?.default?.title }
            </Typography>
            <Box my={ 2 }>
              <Divider />
            </Box>
            { struct.data?.default?.pages.map((sPage) => {
              // return jsx
              return (
                <TextField
                  key={ sPage._id }
                  label={ sPage.type }
                  value={ sPage.name }
                  readOnly
                  fullWidth
                  InputProps={ {
                    startAdornment : (
                      <InputAdornment position="start">
                        <IconButton>
                          <Icon icon={ sPage.icon } fixedWidth />
                        </IconButton>
                      </InputAdornment>
                    ),
                  } }
                />
              );
            }) }
          </Box>
        ) : (
          <Box pt={ 2 } flex={ 1 } display="flex" flexDirection="column">
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
                    flex          : 1,
                    display       : 'flex',
                    paddingLeft   : 0,
                    paddingRight  : 0,
                    flexDirection : 'column',
                    paddingBottom : 0,
                  } }>
                    { `${tab}`.toLowerCase() === 'connects' ? (
                      <Page.Connect page={ page } dashup={ dashup } />
                    ) : (props[tab] || (
                      <View

                        { ...{
                          ...props,

                          type   : 'page',
                          view   : `${tab}`.toLowerCase(),
                          struct : type,
                        } }
                        />
                    )) }  
                  </TabPanel>
                );
              }) }
            </TabContext>
          </Box>
        ) }
        
        { !!(props.missingRequire || []).length && struct?.data?.default && (
          <Box display="flex" flex={ 0 } justifyContent="flex-end" pt={ 2 }>
            { defaulting ? (
              <Button variant="contained" color="info" onClick={ (e) => setDefaulting(false) }>
                Configure Myself
              </Button>
            ) : (
              <Button variant="contained" color="info" onClick={ (e) => setDefaulting(true) }>
                Use Default Pages
              </Button>
            ) }
            { !!defaulting && (
              <LoadingButton sx={ { ml : 1 } } onClick={ (e) => onImport(e) } disabled={ !!importing } loading={ !!importing } variant="contained" color="primary">
                { importing ? 'Importing...' : 'Use Default Pages' }
              </LoadingButton>
            ) }
          </Box>
        ) }
      </Modal>
      
      <Menu
        open={ !!colorMenu }
        onClose={ () => setColorMenu(null) }
        anchorEl={ colorRef?.current }
      >
        <MenuItem onClick={ (e) => !setIcon(true) && setColorMenu(false) }>
          <ListItemIcon>
            <Icon icon={ page.get('icon') || 'pencil' } />
          </ListItemIcon>
          <ListItemText>
            Change Icon
          </ListItemText>
        </MenuItem>
        <MenuItem onClick={ (e) => !setColor(true) && setColorMenu(false) }>
          <ListItemIcon>
            <Icon type="fas" icon="tint" />
          </ListItemIcon>
          <ListItemText>
            Change Color
          </ListItemText>
        </MenuItem>
      </Menu>

      { !!icon && <IconPicker target={ colorRef } show icon={ page.get('icon') } onClose={ () => setIcon(false) } onChange={ (icon) => setPage('icon', icon) } /> }
      { !!color && <Color target={ colorRef } show color={ page.get('color.hex') || 'transparent' } colors={ Object.values(colors) } onClose={ () => setColor(false) } onChange={ (hex) => setPage('color', hex.hex === 'transparent' ? null : hex) } /> }
    </>
  );
};

// return wrap
const DashupUIPageConfigWrap = (props = {}) => {

  // return jsx
  return (
    <DashupContext.Consumer>
      { (data) => {
        // return jsx
        return <DashupUIPageConfig { ...data } { ...props } />;
      } }
    </DashupContext.Consumer>
  );
};

// export default page menu
export default (ctx) => {
  // use context
  DashupContext = ctx;

  // return actual component
  return DashupUIPageConfigWrap;
};