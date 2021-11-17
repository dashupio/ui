
import React from 'react';
import { BasicConfig } from 'react-awesome-query-builder';
import { ButtonGroup, TextField, Icon, MenuItem, Button, IconButton, Slider } from '../';

// type to color
const typeToColor = {
  addRule  : 'success',
  delRule  : 'error',
  addGroup : 'success',
  delGroup : 'error',
};

// create select field
const SelectField = (props) => {
  // return jsx
  return (
    <TextField
      { ...props }
      size="small"
      onChange={ (e) => props.setField(e.target.value) }
    >
      { (props.items || []).map((opt) => {
        // return jsx
        return (
          <MenuItem key={ opt.path } value={ opt.path }>
            { opt.label }
          </MenuItem>
        );
      }) }
    </TextField>
  );
};

// settings
const settings = {
  ...BasicConfig.settings,

  // selects
  renderFunc     : SelectField,
  renderField    : SelectField,
  renderOperator : SelectField,

  // buttons
  renderButton : (props) => {
    // return jsx
    return props.type.includes('del') ? (
      <IconButton size="small">
        <Icon type="fas" icon="times" />
      </IconButton>
    ) : (
      <Button { ...props } size="small" color={ typeToColor[props.type] } variant="contained">
        { props.label }
      </Button>
    );
  },
  renderButtonGroup : (props) => <ButtonGroup { ...props } />,

  // conjunctions
  renderConjs : (props) => {
    // null if disabled
    if (props.disabled) return null;
    
    // get conjunction
    const conjunction = props.selectedConjunction || 'AND';

    // return group
    return (
      <ButtonGroup size="sm">
        { props.showNot && (
          <Button variant={ props.not ? 'primary' : 'secondary' } onClick={ () => props.setNot(!props.not) }>
            { props.notLabel }
          </Button>
        ) }
        { Object.keys(props.conjunctionOptions || {}).map((key) => {
          // get opt
          const opt = props.conjunctionOptions[key];

          // return jsx
          return (
            <Button key={ `con-${key}` } variant={ conjunction === key ? 'primary' : 'secondary' } onClick={ () => props.setConjunction(key) }>
              { key }
            </Button>
          );
        }) }
      </ButtonGroup>
    );
  },
};

// widgets
const widgets = {
  ...BasicConfig.widgets,
  text : {
    ...BasicConfig.widgets.text,
    factory : (props) => {
      // check operator
      const { value, label, setValue } = props;

      // return control
      return (
        <TextField
          size="small"
          label={ label }
          value={ value }
          onChange={ (e) => setValue(e.target.value) }
        />
      );
    },
  },
  number : {
    ...BasicConfig.widgets.number,
    factory : (props) => {
      // check operator
      const { value, label, setValue } = props;

      // return control
      return (
        <TextField
          size="small"
          type="number"
          label={ label }
          value={ value || 0 }
          onChange={ (e) => setValue(parseFloat(e.target.value)) }
        />
      );
    },
  },
  select : {
    ...BasicConfig.widgets.select,
    factory : (props) => {
      // check operator
      const { value, setValue, listValues } = props;
      
      // return value
      return (
        <TextField
          { ...props }
          size="small"
          value={ value }
          onChange={ (e) => setValue(e.target.value) }
        >
          { (listValues || []).map((opt) => {
            // return jsx
            return (
              <MenuItem key={ opt.value } value={ opt.value }>
                { opt.title }
              </MenuItem>
            );
          }) }
        </TextField>
      );
    },
  },
  multiselect : {
    ...BasicConfig.widgets.multiselect,
    factory : (props) => {
      // check operator
      const { value, setValue, listValues } = props;
      
      // return value
      return (
        <TextField
          { ...props }
          size="small"
          value={ Array.isArray(value) ? value : [value].filter((v) => v) }
          onChange={ (e) => setValue(e.target.value) }
          SelectProps={ {
            multiple : true,
          } }
        >
          { (listValues || []).map((opt) => {
            // return jsx
            return (
              <MenuItem key={ opt.value } value={ opt.value }>
                { opt.title }
              </MenuItem>
            );
          }) }
        </TextField>
      );
    },
  },
  boolean : {
    ...BasicConfig.widgets.boolean,
    factory : (props) => {
      // check operator
      const { value, setValue, labelYes, labelNo } = props;

      // value
      const values = [{
        label : labelYes,
        value : 'true',
      }, {
        label : labelNo,
        value : 'false',
      }];
      
      // return value
      return (
        <TextField
          { ...props }
          size="small"
          value={ value ? 'true' : 'false' }
          onChange={ (e) => setValue(e.target.value === 'true') }
        >
          { (values || []).map((opt) => {
            // return jsx
            return (
              <MenuItem key={ opt.value } value={ opt.value }>
                { opt.label }
              </MenuItem>
            );
          }) }
        </TextField>
      );
    },
  },
  slider : {
    ...BasicConfig.widgets.slider,
    factory : (props) => {
      // check operator
      const { setValue, value = 0, label, min, max } = props;

      // return control
      return (
        <div className="d-inline-block select-inline d-flex flex-row align-items-center">
          <TextField
            size="small"
            type="number"
            label={ label }
            value={ value || 0 }
            onChange={ (e) => setValue(parseFloat(e.target.value)) }
            InputProps={ {
              min,
              max,
            } }
          />
          <Slider value={ value } min={ min } max={ max } onChange={ (e) => setValue(parseFloat(e.target.value)) } />
        </div>
      );
    }
  },
  
  /*
  date: {
    ...BasicConfig.widgets.date,
    factory: (props) => <MaterialDateWidget {...props} />,
  },
  time: {
    ...BasicConfig.widgets.time,
    factory: (props) => <MaterialTimeWidget {...props} />,
  },
  datetime: {
    ...BasicConfig.widgets.datetime,
    factory: (props) => <MaterialDateTimeWidget {...props} />,
  },
  */

};

// types
const types = {
  ...BasicConfig.types,
};

// export default
export default {
  ...BasicConfig,

  types,
  widgets,
  settings,
};