
// import
import React from 'react';
import dotProp from 'dot-prop';
import { Avatar } from '@mui/material';
import { useTheme } from '..';

// avatar
const DashupAvatar = (props = {}) => {
  // theme
  const theme = useTheme();

  // key
  const thumbKey = props.thumb !== 'original' ? `thumbs.${props.thumb || '2x-sq'}.url` : `url`;

  // get image thumb
  const name = props.name || '';
  const thumb = !props.image ? props.src : dotProp.get(props, `image.${thumbKey}`) || dotProp.get(props, `image.0.${thumbKey}`);

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
      children : ((name || '').length ? `${(name.split(' ')[0] || [])[0] || ''}${(name.split(' ')[1] || [])[0] || ''}`.toUpperCase() : null),
    };
  };

  // color
  const color = props.bgColor || !!(name || '').length && stringToColor(name);

  // get sx
  const sx = {
    color           : color && theme.palette?.getContrastText(dotProp.get(theme.palette, color) || color),
    backgroundColor : color,

    ...props.sx,
  };
  const goodProps = {
    ...props,
  };

  // delete bgColor
  delete goodProps.bgColor;

  // check children
  if (props.children) {
    // return original
    return <Avatar { ...goodProps } sx={ sx } />;
  }

  // return value
  return thumb ? (
    <Avatar { ...goodProps } sx={ sx } alt={ name } src={ thumb } />
  ) : (
    <Avatar { ...goodProps } sx={ sx } { ...stringAvatar() } />
  );
};

// export default
export default DashupAvatar;