
// import dependencies
import React from 'react';
import colors from '../colors';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

// let context
let DashupContext = null;

// global timer
let timer;

// global debounce
const debounce = (func, timeout = 1000) => {

  // return debounced
  return (...args) => {
    // clear timeout previously
    clearTimeout(timer);

    // create new timeout
    timer = setTimeout(() => func(...args), timeout);
  };
}

// create menu component
const DashupUIPageMenu = (props = {}) => {

  // get active
  const getActive = (page, dashup) => {
    // return actives
    return [...(dashup.get('active') || [])].filter((a) => a.page === page.get('_id') && a.user !== (typeof eden !== 'undefined' && eden.user.exists() && eden.user.get('_id')));
  };

  // get short name
  const getName = (user) => {
    // get name
    const name = `${user.name || ''}`.trim() || 'N A';

    // return name
    return `${(name.split(' ')[0] || '')[0] || ''}${(name.split(' ')[1] || '')[0] || ''}`;
  };

  // get avatar
  const getAvatar = (user) => {
    // return avatar
    return ((((user.avatar || [])[0] || {}).thumbs || {})['1x-sq'] || {}).url;
  };

  // return JSX
  return (
    <DashupContext.Consumer>
      { ({ page, dashup, color, icon, title, setPage }) => {
        // return jsx
        return (
          <div className="page-header">
            <nav className="navbar navbar-section py-0 py-lg-3">
              <div className="w-100 w-lg-auto d-none d-lg-flex align-items-center">
                <div className="flex-column flex-0 pr-2">
                  <button className="btn btn-lg btn-page me-3" type="button" style={ {
                    color      : color?.drk ? '#fff' : (color?.hex ? '#000' : null),
                    background : color?.hex || colors[color] || color,
                  } }>
                    <i className={ `fa-fw fa-${icon}` } />
                  </button>
                </div>
                <div className="flex-column flex-1">
                  <div className="d-flex">
                    { page && dashup.can(page, 'manage') ? (
                      <input required onChange={ (e) => debounce(setPage, 200)('name', e.target.value) } className="form-control form-control-invisible flex-1" placeholder="Unnamed Page" defaultValue={ title } />
                    ) : (
                      <div className="form-control form-control-invisible flex-1 d-flex align-items-center" placeholder="Unnamed Page">
                        { title }
                      </div>
                    ) }
                  </div>
                </div>
              </div>
              <div id="page-menu" className="page-menu w-100 d-flex pb-3 pb-lg-0 w-lg-auto d-lg-flex align-items-center justify-content-lg-end collapse navbar-collapse">
                { props.presence && !!getActive(page, dashup).length && (
                  <div className="me-2 tags">
                    { getActive(page, dashup).map((active, i) => {
                      // return jsx
                      return (
                        <OverlayTrigger
                          key={ `user-${active.id}` }
                          overlay={
                            <Tooltip>
                              { `${active.name}`}
                            </Tooltip>
                          }
                          placement="bottom"
                        >
                          <button  className="btn btn-sm btn-circle me-1" style={ {
                            backgroundImage : getAvatar(active) ? `url(${getAvatar(active)})` : null,
                          } }>
                            { getAvatar(active) ? '' : getName(active) }
                          </button>
                        </OverlayTrigger>
                      )
                    }) }
                  </div>
                ) }
                { props.children }
                { props.onShare && page && dashup.can(page, 'manage') && (
                  <OverlayTrigger
                    overlay={
                      <Tooltip>
                        Share Page
                      </Tooltip>
                    }
                    placement="bottom"
                  >
                    <button className="btn btn-light" onClick={ (e) => props.onShare(e) }>
                      <i className="fa fa-fw fa-share" />
                    </button>
                  </OverlayTrigger>
                ) }
                { props.onMinimise && page && dashup.can(page, 'manage') && (
                  <OverlayTrigger
                    overlay={
                      <Tooltip>
                        Minimise Page
                      </Tooltip>
                    }
                    placement="bottom"
                  >
                    <button className="btn btn-light" onClick={ (e) => props.onConfig(e) }>
                      <i className="fa fa-fw fa-minus" />
                    </button>
                  </OverlayTrigger>
                ) }
                { props.onConfig && page && dashup.can(page, 'manage') && (
                  <OverlayTrigger
                    overlay={
                      <Tooltip>
                        Page Settings
                      </Tooltip>
                    }
                    placement="bottom"
                  >
                    <button className="btn btn-light" onClick={ (e) => props.onConfig(e) }>
                      <i className="fa fa-fw fa-ellipsis-h" />
                    </button>
                  </OverlayTrigger>
                ) }
              </div>
            </nav>
          </div>
        );
      } }
    </DashupContext.Consumer>
  );
};

// export default page menu
export default (ctx) => {
  // use context
  DashupContext = ctx;

  // return actual component
  return DashupUIPageMenu;
};