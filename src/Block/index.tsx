
// import dependencies
import React from 'react';
import { Box, View, Stack, ToggleButton, ToggleButtonGroup, Tooltip, Icon, useTheme } from '../';

// import local
import Menu from './Menu';
import Config from './Config';

// create menu component
const DashupUIBlock = (props = {}) => {
  // set theme
  const theme = useTheme();

  // struct
  const struct = props.getBlockStruct && props.getBlockStruct(props.block.type);

  // button sx
  const buttonSx = {
    paddingLeft : 1,
    paddingRight : 1,
  };

  // return jsx
  return (
    <Box width="100%" height="100%" display="flex" position="relative" sx={ {
      '&:hover > .updating' : {
        display : 'flex',
      }
    } }>
      { !!props.updating && (
        <Box
          sx={ {
            right           : 2,
            zIndex          : 1,
            bottom          : '100%',
            padding         : 1,
            display         : 'none',
            position        : 'absolute',
            alignItems      : 'center',
            borderRadius    : 2,
            flexDirection   : 'row',
            justifyContent  : 'end',
            backgroundColor : theme.palette.mode === 'dark' ? 'darker.main' : 'lighter.main',
          } }
          className="updating"
        >
          <Stack direction="row" spacing={ 1 }>
            <ToggleButton selected color="primary" size="small" value="title" sx={ {
              paddingLeft  : 3,
              paddingRight : 3,
            } }>
              { struct?.title } Block
            </ToggleButton>

            <ToggleButtonGroup size="small" color="primary">
              <Tooltip title="Clone Block">
                <ToggleButton value="clone" onClick={ (e) => props.onClone(props.block) } sx={ buttonSx }>
                  <Icon type="fas" icon="clone" fontSize="small" />
                </ToggleButton>
              </Tooltip>
              <Tooltip title="Block Config">
                <ToggleButton value="config" onClick={ (e) => props.onConfig(props.block) } sx={ buttonSx }>
                  <Icon type="fas" icon="ellipsis-h" fontSize="small" />
                </ToggleButton>
              </Tooltip>
            </ToggleButtonGroup>
            
            <Tooltip title="Remove Block">
              <ToggleButton value="trash" size="small" onClick={ (e) => props.onRemove(props.block) } selected color="error" sx={ buttonSx }>
                <Icon type="fas" icon="trash" fontSize="small" />
              </ToggleButton>
            </Tooltip>
          </Stack>
        </Box>
      ) }

      <View type="block" view="view" struct={ props.block.type } { ...props } />
    </Box>
  );
};

// set children blocks
DashupUIBlock.Menu = Menu;
DashupUIBlock.Config = Config;

// export default
export default DashupUIBlock;