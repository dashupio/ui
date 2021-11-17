
// import dependencies
import React from 'react';

// import rule
import Rule from './Rule';
import { Card, CardContent, Box, IconButton, Icon, TextField, MenuItem } from '..'

// create menu component
const DashupUIQueryGroup = (props = {}) => {
  // op
  const op = Object.keys(props.value || {})[0];

  // operator
  const setOperator = (val) => {
    // op
    const dv = props.value[op] || [];

    // check value
    props.setValue({
      [val] : dv,
    });
  };

  // set value
  const setValue = (i, val) => {
    // op
    const dv = (props.value[op] || []);

    // value
    dv[i] = val;

    // check value
    props.setValue({
      [op] : dv,
    });
  };

  // on remove
  const onRemove = (i) => {
    // op
    const dv = (props.value[op] || []);

    // remove
    dv.splice(i, 1);

    // remove
    props.setValue({
      [op] : dv,
    });
  };

  // return jsx
  return (
    <Card variant="outlined" sx={ {
      backgroundColor : 'rgba(0, 0, 0, 0)',
    } }>
      <CardContent sx={ {
        display       : 'flex',
        alignItems    : 'center',
        flexDirection : 'row',
      } }>
        <IconButton sx={ {
          mr : 2,
        } }>
          <Icon type="fas" icon="bars" />
        </IconButton>
        <TextField
          size="small"
          value={ props.operator || '' }
          label="Operator"
          margin="none"
          select
          onChange={ (e) => setOperator(e.target.value) }
        >
          { Object.keys(props.groups || {}).map((op) => {
            // return jsx
            return (
              <MenuItem key={ op } value={ op }>
                { props.groups[op].title }
              </MenuItem>
            )
          }) }
        </TextField>
        <Box ml="auto">
          <IconButton onClick={ (e) => !props.setValue({
            [op] : [...props.value[op], { $eq : {} }],
          }) && e.preventDefault() }>
            <Icon type="fas" icon="plus" />
          </IconButton>
          <IconButton onClick={ (e) => props.onRemove() } color="error">
            <Icon type="fas" icon="trash" />
          </IconButton>
        </Box>
      </CardContent>
      { !!(props.value[op] || []).length && (
        <CardContent>
          { (props.value[op] || []).map((val, i) => {
            // return jsx
            return (
              <Box ml={ 2 } key={ `rule-${i}` }>
                <Rule
                  page={ props.page }
                  value={ val }
                  fields={ props.fields }
                  groups={ props.groups }
                  dashup={ props.dashup }
                  onRemove={ () => onRemove(i) }
                  setValue={ (val) => setValue(i, val) }
                  operators={ props.operators }
                />
              </Box>
            );
          }) }
        </CardContent>
      ) }
      <Box />
    </Card>
  );
};

// export default
export default DashupUIQueryGroup;