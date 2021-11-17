
// import dependencies
import { Menu } from '@mui/material';
import React, { useState } from 'react';
import { Box, Chip, Stack, Icon, MenuItem, Divider, TextField, InputAdornment, IconButton, Query, Tooltip, ListItemIcon, ListItemText } from '../';

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
const DashupUIPageFilter = (props = {}) => {
  // state
  const [filter, setFilter] = useState(false);
  const [tagMenu, setTagMenu] = useState(null);
  const [sortMenu, setSortMenu] = useState(null);

  // has user
  const hasTags = (page) => {
    // get user
    if (props.tags) return typeof props.hasTags === 'function' ? props.hasTags() : true;

    // check page
    return !!(props.tags || page.get('data.tag') || []).length;
  };

  // has user
  const hasUser = (page) => {
    // get user
    if (props.users) return typeof props.hasUser === 'function' ? props.hasUser() : true;

    // check page
    return !!(props.users || page.get('data.user') || []).length;
  };

  // get tags
  const getTags = (page, fields) => {
    // find in page
    return fields.filter((f) => (props.tags || page.get('data.tag') || []).includes(f.uuid));
  };

  // return JSX
  return (
    <DashupContext.Consumer>
      { ({ page, dashup, setUser, getFields, getFieldStruct }) => {

        // get fields
        const fields = (props.getFields || getFields)();

        // get tags
        const tags = props.onTag && (props.getTags || getTags)(page, fields);

        // get sort field
        const sortField = page.get('data.sort.field') && fields.find((f) => f.uuid === page.get('data.sort.field'));

        // return jsx
        return (
          <>
            <Box sx={ {
              width      : '100%',
              display    : 'flex',
              alignItems : 'center',
            } } mb={ 2 }>

              { !!props.onSearch && (
                <TextField
                  label="Search"
                  onChange={ (e) => debounce(props.onSearch, 500)(e.target.value) }
                  defaultValue={ page.get('data.search') || '' }
                  InputProps={ {
                    startAdornment : (
                      <InputAdornment position="start">
                        <Icon type="fas" icon="search" fixedWidth />
                      </InputAdornment>
                    ),
                  } }
                />
              ) }

              <Stack direction="row" spacing={ 1 } ml="auto" alignItems="center">

                { !!hasUser(page) && eden?.user?.exists() && (
                  <Tooltip title={ page.get('user.filter.me') ? 'Show All' : 'Show Mine' }>
                    <IconButton color={ page.get('user.filter.me') ? 'primary' : undefined } onClick={ (e) => setUser('filter.me', !page.get('user.filter.me')) }>
                      <Icon type="fas" icon="user" fixedWidth />
                    </IconButton>
                  </Tooltip>
                ) }
                    
                { !!sortField && (
                  <Tooltip title={ `${sortField.label || sortField.name}: ${page.get('data.sort.way') === 1 ? 'Asc' : 'Desc'}` }>
                    <Chip
                      icon={ page.get('data.sort.way') === -1 ? (
                        <Icon type="fas" icon="sort-up" fixedWidth />
                      ) : page.get('data.sort.way') === 1 ? (
                        <Icon type="fas" icon="sort-down" fixedWidth />
                      ) : null }
                      label={ sortField.label || sortField.name }
                      onClick={ (e) => props.onSort({ field : sortField.uuid }) }
                      onDelete={ (e) => props.onSort({}) }
                    />
                  </Tooltip>
                ) }

                { !!props.onSort && (
                  <>
                    <Tooltip title="Sort View">
                      <IconButton color={ page.get('user.filter.me') ? 'primary' : undefined } onClick={ (e) => setSortMenu(e.target) }>
                        { page.get('data.sort.way') === -1 ? (
                          <Icon type="fas" icon="sort-up" fixedWidth />
                        ) : page.get('data.sort.way') === 1 ? (
                          <Icon type="fas" icon="sort-down" fixedWidth />
                        ) : (
                          <Icon type="fas" icon="sort" fixedWidth />
                        ) }
                      </IconButton>
                    </Tooltip>
                    <Menu
                      open={ !!sortMenu }
                      onClose={ () => setSortMenu(null) }
                      anchorEl={ sortMenu }
                    >
                      { fields.map((field, i) => {
                        // return jsx
                        return (
                          <MenuItem
                            key={ `sort-${field.uuid}` }
                            onClick={ () => !setSortMenu(null) && props.onSort({ field : field.uuid }) }
                          >
                            <ListItemIcon>
                              <Icon type="fas" icon={ getFieldStruct(field.type)?.icon } fixedWidth />
                            </ListItemIcon>
                            <ListItemText>{ field.label }</ListItemText>
                          </MenuItem>
                        );
                      }) }
                      <Divider />
                      <MenuItem
                        key={ `sort-created` }
                        onClick={ () => !setSortMenu(null) && props.onSort({ field : 'created_at' }) }
                      >
                        Created At
                      </MenuItem>
                      <MenuItem
                        key={ `sort-updated` }
                        onClick={ () => !setSortMenu(null) && props.onSort({ field : 'updated_at' }) }
                      >
                        Updated at
                      </MenuItem>
                    </Menu>
                  </>
                ) }
                    
                { (page.get('user.filter.tags') || []).map((tag, i) => {
                  // get field
                  const field = tags.find((f) => f.uuid === tag?.field);

                  // check field
                  if (!field) return null;

                  // get option
                  const option = (field.options || []).find((opt) => opt.value === tag?.value) || {};

                  // jsx
                  return (
                    <Tooltip key={ `filter-${tag?.field}-${tag?.value}`} title={ `${field.label || field.name}: ${option.label || tag?.value}` }>
                      <Chip
                        sx={ {
                          color       : option.color?.hex && theme.palette.getContrastText(option.color?.hex),
                          borderColor : option.color?.hex,
                        } }
                        icon={ <Icon type="fas" icon="tag" fixedWidth /> }
                        label={ option.label || tag?.value }
                        onDelete={ (e) => props.onTag(field, option || tag) }
                      />
                    </Tooltip>
                  );
                }) }

                { !!props.onTag && hasTags(page) && (
                  <>
                    <Tooltip title="Filter by Tag">
                      <IconButton color={ page.get('user.filter.me') ? 'primary' : undefined } onClick={ (e) => setTagMenu(e.target) }>
                        <Icon type="fas" icon="tag" fixedWidth />
                      </IconButton>
                    </Tooltip>
                    <Menu
                      open={ !!tagMenu }
                      onClose={ () => setTagMenu(null) }
                      anchorEl={ tagMenu }
                    >
                      { tags.reduce((accum, tag, i) => {
                        // arr
                        const arr = [];

                        // push
                        if (i !== 0) arr.push(<Divider key={ `div-${tag.uuid}` } />);

                        // push
                        arr.push(...(tag.options || []).map((option, i) => {
                          // return jsx
                          return (
                            <MenuItem
                              key={ `tag-${tag.uuid}-${option.value}` }
                              onClick={ () => !setTagMenu(null) && props.onTag(tag, option) }
                            >
                              { option.label }
                            </MenuItem>
                          );
                        }));

                        // push
                        accum.push(...arr);
                        return accum;
                      }, []) }
                    </Menu>
                  </>
                ) }

                { !!props.onFilter && (
                  <Tooltip title="Filter View">
                    <IconButton color={ (page.get('user.query') ? page.get('user.query') : '[]').length > 2 || filter ? 'primary' : undefined } onClick={ (e) => setFilter(!filter) }>
                      <Icon type="fas" icon="filter" fixedWidth />
                    </IconButton>
                  </Tooltip>
                ) }
              </Stack>
            </Box>

            { !!filter && !!props.onFilter && (
              <Box>
                <Query
                  page={ page }
                  query={ props.query || page.get('user.query') }
                  dashup={ dashup }
                  fields={ fields }
                  onChange={ props.onFilter }
                  isString={ props.isString }
                  getFieldStruct={ getFieldStruct }
                  />
              </Box>
            ) }
          </>
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
  return DashupUIPageFilter;
};