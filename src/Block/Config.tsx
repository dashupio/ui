

// import dependencies
import React, { useRef, useState } from 'react';
import { Box, Stack, View, TabContext, TabList, Button, TextField, Icon, Color, Modal, Tab, useTheme } from '../';

// colors
import colors from '../colors';

// create menu component
const DashupUIBlockConfig = (props = {}) => {
  // theme
  const theme = useTheme();

  // tabs
  const [tab, setTab] = useState('config');
  const [color, setColor] = useState(false);

  // refs
  const colorRef = useRef(null);

  // get struct
  const struct = props.getBlockStruct(props.block.type);

  // tabs
  const tabs = struct?.data?.tabs || ['config'];

  // return JSX
  return !!props.block && !!struct ? (
    <>
      <Modal
        show={ props.show }
        icon={ struct.icon || 'fa fa-align-justify' }
        title={ `${struct.title} Block` }
        dashup={ props.dashup }
        thread={ props.block.uuid }
        onClose={ props.onClose || props.onHide }
      >
        <Box pt={ 4 } pb={ 2 }>
          <Stack spacing={ 2 }>
            <Stack direction="row" spacing={ 2 }>
              <Button ref={ colorRef } variant="contained" onClick={ () => setColor(true) } sx={ {
                color           : props.block.color?.hex && theme.palette.getContrastText(props.block.color?.hex),
                backgroundColor : props.block.color?.hex,
              } }>
                <Icon type="fas" icon="tint" />
              </Button>
              <TextField
                value={ props.block.name || '' }
                label="Name"
                onChange={ (e) => props.setBlock(props.block, 'name', e.target.value) }
                fullWidth
              />
            </Stack>
          </Stack>
        </Box>

        <TabContext value={ tab }>
          <Box sx={ { borderBottom : 1, borderColor : 'divider', mb : 2 } }>
            <TabList onChange={ (e, v) => setTab(v.toLowerCase()) }>
              { tabs.map((t, i) => {
                // return jsx
                return <Tab key={ `tab-${t}` } value={ t.toLowerCase() } label={ t } />;
              }) }
            </TabList>
          </Box>
        </TabContext>

        <View
          { ...{
            ...props,

            type   : 'block',
            view   : tab,
            struct : props.block.type,
          } }
        />  
      </Modal>

      { !!color && <Color target={ colorRef } show color={ props.block?.hex } colors={ Object.values(colors) } onClose={ () => setColor(false) } onChange={ (hex) => props.setBlock(props.block, 'color', hex.hex === 'transparent' ? null : hex) } /> }
    </>
  ) : null;
};

// export default page menu
export default DashupUIBlockConfig;