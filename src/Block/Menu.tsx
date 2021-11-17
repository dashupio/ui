
// import dependencies
import dotProp from 'dot-prop';
import SimpleBar from 'simplebar-react';
import React, { useState } from 'react';
import { Box, Card, useTheme, Avatar, Icon, IconButton, CardHeader, Button, Drawer, Typography, Divider, TextField } from '../';

// create dashup grid body
const DashupUIBlockMenu = (props = {}) => {
  // theme
  const theme = useTheme();

  // selected
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);

  // colors
  const colors = ['primary', 'info', 'success', 'warning', 'danger'];

  // available
  props.available.sort((a, b) => {
    // return sort
    return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
  }).forEach((item, i) => {
    // i
    let t = i;

    // while
    while (t > (colors.length - 1)) {
      t = t - colors.length;
    }

    // color
    item.color = item.color || colors[t];
  });

  return (
    <Drawer
      open={ props.open || props.show }
      anchor="left"
      onClose={ props.onClose || props.onHide }
    >
      <Box px={ 3 } py={ 2 } height="100%" display="flex" flexDirection="column" maxWidth={ 360 }>
        <Box display="flex" flexDirection="row" alignItems="center" mb={ 1 }>
          <Typography variant="h5">
            { props.title || 'Grid Blocks' }
          </Typography>
          <IconButton onClick={ props.onClose || props.onHide } sx={ {
            ml : 'auto',
          } }>
            <Icon type="fas" icon="times" />
          </IconButton>
        </Box>
        <Typography gutterBottom>
          Select one of these blocks and click "Add Block" to add it to your grid.
        </Typography>

        <TextField
          label="Search"
          value={ search }
          onChange={ (e) => setSearch(e.target.value) }
          fullWidth
          placeholder="Filter Fields"
        />

        <Box my={ 2 }>
          <Divider />
        </Box>

        <Box flex={ 1 } position="relative">
          <Box position="absolute" top={ 0 } left={ 0 } right={ 0 } bottom={ 0 }>
            <SimpleBar style={ {
              width  : '100%',
              height : '100%',
            } }>
              { (props.available || []).sort((a, b) => {
                // return sort
                return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
              }).map((block, i) => {
                // search
                if (search && search.length) {
                  // search string
                  const str = `${block.type} ${block.title} ${block.description}`.toLowerCase();

                  // check search
                  if (search.toLowerCase().split(' ').filter((t) => t.length).find((tag) => {
                    // find in value
                    return !str.includes(tag);
                  })) return null;
                }

                // return jsx
                return (
                  <Card variant="outlined" key={ `block-${block.type}` } sx={ {
                    mb              : 2,
                    color           : block.type === selected ? theme.palette.getContrastText(theme.palette.primary.main) : undefined,
                    cursor          : 'pointer',
                    backgroundColor : block.type === selected ? 'primary.light' : undefined,

                  } } onClick={ (e) => setSelected(block.type) }>
                    <CardHeader
                      sx={ {
                        color : block.type === selected ? theme.palette.getContrastText(theme.palette.primary.main) : undefined,
                      } }
                      avatar={ (
                        <Avatar bgColor={ block.type === selected ? 'primary.main' : block.color && dotProp.get(theme.palette, `${block.color}.main`) }>
                          <Icon type="fas" icon={ block.icon } />
                        </Avatar>
                      ) }
                      title={ block.title }
                      subheader={ block.description }
                    />
                    <Box />
                  </Card>
                );
              }) }
            </SimpleBar>
          </Box>
        </Box>

        { !!selected && (
          <>
            <Box my={ 2 }>
              <Divider />
            </Box>
            <Button color="primary" size="large" variant="contained" fullWidth onClick={ (e) => {
              props.onBlock(selected);
              (props.onClose || props.onHide)();
            } }>
              Add Block
            </Button>
          </>
        ) }
      </Box>
    </Drawer>
  );
};

// export default page menu
export default DashupUIBlockMenu;

