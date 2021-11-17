
// import block
import SimpleBar from 'simplebar-react';
import { Icon } from '../';
import { solid } from 'font-awesome-icon-chars';
import React, { useState } from 'react';
import { Box, Grid, Popover, TextField, IconButton } from '@mui/material';

// dashup ui color
const DashupUIIconPicker = (props = {}) => {
  // use state
  const [search, setSearch] = useState('');

  // get icons
  const getIcons = () => {
    // return icons
    return (solid || []).filter((icon) => {
      // icon
      return search && search.length ? icon.name.includes(`${search}`.toLowerCase()) : true;
    }).slice(0, 4 * 10);
  };

  // on icon
  const onIcon = (e, name) => {
    // prevent default
    e.preventDefault();
    e.stopPropagation();

    // run super
    if (props.onChange) props.onChange(name);
  };
  
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
      <Box p={ 2 }>
        <TextField
          label="Search"
          value={ search }
          onChange={ (e) => setSearch(e.target.value) }
        />
      </Box>
      <Box width={ 240 } height={ 360 }>
        <SimpleBar style={ {
          width  : '100%',
          height : '100%',
        } }>
          <Grid container spacing={ 1 }>
            { getIcons().map((icon) => {
              // return jsx
              return (
                <Grid key={ icon.name } item xs={ 3 } sx={ {
                  textAlign : 'center',
                } }>
                  <IconButton onClick={ (e) => onIcon(e, icon.name) } color={ props.icon && props.icon.split(' ')[0] === icon.name ? 'primary' : undefined }>
                    <Icon icon={ icon.name } />
                  </IconButton>
                </Grid>
              );
            }) }
          </Grid>
        </SimpleBar>
      </Box>
    </Popover>
  );
};

// export default
export default DashupUIIconPicker;