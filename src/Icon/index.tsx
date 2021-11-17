
// import react
import React from 'react';
import { Box, Icon } from '@mui/material';

// dashup ui icon
const DashupUIIcon = (props = {}) => {
  // split out
  const split = (props.icon || '').split(' ');

  // fixed
  let fixed = props.fixedWidth || split.includes('fa-fw');

  // let size
  let size = props.type || 'fas';
  ['fat', 'fab', 'fas', 'fa', 'fad'].forEach((type) => {
    // check includes
    if (split.includes(type)) size = type;
  });

  // get icon
  const icon = (split.find((s) => ![size, 'fa-fw'].includes(s)) || props.default || 'question-circle').replace('fa-', '');

  // return icon
  return (
    <Icon sx={ {
      ...props.sx,

      display        : 'inline-flex',
      alignItems     : 'center',
      justifyContent : 'center',
    } } fontSize={ props.fontSize }>
      <Box sx={ {
        fontSize : '65%',
      } } className={ `${size} fa-${icon}${fixed ? ' fa-fw' : ''}${props.spin ? ' fa-spin' : ''}`} />
    </Icon>
  );
};

// export default
export default DashupUIIcon;