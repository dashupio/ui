

// import dependencies
import React from 'react';
import moment from 'moment';
import { Icon, Chat, Box, Paper, Dialog, DialogTitle, Stack, DialogContent } from '../';

// create menu component
const DashupUIModal = (props = {}) => {

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
            maxWidth     : '66%',
            borderRadius : 0,
          } }>
            <Box p={ 2 } flex={ 1 } sx={ {
              height        : '100%',
              display       : 'flex',
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
          </Paper>
          <Box sx={ {
            display         : 'flex',
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
                  <Box flex={ 1 }>
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