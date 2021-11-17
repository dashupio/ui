
// import dependencies
import dotProp from 'dot-prop';
import SimpleBar from 'simplebar-react';
import { ReactSortable } from 'react-sortablejs';
import React, { useRef, useState, useEffect } from 'react';
import { Box, Card, useTheme, Avatar, Icon, IconButton, CardHeader, Drawer, Typography, Divider, TextField } from '../';

// import on end
import onEnd from './drag';

// let context
let DashupUIContext = null;

// create dashup grid body
const DashupUIFormMenu = (props = {}) => {
  // theme
  const theme = useTheme();

  // state
  const [search, setSearch] = useState('');

  // colors
  const colors = ['primary', 'info', 'success', 'warning', 'danger'];
  
  // use ref
  const searchRef = useRef(null);

  // use effect
  useEffect(() => {
    // focus on search ref
    searchRef.current?.focus();
  }, []);

  return (
    <DashupUIContext.Consumer>
      { (data) => {
        // available
        data.available.sort((a, b) => {
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
            hideBackdrop

            ModalProps={ {
              sx : {
                right : 'auto',
              }
            } }
          >
            <Box px={ 3 } py={ 2 } height="100%" display="flex" flexDirection="column" maxWidth={ 360 }>
              <Box display="flex" flexDirection="row" alignItems="center" mb={ 1 }>
                <Typography variant="h5">
                  { props.title || 'Form Fields' }
                </Typography>
                <IconButton onClick={ props.onClose || props.onHide } sx={ {
                  ml : 'auto',
                } }>
                  <Icon type="fas" icon="times" />
                </IconButton>
              </Box>
              <Typography gutterBottom>
                Drag one of these fields into the form where you need it.
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
                    <ReactSortable
                      id={ `${data.id}-menu` }
                      list={ data.available.sort((a, b) => {
                        // return sort
                        return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
                      }) }
                      group={ data.id }
                      onEnd={ (e) => onEnd(e, data.fields, data.setFields, data.onSaving, data.onConfig, props.onHide) }
                      setList={ () => {} }
                    >
                      { (data.available || []).sort((a, b) => {
                        // return sort
                        return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
                      }).map((field, i) => {
                        // search
                        if (search && search.length) {
                          // search string
                          const str = `${field.type} ${field.title} ${field.description}`.toLowerCase();

                          // check search
                          if (search.toLowerCase().split(' ').filter((t) => t.length).find((tag) => {
                            // find in value
                            return !str.includes(tag);
                          })) return null;
                        }

                        // return jsx
                        return (
                          <Card variant="outlined" key={ `field-${field.type}` } sx={ {
                            mb     : 2,
                            cursor : 'move'
                          } } data-type={ field.type }>
                            <CardHeader
                              avatar={ (
                                <Avatar bgColor={ dotProp.get(theme.palette, `${field.color}.main`) }>
                                  <Icon type="fas" icon={ field.icon } />
                                </Avatar>
                              ) }
                              title={ field.title }
                              subheader={ field.description }
                            />
                            <Box />
                          </Card>
                        );
                      }).filter((i) => i) }
                    </ReactSortable>
                  </SimpleBar>
                </Box>
              </Box>
            </Box>
          </Drawer>
        );
      } }
    </DashupUIContext.Consumer>
  );
};

// export default page menu
export default (ctx) => {
  // use context
  DashupUIContext = ctx;

  // return actual component
  return DashupUIFormMenu;
};

