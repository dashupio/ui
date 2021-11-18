
// import
import { Box, Stack, View, Typography } from '@dashup/ui';
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
    <Box>
      <Box component="small" width="100%" fontWeight="bold" gutterBottom>
        { props.change.label }
      </Box>
      <Box width="100%">
        <View
          view="view"
          type="field"
          size="small"
          item={ props.item }
          field={ field }
          value={ value }
          struct={ field.type }
          dashup={ props.dashup }
        />
      </Box>
    </Box>
  );
};

// create menu component
const DashupUIPageAudit = (props = {}) => {
  
  // return jsx
  return (
    <Box>
      <Box component="small" width="100%">
        <Box fontWeight="bold" component="span">
          { props.audit.user?.name }
        </Box>
        { ' set:' }
      </Box>
      <Stack spacing={ 1 }>
        { props.audit.changes.map((change, a) => {
          // return jsx
          return (
            <DashupUIPageAuditChange key={ `change-${props.audit.id}-${a}` } { ...props } change={ change } />
          );
        }) }
      </Stack>
    </Box>
  );
};

// export default page menu
export default DashupUIPageAudit;