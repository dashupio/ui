
// import dependencies
import React from 'react';
import { Fab, styled, Stack, ToolTip, Box, colors, Typography, Avatar, IconButton } from '../';

// let context
let DashupContext = null;

// global timer
let timer;

// global debounce
const debounce = (func, timeout = 1000) => {

  // return debounced
  return (...args) => {
    // clear timeout previously
    clearTimeout(timer);

    // create new timeout
    timer = setTimeout(() => func(...args), timeout);
  };
}

// create menu component
const DashupUIPageMenu = (props = {}) => {

  // get active
  const getActive = (page, dashup) => {
    // return actives
    return [...(dashup.get('active') || [])].filter((a) => a.page === page.get('_id'));
  };

  // return JSX
  return (
    <DashupContext.Consumer>
      { ({ page, dashup, color, icon, title, setPage }) => {

        // page fab
        const PageFab = styled(Fab)(({ theme }) => ({
          color           : theme.palette.getContrastText(color?.hex || colors[color] || color || theme.pallette.text),
          backgroundColor : color?.hex || colors[color] || color || 'transparent',
          '&:hover': {
            backgroundColor : color?.hex || colors[color] || color || theme.pallette.primary,
          },
        }));

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
              <i className={ `fa-${icon}` } />
            </PageFab>
            <Typography variant="h4" component="h1" sx={ { ml : 2 } }>
              { title }
            </Typography>
            <Box sx={ { ml : 'auto' } }>
              <Stack direction="row" spacing={ 1 } sx={ { alignItems : 'center' } }>
                { props.presence && !!getActive(page, dashup).length && (
                  getActive(page, dashup).map((active, i) => {
                    // return jsx
                    return (
                      <ToolTip key={ `active-${active.id}` } title={ active.name }>
                        <Box>
                          <Avatar name={ active.name } image={ active.avatar } sx={ { width : 24, height : 24 } } />
                        </Box>
                      </ToolTip>
                    )
                  })
                ) }
                { props.children }
                { props.onShare && page && dashup.can(page, 'manage') && (
                  <ToolTip title="Share Page">
                    <IconButton onClick={ (e) => props.onShare(e) }>
                      <i className="fa fa-fw fa-share text-base" />
                    </IconButton>
                  </ToolTip>
                ) }
                { props.onConfig && page && dashup.can(page, 'manage') && (
                  <ToolTip title="Page Settings">
                    <IconButton onClick={ (e) => props.onConfig(e) }>
                      <i className="fa fa-fw fa-ellipsis-h text-base" />
                    </IconButton>
                  </ToolTip>
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