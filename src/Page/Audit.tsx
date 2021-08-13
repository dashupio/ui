
// import
import moment from 'moment';
import React, { useState, useEffect } from 'react';

// create menu component
const DashupUIPageAuditChange = (props = {}) => {
  // use state
  const field = props.getFields(props.forms).find((f) => f.uuid === props.change.field);
  const struct = field?.type && props.getFieldStruct(field.type);

  // check field
  const [value, setValue] = useState((struct || {}).data?.actions?.includes('sanitise') ? null : props.change.value);

  // use effect
  useEffect(() => {
    // check sanitise
    if (!(struct || {}).data?.actions?.includes('sanitise')) return;

    // sanitise
    props.dashup.action({
      nonce : props.item.get('_id'),
      trail : [],

      type   : 'field',
      page   : props.page.get('_id'),
      struct : field.type,
    }, 'sanitise', field, props.change.value).then(({ sanitised }) => {
      // sanitised
      setValue(sanitised);
    });
  }, []);

  // return jsx
  return !!field && !!(Array.isArray(value || []) ? (value || []).length : value) && (
    <li>
      <b className="d-block">
        { props.change.label }
      </b>
      <div className="text-overflow">
        <props.dashup.View
          view="view"
          type="field"
          size="sm"
          item={ props.item }
          field={ field }
          value={ value }
          struct={ field.type }
          dashup={ props.dashup }
          >
          <div className="text-center">
            <i className="fa fa-spinner fa-spin" />
          </div>
        </props.dashup.View>
      </div>
    </li>
  );
};

// create menu component
const DashupUIPageAudit = (props = {}) => {
  
  // return jsx
  return (
    <div className="d-block mb-2 text-sm">
      <small className="text-muted d-block">{ moment(props.audit.created_at).format('Do MMM, h:mma') }</small>
      <b>{ props.audit.user.name }</b> set:
      
      <ul className="ps-3">
        { props.audit.changes.map((change, a) => {
          // return jsx
          return (
            <DashupUIPageAuditChange key={ `change-${props.audit.id}-${a}` } { ...props } change={ change } />
          );
        }) }
      </ul>
    </div>
  );
};

// export default page menu
export default DashupUIPageAudit;