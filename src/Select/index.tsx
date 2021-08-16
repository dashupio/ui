
// import select
import React from 'react';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import { Dropdown } from 'react-bootstrap';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

// create react component
const DashupUISelect = (props = {}) => {
  // el
  let El = Select;

  // use async
  if (props.async) El = AsyncSelect;

  // custom option
  const Option = ({ data, isDisabled, isSelected, innerProps, innerRef }) => {
    // return jsx
    return !isDisabled ? (
      <OverlayTrigger
        overlay={
          <Tooltip>
            { data.label }
          </Tooltip>
        }
        placement="left"
      >
        <Dropdown.Item className="d-flex align-items-center" active={ isSelected } ref={ innerRef } { ...innerProps }>
          { !!data.icon && (
            <i className={ `${data.icon} fa-fw me-2` } />
          ) }
          <span className="text-overflow">
            { data.label }
          </span>
        </Dropdown.Item>
      </OverlayTrigger>
    ) : null;
  };

  // return jsx
  return (
    <El
      { ...props }
      styles={ {
        ...(props.styles || {}),
        
        // Fixes the overlapping problem of the component
        menu : provided => ({ ...provided, zIndex : 999999 }),
        menuPortal : base => ({ ...base, zIndex : 999999 }),
      } }
      theme={ props.theme ? props.theme : (theme) => {
        
        // return theme
        return {
          ...theme,
          colors : {
            ...theme.colors,
            danger      : 'var(--bs-danger)',
            primary     : 'var(--bs-primary)',
            neutral0    : 'var(--bs-white)',
            neutral10   : 'var(--bs-secondary)',
            neutral20   : 'var(--bs-secondary)',
            neutral70   : 'var(--bs-dark)',
            neutral80   : 'var(--bs-dark)',
            neutral90   : 'var(--bs-body)',
            primary75   : 'var(--bs-primary-light)',
            primary25   : 'var(--bs-primary-transparent)',
            dangerLight : 'var(--bs-danger-light)',
          },

          spacing : {
            baseUnit      : 3,
            menuGutter    : 5,
            controlHeight : 'var(--bs-input-height)',
          }
        }
      } }
      components={ props.components || { Option } }
    />
  );
};

// export default
export default DashupUISelect;