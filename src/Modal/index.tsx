

// import dependencies
import React from 'react';
import moment from 'moment';
import SimpleBar from 'simplebar-react';
import { Icon, Chat, Box, Paper, Dialog, DialogTitle, Stack, DialogContent, useMediaQuery } from '../';

// create menu component
const DashupUIModal = (props = {}) => {
  // is mobile
  const isMobile = useMediaQuery('(max-width:800px)');

  // return JSX
  return (
    <Dialog
      open={ !!props.show || !!props.open }
      onClose={ props.onClose }
      maxWidth="lg"
      fullWidth
    >
      <DialogContent sx={ {
        padding         : 0,
        backgroundColor : 'body.main',
      } }>
        <Box flex={ 1 } sx={ {
          display       : 'flex',
          minHeight     : '75vh',
          flexDirection : 'row',
        } }>
          <Paper sx={ {
            flex         : 1,
            maxWidth     : isMobile ? undefined : '66%',
            position     : 'relative',
            borderRadius : 0,
          } }>
            <SimpleBar style={ {
              width  : '100%',
              height : '75vh',
            } }>
              <Box p={ 2 } flex={ 1 } sx={ {
                display       : 'flex',
                minHeight     : '75vh',
                flexDirection : 'column',
              } }>
                { !!props.title && (
                  <DialogTitle sx={ { padding : 0 } }>
                    <Box display="flex" flexDirection="row" alignItems="center">
                      { !!props.icon && (
                        <Box mr={ 2 }>
                          <Icon icon={ props.icon } fixedWidth />
                        </Box>
                      ) }
                      { props.title }
                      { !!props.headerButtons && (
                        <Box ml="auto">
                          { props.headerButtons }
                        </Box>
                      ) }
                    </Box>
                  </DialogTitle>
                ) }
                { props.children }
              </Box>
            </SimpleBar>
          </Paper>
          <Box sx={ {
            display         : isMobile ? 'none' : 'flex',
            maxWidth        : '34%',
            flexDirection   : 'column',
            backgroundColor : 'background.default',
          } } p={ 2 } flex={ 1 }>
            <DialogTitle sx={ { padding : 0 } }>
              <Stack direction="row" spacing={ 2 }>
                <Box flex={ 1 } textAlign="right">
                  <small>
                    { moment(props.created || new Date()).format('Do MMM, h:mma') }
                  </small>
                </Box>
              </Stack>
            </DialogTitle>
            { props.sidebar }
            <Box flex={ 1 }>
              <Chat size="sm" dashup={ props.dashup } page={ props.page } thread={ props.thread }>
                <Stack spacing={ 2 } sx={ {
                  height : '100%',
                } }>
                  <Box flex={ 1 } display="flex">
                    <Chat.Thread />
                  </Box>
                  <Chat.Input />
                </Stack>
              </Chat>
            </Box>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

// export default page menu
export default DashupUIModal;