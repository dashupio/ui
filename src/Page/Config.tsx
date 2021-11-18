

// import dependencies
import { Tab } from '@mui/material';
import React, { useRef, useState } from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { colors, Page, Menu, MenuItem, ListItemIcon, ListItemText, Modal, Icon, View, Color, Box, TextField, Stack, Button, IconPicker } from '../';

// let context
let DashupContext = null;

// create menu component
const DashupUIPageConfig = (props = {}) => {
  // tabs
  let [tab, setTab] = useState(null);
  const [icon, setIcon] = useState(false);
  const [color, setColor] = useState(false);
  const [colorMenu, setColorMenu] = useState(false);

  // ref
  const colorRef = useRef(null);

  // return JSX
  return (
    <DashupContext.Consumer>
      { (data) => {
        // destruct
        const { type, page, dashup, setPage, getPageStruct } = data;

        // get struct
        const struct = getPageStruct();

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
                        paddingLeft   : 0,
                        paddingRight  : 0,
                        paddingBottom : 0,
                      } }>
                        { `${tab}`.toLowerCase() === 'connects' ? (
                          <Page.Connect page={ page } dashup={ dashup } />
                        ) : (props[tab] || (
                          <View

                            { ...{
                              ...data,

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
      } }
    </DashupContext.Consumer>
  );
};

// export default page menu
export default (ctx) => {
  // use context
  DashupContext = ctx;

  // return actual component
  return DashupUIPageConfig;
};