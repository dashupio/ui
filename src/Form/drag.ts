// import uuid
import shortid from 'shortid';

// export default
export default async (e, fields, setFields, setSaving, setConfig, setMenu) => {
  // item
  const { to, item, target, newIndex } = e;

  // get parent
  const parent = to.getAttribute('id').split('-').slice(1).join('-');

  // get item id
  let id = item.getAttribute('data-field');
  let create = false;
  const type = item.getAttribute('data-type');

  // check id/type
  if (!id && !type) return;

  // add field if it doesn't exist
  if (!id && type) {
    // set id
    id = shortid();
    create = true;
    fields.push({
      type,
      uuid : id,
      parent,
    });
  }

  // find children
  const children = [...(to.childNodes)].map((node) => {
    // check id
    return node.getAttribute && node.getAttribute('data-field');
  }).filter((idX) => idX !== id);

  // splice in
  children.splice(newIndex, 0, id);

  // new columns
  const newFields = children.map((child) => fields.find((c) => c.uuid === child)).filter((f) => f);

  // set order
  newFields.forEach((field, i) => {
    field.order  = i;
    field.parent = parent;
  });

  // loading
  setSaving(true);

  // all fields
  const allFields = [];

  // loop
  for (const field of [...newFields, ...fields]) {
    // check has
    if (!allFields.find((f) => f.uuid === field.uuid)) allFields.push(field);
  }
  
  // set page
  await setFields(allFields);

  // loading
  setSaving(false);

  // show config
  if (create) {
    if (setMenu) setMenu(false);
    setConfig(fields.find((f) => f.uuid === id));
  }
};