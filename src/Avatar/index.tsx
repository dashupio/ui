
// import
import React from 'react';
import dotProp from 'dot-prop';
import { Avatar } from '@mui/material';

// avatar
const DashupAvatar = (props = {}) => {
  // get image thumb
  const name = props.name;
  const thumb = dotProp.get(props, 'image.thumbs.2x-sq.url') || dotProp.get(props, 'image.0.thumbs.2x-sq.url');

  // string to color
  const stringToColor = (string) => {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.substr(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  };

  // string avatar
  const stringAvatar = () => {
    // return
    return {
      sx : {
        ...props.sx,

        bgcolor : stringToColor(name),
      },
      children : `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  };

  // return value
  return thumb ? (
    <Avatar { ...props } alt={ name } src={ thumb } />
  ) : (
    <Avatar { ...props } { ...stringAvatar() } />
  );
};

// export default
export default DashupAvatar;