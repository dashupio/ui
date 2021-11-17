
// import dependencies
import View from '@dashup/view';
import React, { useState } from 'react';
import { Box, Card, Stack, CardContent, ListItemIcon, ListItemText, MenuItem, TextField, Icon, IconButton } from '..';

// create menu component
const DashupUIQueryRule = (props = {}) => {
  // key
  const [key, setKey] = useState(Object.keys(props.value)[0]);

  // get parts
  const op    = key && Object.keys(Object.values(props.value || {})[0])[0];
  const parts = key.split('..').join('.').split('.').filter((p) => p.length);

  // set value
  const onOp = (val) => {
    // data value
    const dataValue = ((props.value || {})[key] || {})[op] || null;

    // get current key
    props.setValue({
      [key] : {
        [val] : dataValue,
      },
    });
  };

  // on part
  const onPart = (i, key, sub) => {
    // set parts
    parts[i] = key;

    // sub
    if (sub) parts[i + 1] = sub;

    // new parts
    const newParts = parts.slice(0, i + (sub ? 2 : 1)).filter((p) => p && p.length);
    
    // data value
    const dataValue = (props.value || {})[key] || {
      $eq : null,
    };

    // check value
    setKey(newParts.join('.'));

    // get current key
    props.setValue({
      [newParts.join('.')] : dataValue,
    });
  };

  // on value
  const onValue = (val) => {
    // fix value
    if (val && val.id) val = val.id;
    if (val && typeof val.get === 'function') val = val.get('_id');
    if (Array.isArray(val)) val = val.map((v) => typeof v?.get === 'function' ? v.get('_id') : v?.id || v);
    if (!['$in', '$nin'].includes(op) && Array.isArray(val)) val = val[0];

    // data value
    props.setValue({
      [key] : {
        [op] : val,
      },
    });
  };

  // get bottom
  const getBottom = () => {
    // get last part
    let lastPart = parts[parts.length - 1];

    // previous last part
    if (!props.fields[lastPart]) {
      lastPart = parts[parts.length - 2]
    }

    // get field
    return props.fields[lastPart];
  };

  // get children
  const getChildren = (field) => {
    // return values
    return Object.values(props.fields).filter((f) => f.parent && field.uuid && f.parent === field.uuid);
  };

  // get sub
  const getSub = () => {
    // get bottom
    const field = getBottom();

    // bottom
    if (!field) return;

    // get subs
    const subs = field.subs || [];

    // find
    return subs.find((s) => s.key === parts[parts.length - 1]) || subs.find((s) => s.default);
  };

  // has subs
  const hasSubs = () => {
    // field
    const field = getBottom();
    
    // check field
    if (!field) return;

    // has subs
    return !!field.subs?.length;
  };

  // has children
  const hasChildren = () => {
    // field
    const field = getBottom();
    
    // check field
    if (!field) return;

    // children
    const children = getChildren(field);
    
    // return children
    return !!children.length;
  };

  /**
   * get opts
   */
  const getOps = () => {
    // get bottom
    const sub = getSub();

    // check sub
    if (sub) return sub.operators || [];

    // field
    const field = getBottom();

    // check field
    if (!field) return [];

    // operators
    return field.operators || [];
  };

  // width
  const sx = {
    maxWidth : '25%',
    minWidth : '25%',
  };

  // return jsx
  return (
    <Card variant="outlined" sx={ {
      backgroundColor : 'rgba(0, 0, 0, 0)',
    } }>
      <CardContent>
        <Stack direction="row" spacing={ 1 }>
          <IconButton>
            <Icon type="fas" icon="bars" />
          </IconButton>
          { parts.map((p, i) => {
            // get part field
            const prev  = i > 0 && props.fields[parts[i - 1]];
            const field = props.fields[p];

            // check field
            if (!field && i > 0) return null;

            // return jsx
            return (
              <TextField
                sx={ sx }
                label="Select Field"
                value={ field?.name || field?.uuid || '' }
                select
                onChange={ (e) => onPart(i, e.target.value) }
              >
                { Object.values(props.fields || {}).filter((f) => {
                  // check prev
                  if (prev) return f.parent === prev.uuid;
      
                  // root only
                  return (f.parent || 'root') === 'root';
                }).map((field) => {
                  // return jsx
                  return (
                    <MenuItem key={ field.uuid } value={ field.name || field.uuid }>
                      { field.label || field.uuid }
                    </MenuItem>
                  );
                }) }
              </TextField>
            );
          }) }
          { hasChildren() && (
            <TextField
              sx={ sx }
              label="Select Field"
              value={ field?.name || field?.uuid || '' }
              select
              onChange={ (e) => {
                // get value
                const val = e.target.value;

                // check value
                const field = props.fields[val];

                // field
                if (!field) return;

                // default sub
                const defaultSub = field.subs?.find((s) => s.default);

                // on part
                if (defaultSub) {
                  onPart(parts.length + 1, val, defaultSub.key);
                } else {
                  onPart(parts.length, val);
                }
              } }
            >
              { getChildren(getBottom()).map((field) => {
                // return jsx
                return (
                  <MenuItem key={ field.uuid } value={ field.name || field.uuid }>
                    { field.label || field.uuid }
                  </MenuItem>
                );
              }) }
            </TextField>
          ) }
          { hasSubs() && (
            <TextField
              sx={ sx }
              label="Select Sub Field"
              value={ getSub()?.name || getSub()?.uuid }
              select
              onChange={ (e) => onPart(parts.length - (getSub() && (getSub().key === parts[parts.length - 1]) ? 1 : 0), e.target.value) }
            >
              { getBottom().subs.map((field) => {
                // return jsx
                return (
                  <MenuItem key={ field.uuid } value={ field.name || field.uuid }>
                    { field.label || field.uuid }
                  </MenuItem>
                );
              }) }
            </TextField>
          ) }
          { !!getOps().length && (
            <TextField
              sx={ sx }
              label="Select Operator"
              value={ op }
              select
              onChange={ (e) => onOp(e.target.value) }
            >
              { Object.keys(props.operators || {}).map((key, i) => {
                // check null
                if (!getOps().includes(key)) return null;

                // return value
                return (
                  <MenuItem key={ key } value={ key }>
                    { props.operators[key].title }
                  </MenuItem>
                );
              }) }
            </TextField>
          ) }
          { !!(op && getBottom()) && (
            <Box sx={ sx }>
              <View
                view="input"
                type="field"
                page={ props.page }
                dashup={ props.dashup }
                struct={ op === '$exists' ? 'boolean' : (getSub()?.type || getBottom()?.type) }
                noLabel

                field={ {
                  ...(getBottom()),
                  ...(getSub() || {}),

                  label    : getSub()?.label || getBottom()?.label,
                  multiple : ['$in', '$nin'].includes(op),
                } }
                value={ ((props.value || {})[key] || {})[op] }

                onChange={ (f, val) => onValue(val) }
              />
            </Box>
          ) }
          <IconButton color="error" onClick={ (e) => props.onRemove() }>
            <Icon type="fas" icon="trash" />
          </IconButton>
        </Stack>
      </CardContent>
      <Box />
    </Card>
  );
};

// export default
export default DashupUIQueryRule;