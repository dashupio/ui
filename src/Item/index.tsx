
// import dependencies
import dotProp from 'dot-prop';
import { Card, CardContent } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Hbs, Box, Stack, Tooltip, Menu, Icon, Badge, IconButton, Avatar, Chip, View, useTheme } from '../';

// create menu component
const DashupUIItem = (props = {}) => {
  // theme
  const theme = useTheme();

  // use state
  const [count, setCount] = useState(0);
  const [updated, setUpdated] = useState(new Date());
  const [tagOpen, setTagOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);

  // add listeners
  useEffect(() => {
    // check page
    if (!props.page) return;

    // on update
    const onUpdate = () => {
      // updated
      setUpdated(new Date());
    };

    // on update
    props.dashup.action({
      type   : 'page',
      struct : 'channel',
    }, 'count', props.item.get('_id')).then(setCount);
    props.dashup.socket.on(`count.${props.item.get('_id')}`, setCount);

    // on update
    props.item.on('update', onUpdate);

    // return unlisten
    return () => {
      // off
      props.item.removeListener('update', onUpdate);
      props.dashup.socket.off(`count.${props.item.get('_id')}`, setCount);
    };
  }, [props.item && props.item.get('_id'), props.page && props.page.get('_id')]);

  // get color
  const getColor = () => {
    // color tag
    const colorTag = hasTags() && getTags(getTagFields().find((t) => getTags(t).length))[0];

    // get color
    return colorTag?.color ? {
      color           : colorTag.color?.hex && theme.palette.getContrastText(colorTag.color?.hex),
      backgroundColor : colorTag.color?.hex,
    } : null;
  };

  // get tag types
  const getTagFields = () => {
    // check get field
    if (!props.getField) return [];

    // set types
    let types = typeof props.tag !== 'undefined' ? props.tag : (props.page.get('data.tag') || []);
    if (!Array.isArray(types)) types = [types];

    // return fields
    return types.map((f) => props.getField(f)).filter((f) => f);
  };

  // get user types
  const getUserFields = () => {
    // check get field
    if (!props.getField) return [];
    
    // set types
    let types = typeof props.user !== 'undefined' ? props.user : (props.page.get('data.user') || []);
    if (!Array.isArray(types)) types = [types];

    // return fields
    return types.map((f) => props.getField(f)).filter((f) => f);
  }

  // get tags
  const getTags = (tagField) => {
    // tag field
    if (!tagField) return [];

    // get options
    const options = tagField.options || [];

    // check options
    if (!options.length) return [];

    // get value
    let val = props.item.get(tagField.name || tagField.uuid) || [];

    // set value
    if (!Array.isArray(val)) val = [val].filter((v) => v);

    // tags
    return options.filter((t) => {
      // return has tag
      return val.includes(t.value);
    });
  };

  // get users
  const getUsers = (userField) => {
    // check options
    if (!userField) return [];

    // get value
    let val = props.item.get(userField.name || userField.uuid) || [];

    // set value
    if (!Array.isArray(val)) val = [val].filter((v) => v);

    // tags
    return val;
  };

  // has tags
  const hasTags = () => {
    // check page
    if (!props.page) return;

    // tag uuid
    return !!(props.tag || props.page.get('data.tag') || []).length;
  };

  // on tag
  const onUser = (field, value) => {
    // get tag value
    props.item.set(field.name || field.uuid, value);
    props.item.save();
  };

  // on tag
  const onTag = (field, value) => {
    // get tag value
    let tagVal = (props.item.get(field.name || field.uuid) || []);

    // check array
    if (!Array.isArray(tagVal)) tagVal = [tagVal].filter((t) => t && typeof t === 'string');

    // check includes
    if (tagVal.includes(value)) {
      tagVal = tagVal.filter((v) => v !== value);
    } else {
      tagVal.push(value);
    }

    // set and save
    props.item.set(field.name || field.uuid, field.multiple ? tagVal : tagVal.pop());
    props.item.save();
  };

  // return jsx
  return (!props.item || props.item.get('archived')) ? null : (
    <Card className="DuiItemCard" variant={ props.variant } sx={ {
      color           : props.color && theme.palette.getContrastText(dotProp.get(theme.palette, props.color)),
      borderColor     : !props.variant && getColor()?.backgroundColor,
      borderLeftWidth : getColor()?.backgroundColor && !props.variant ? 3 : undefined,
      borderLeftStyle : 'solid',
      backgroundColor : props.color,
    } }>
      { !!hasTags() && (
        <CardContent sx={ {
          pb    : 0,
          color : props.color && theme.palette.getContrastText(dotProp.get(theme.palette, props.color)),
        } }>
          <Stack spacing={ 1 } direction="row" flexWrap="wrap">
            { getTagFields().map((type, i) => {
              // return jsx
              return (
                <Stack spacing={ 1 } direction="row" key={ `tag-${type.uuid}` } alignItems="center">
                  { getTags(type).map((tag, a) => {
                    // get color
                    const color = tag.color?.hex;

                    // return jsx
                    return (
                      <Tooltip title={ `${type.label}: ${tag.value}`} key={ `tag-${type.uuid}-${tag.value}` }>
                        <Chip
                          sx={ {
                            color           : color && theme.palette?.getContrastText(color),
                            backgroundColor : color,
                          } }
                          size="small"
                          label={ tag.label }
                          onClick={ (e) => setTagOpen({ type : type.uuid, el : e.target }) }
                          onDelete={ () => {} }
                        />
                      </Tooltip>
                    );
                  }) }

                  <Tooltip title={ `Add ${type.label}` }>
                    <IconButton onClick={ (e) => setTagOpen({ type : type.uuid, el : e.target }) } size="small">
                      <Icon type="fas" icon="tag" fontSize="small" />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    open={ tagOpen?.type === type.uuid }
                    onClose={ () => setTagOpen(null) }
                    anchorEl={ tagOpen?.el }
                    MenuListProps={ {
                      sx : {
                        width : 240,
                      },
                    } }
                  >
                    <View
                      view="input"
                      type="field"
                      struct={ type.type }
                      dashup={ props.dashup }

                      field={ type }
                      value={ props.item && props.item.get(type.name || type.uuid) }

                      onChange={ onTag }
                      isInline
                      autoFocus
                    />
                  </Menu>
                </Stack>
              );
            }) }
          </Stack>
        </CardContent>
      ) }
      <CardContent onClick={ (e) => props.onClick(props.item) } sx={ {
        color  : props.color && theme.palette.getContrastText(dotProp.get(theme.palette, props.color)),
        cursor : 'pointer',
      } }>
        { !!props.repeat && (
          <Tooltip title={ props.repeat }>
            <Icon type="fas" icon="repeat" />
          </Tooltip>
        ) }
        <Hbs template={ props.template } data={ props.item ? props.item.toJSON() : {} } isInline={ props.size === 'sm' } />
      </CardContent>
      <CardContent sx={ {
        pt            : 0,
        color         : props.color && theme.palette.getContrastText(dotProp.get(theme.palette, props.color)),
        display       : 'flex',
        flexWrap      : 'wrap',
        flexDirection : 'row',
      } }>
        { getUserFields().map((type, i) => {
            // return jsx
            return (
              <Stack spacing={ 1 } direction="row" key={ `tag-${type.uuid}` } alignItems="center">
                { getUsers(type).map((user, a) => {
                  // return jsx
                  return (
                    <Tooltip title={ `${type.label}: ${user.name}`} key={ `tag-${type.uuid}-${user._id || user.id}` }>
                      <Chip
                        size="small"
                        label={ user.name }
                        avatar={ <Avatar image={ user.image || user.avatar } name={ user.name } /> }
                        onClick={ (e) => setUserOpen({ type : type.uuid, el : e.target }) }
                        onDelete={ () => {} }
                      />
                    </Tooltip>
                  );
                }) }

                <Tooltip title={ `Add ${type.label}` }>
                  <IconButton onClick={ (e) => setUserOpen({ type : type.uuid, el : e.target }) } size="small">
                    <Icon type="fas" icon="user-plus" fontSize="small" />
                  </IconButton>
                </Tooltip>
                <Menu
                  open={ userOpen?.type === type.uuid }
                  onClose={ () => setUserOpen(null) }
                  anchorEl={ userOpen?.el }
                  MenuListProps={ {
                    sx : {
                      width : 240,
                    },
                  } }
                >
                  <View
                    view="input"
                    type="field"
                    struct="user"
                    dashup={ props.dashup }

                    field={ type }
                    value={ props.item && props.item.get(type.name || type.uuid) }

                    onChange={ onUser }
                    isInline
                    autoFocus
                  />
                </Menu>
              </Stack>
            );
          })
        }

        <Box ml="auto">
          <Tooltip title="Discuss Item">
            <Badge badgeContent={ props.item.get('_alert.all') || count } color={ props.item.get('_alert.important') ? 'primary' : (props.item.get('_alert.all') ? 'info' : undefined) }>
              <IconButton size="small" color={ props.item.get('_alert.important') ? 'primary' : (props.item.get('_alert.all') ? 'info' : undefined) } onClick={ (e) => props.onClick(props.item) }>
                <Icon type="fas" icon="comments" />
              </IconButton>
            </Badge>
          </Tooltip>
        </Box>
      </CardContent>
      <Box />
    </Card>
  );
};

// export default
export default DashupUIItem;