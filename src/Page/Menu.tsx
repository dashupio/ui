
// import dependencies
import React from 'react';
import { Fab, Icon, styled, Stack, Tooltip, Box, Typography, Avatar, IconButton, AvatarGroup } from '../';

// let context
let DashupContext = null;

// create menu component
const DashupUIPageMenu = (props = {}) => {

  // get active
  const getActive = (page, dashup) => {
    // return actives
    return [...(dashup.get('active') || [])].filter((a) => a.page === page?.get('_id'));
  };

  // disable menu
  const disableMenu = !!(typeof eden !== 'undefined' ? eden : {}).state?.share?.disableMenu;

  // return JSX
  return disableMenu ? null : (
    <DashupContext.Consumer>
      { ({ page, dashup, color, icon, title, onShare, onConfig }) => {

        // set values
        onShare = props.onShare || onShare;
        onConfig = props.onConfig || onConfig;

        // page fab
        const PageFab = styled(Fab)(({ theme }) => {
          // return theme
          return {   
            color           : theme.palette.getContrastText(color?.hex || theme.palette.background.default),
            boxShadow       : 'none',
            backgroundColor : color?.hex || theme.palette.background.default,

            '&:hover' : {
              backgroundColor : color?.hex || theme.palette.background.default,
            }
          };
        });

        // return styled
        return (
          <Box sx={ {
            pt            : 2,
            pb            : 2,
            mb            : 3,
            display       : 'flex',
            alignItems    : 'center',
            flexDirection : 'row',
          } }>
            <PageFab size="medium">
              <Icon icon={ page?.get('icon') || icon } fixedWidth />
            </PageFab>
            <Typography variant="h4" component="h1" sx={ { ml : 2 } }>
              { title }
            </Typography>
            <Box sx={ { ml : 'auto' } }>
              <Stack direction="row" spacing={ 1 } sx={ { alignItems : 'center' } }>

                <AvatarGroup max={ 4 } mr={ 1 }>
                  { props.presence && !!getActive(page, dashup).length && (
                    getActive(page, dashup).map((active, i) => {
                      // return jsx
                      return (
                        <Tooltip title={ active.name } key={ `active-${active.id || active._id}` }>
                          <Box>
                            <Avatar name={ active.name } image={ active.avatar } sx={ {
                              width  : 30,
                              height : 30,
                            } } />
                          </Box>
                        </Tooltip>
                      )
                    })
                  ) }
                </AvatarGroup>
                
                { props.children }
                
                { onShare && page && dashup.can(page, 'manage') && (
                  <Tooltip title="Share Page">
                    <IconButton onClick={ (e) => onShare(e) }>
                      <Icon type="fas" icon="share-alt" fixedWidth />
                    </IconButton>
                  </Tooltip>
                ) }
                { onConfig && page && dashup.can(page, 'manage') && (
                  <Tooltip title="Page Settings">
                    <IconButton onClick={ (e) => onConfig(e) }>
                      <Icon type="fas" icon="ellipsis-h" fixedWidth />
                    </IconButton>
                  </Tooltip>
                ) }
              </Stack>
            </Box>
          </Box>
        );
      } }
    </DashupContext.Consumer>
  );
};

// export default page menu
export default (ctx) => {
  // use context
  DashupContext = ctx;

  // return actual component
  return DashupUIPageMenu;
};