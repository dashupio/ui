
import React from 'react';
import { BasicConfig } from 'react-awesome-query-builder';
import { ButtonGroup, Select, Button, Form } from '../';

// type to color
const typeToColor = {
  addRule  : 'success',
  delRule  : 'danger',
  addGroup : 'success',
  delGroup : 'danger',
};

// create select field
const SelectField = (props) => {
  // return jsx
  return (
    <div className="d-inline-block select-inline">
      <Select { ...props }
        options={ (props.items || []).map((opt) => {
          return {
            field : opt,
            value : opt.path,
            label : opt.label,
          }
        }) }
        onChange={ (val) => props.setField(val.value) }
      />
    </div>
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
    return (
      <Button { ...props } size="sm" variant={ typeToColor[props.type] }>
        { props.type.includes('del') && (
          <i className="fa fa-times" />
        ) }
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
        <div className="d-inline-block select-inline">
          <Form.Control type="text" label={ label } value={ value || 0 } onChange={ (e) => setValue(e.target.value) } />
        </div>
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
        <div className="d-inline-block select-inline">
          <Form.Control type="number" label={ label } value={ value || 0 } onChange={ (e) => setValue(parseFloat(e.target.value)) } />
        </div>
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
        <div className="d-inline-block select-inline">
          <Select { ...props }
            options={ (listValues || []).map((opt) => {
              return {
                field : opt,
                value : opt.value,
                label : opt.title,
              };
            }) }
            value={ (listValues || []).filter((opt) => {
              // found
              return (value || []).includes(opt.value);
            }).map((opt) => {
              return {
                field : opt,
                value : opt.value,
                label : opt.title,
              };
            })[0] }
            onChange={ (val) => setValue(val.value) }
          />
        </div>
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
        <div className="d-inline-block select-inline">
          <Select { ...props }
            options={ (listValues || []).map((opt) => {
              return {
                field : opt,
                value : opt.value,
                label : opt.title,
              }
            }) }
            value={ (listValues || []).filter((opt) => {
              // found
              return (value || []).includes(opt.value);
            }).map((opt) => {
              return {
                field : opt,
                value : opt.value,
                label : opt.title,
              };
            }) }
            onChange={ (val) => setValue(val.value) }
            isMulti
          />
        </div>
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
        <div className="d-inline-block select-inline">
          <Select { ...props }
            value={ value ? values[0] : values[1] }
            options={ values }
            onChange={ (val) => setValue(val.value === 'true') }
          />
        </div>
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
          <Form.Control type="number" value={ value } label={ label } onChange={ (e) => setValue(parseFloat(e.target.value)) } />
          <Form.Range className="ms-2" value={ value } min={ min } max={ max } onChange={ (e) => setValue(parseFloat(e.target.value)) } />
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