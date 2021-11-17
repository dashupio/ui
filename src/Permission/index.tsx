
// react
import React from 'react';
import { Box, useTheme, Tooltip, TextField, InputAdornment, Icon, IconButton } from '../';

// dashup ui permission
const DashupUIPermission = (props = {}) => {
  // theme
  const theme = useTheme();

  // get pages
  const getPages = (page) => {
    // set page
    if (!page) page = props.page;

    // return items
    return Array.from(props.dashup.get('pages').values()).filter((item) => !item.get('archived') && item.get('parent') === page.get('_id')).sort((a, b) => {
      // get order
      if (a.get('order') > b.get('order')) return 1;
      if (a.get('order') < b.get('order')) return -1;

      // return no change
      return 0;
    });
  };

  // get icon
  const getIcon = () => {
    // pencil
    return (props.page.get('icon') || 'pencil fa');
  };

  // on toggle
  const onToggle = (type) => {
    // update
    if (props.hasAcl(props.page, type)) {
      // remove
      props.removeAcl(props.page, type);
    } else {
      // add
      props.addAcl(props.page, type);
    }
  };

  // buttons
  const buttons = [['View', 'eye'], ['Submit', 'pencil'], ['Manage', 'cog']];

  // color
  const color = props.page.get('color');

  // no archived
  if (props.page.get('_meta.archived')) return null;

  // return jsx
  return (
    <>
      <TextField
        label={ '' }
        value={ props.page.get('name') }
        fullWidth
        InputProps={ {
          readOnly       : true,
          startAdornment : (
            <InputAdornment position="start">
              <IconButton sx={ {
                color      : color?.hex && theme.palette.getContrastText(color.hex),
                background : color?.hex,
              } }>
                <Icon icon={ getIcon() } fixedWidth />
              </IconButton>
            </InputAdornment>
          ),
          endAdornment : (
            <>
              { buttons.map(([title, icon]) => {
                // set value
                const type = title.toLowerCase();

                // color
                const color = props.hasAcl(props.page, type) ? 'success' : undefined;
                
                // return jsx
                return (
                  <Tooltip key={ `btn-${title}` } title={ `Can ${title}` }>
                    <InputAdornment position="end">
                      <IconButton sx={ {
                        color           : color && theme.palette.getContrastText(theme.palette[color].main),
                        backgroundColor : color && `${color}.main`,
                      } } onClick={ () => onToggle(type) }>
                        <Icon type="fas" icon={ icon } fixedWidth />
                      </IconButton>
                    </InputAdornment>
                  </Tooltip>
                );
              }) }
            </>
          )
        } }
      />
      
      { !!getPages(props.page) && (
        <Box pl={ 2 }>
          { getPages(props.page).map((child, i) => {
            // return jsx
            return (
              <DashupUIPermission
                key={ `child-${child.get('_id')}` }
                page={ child }
                dashup={ props.dashup }
                hasAcl={ props.hasAcl }
                addAcl={ props.addAcl }
                removeAcl={ props.removeAcl }
                />
            )
          }) }
        </Box>
      ) }
    </>
  );
};

// export default
export default DashupUIPermission;