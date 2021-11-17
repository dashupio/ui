
// import block
import React from 'react';
import { Popover } from '@mui/material';
import { BlockPicker } from 'react-color';

// dashup ui color
const DashupUIColor = (props = {}) => {
  
  // return jsx
  return (
    <Popover
      open={ !!props.show }
      onClose={ () => props.onClose(false) }
      anchorEl={ props.target?.current || props.target }
      anchorOrigin={ {
        vertical   : 'bottom',
        horizontal : 'left',
      } }
    >
      <BlockPicker triangle="hide" colors={ props.colors } color={ props.color } onChangeComplete={ (color) => props.onChange({
        hex : color.hex,
        hsl : color.hsl,
        drk : color.hsl.l < .4,
      }) } />
    </Popover>
  );
};

// export default
export default DashupUIColor;