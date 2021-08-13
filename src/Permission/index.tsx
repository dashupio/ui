
// react
import React from 'react';
import colors from '../colors';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

// dashup ui permission
const DashupUIPermission = (props = {}) => {

  // get pages
  const getPages = (page) => {
    // set page
    if (!page) page = props.page;

    // return items
    return Array.from(props.dashup.get('pages').values()).filter((item) => !item.get('archived') && item.get('parent') === page.get('_id')).sort((a, b) => {
      // get order
      if (a.get('order') > b.get('order')) return 1;
      if (a.get('order') < b.get('order')) return -1;

      // return no change
      return 0;
    });
  };

  // get icon
  const getIcon = () => {
    // pencil
    return (props.page.get('icon') || 'pencil fa');
  };

  // on toggle
  const onToggle = (type) => {
    // update
    if (props.hasAcl(props.page, type)) {
      // remove
      props.removeAcl(props.page, type);
    } else {
      // add
      props.addAcl(props.page, type);
    }
  };

  // buttons
  const buttons = [['View', 'eye'], ['Submit', 'pencil'], ['Manage', 'cog']];

  // color
  const color = props.page.get('color');

  // return jsx
  return (
    <div>
      <div className="card card-permission bg-white mb-2">
        <div className="card-body d-flex align-items-center ">
          <button className={ `btn btn-sm btn-page${colors[color] ? ` btn-${color}` : ''} me-2` } type="button" style={ {
            color      : color?.drk ? '#fff' : (color?.hex ? '#000' : null),
            background : color?.hex || colors[color] || color,
          } }>
            <i className={ `fa-fw fa-${getIcon()}` } />
          </button>
          <span className="flex-1">
            { props.page.get('name') }
          </span>

          <div className="ms-auto">
            { buttons.map(([title, icon]) => {
              // set value
              const type = title.toLowerCase();

              // color
              const color = props.hasAcl(props.page, type) ? 'success' : 'secondary';
              
              // return jsx
              return (
                <OverlayTrigger
                  key={ `btn-${title}` }
                  overlay={
                    <Tooltip>
                      Can { title }
                    </Tooltip>
                  }
                  placement="top"
                >
                  <Button variant={ color } className="ms-2" onClick={ () => onToggle(type) }>
                    <i className={ `fa fa-${icon}` } />
                  </Button>
                </OverlayTrigger>
              );
            }) }
          </div>
        </div>
      </div>
      { !!getPages(props.page) && (
        <div className="ps-3">
          { getPages(props.page).map((child, i) => {
            // return jsx
            return (
              <DashupUIPermission
                key={ `child-${child.get('_id')}` }
                page={ child }
                dashup={ props.dashup }
                hasAcl={ props.hasAcl }
                addAcl={ props.addAcl }
                removeAcl={ props.removeAcl }
                />
            )
          }) }
        </div>
      ) }
    </div>
  );
};

// export default
export default DashupUIPermission;