
// import block
import React from 'react';
import { BlockPicker } from 'react-color';
import { Overlay, Popover } from '../';

// dashup ui color
const DashupUIColor = (props = {}) => {
  
  // return jsx
  return (
    <Overlay show={ !!props.show } target={ props.target?.current || props.target } onHide={ () => props.onHide(false) } rootClose placement={ props.placement || 'right-start' }>
      <Popover className="bg-transparent" arrowProps={ {
        ':after' : {
          borderRightColor : props.color,
        }
      } }>
        <BlockPicker triangle="hide" colors={ props.colors } color={ props.color } onChangeComplete={ (color) => props.onChange({
          hex : color.hex,
          hsl : color.hsl,
          drk : color.hsl.l < .4,
        }) } />
      </Popover>
    </Overlay>
  );
};

// export default
export default DashupUIColor;