
import React from 'react';
import SimpleBar from 'simplebar-react';
import { Button, Overlay, Popover, Dropdown } from 'react-bootstrap';
import { useState } from 'react';

// let context
let DashupUIContext = null;

// create dashup grid body
const DashupUIGridBody = (props = {}) => {
  // use ref
  const [show, setShow] = useState(null);
  const [optItem, setItem] = useState(null);

  // on show
  const onShow = (e, item) => {
    console.log('test', e, item);
    // set item
    setItem(show ? null : item);
    setShow(show ? null : e.target);
  };

  // return JSX
  return (
    <DashupUIContext.Consumer>
      { ({ actions = [], items = [], canSubmit, columns = [], saving, loading, onRow, renderField, fullHeight }) => {
        return (
          <div className={ fullHeight ? 'flex-1 fit-content' : '' }>
            { !!(loading || props.loading) && (
              <div className="d-flex align-items-center bg-secondary-transparent rounded" style={ {
                zIndex : 5,
              } }>
                <div className="w-100 text-center">
                  <i className="fa h1 fa-spinner fa-spin" />
                </div>
              </div>
            ) }
            <SimpleBar className="grid-body p-relative ox-hidden">
              { (items || []).map((item, i) => {
                // return jsx
                return (
                  <div key={ `grid-row-${item.get('_id')}` } onClick={ (e) => onRow && onRow(e, item) } className={ `grid-row${props.isSelected && props.isSelected(item) ? ' grid-row-selected' : ''}` }>

                    <div className="grid-column grid-column-edit" onClick={ (e) => props.onSelect && props.onSelect(item) }>
                      <div className="column-inner">
                        <div className="column-body">
                          <div className="form-check">
                            { canSubmit && props.onSelect ? (
                              <input className="form-check-input" type="checkbox" value="selected" checked={ props.isSelected && props.isSelected(item) } onChange={ (e) => {} } />
                            ) : (
                              <input className="form-check-input" disabled type="checkbox" value="selected" />
                            ) }
                            
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid-column-scroll">
                      { columns.map((column, i) => {
                        // return jsx
                        return (
                          <div key={ `grid-row-${item.get('_id')}-${column.id}` } className="grid-field" style={ {
                            maxWidth  : `${column.basis}%`,
                            flexBasis : `${column.basis}%`,
                          } }>
                            { (renderField || props.renderField)(item, column, false, saving) }
                          </div>
                        );
                      }) }
                    </div>

                    <div className="grid-column grid-column-edit">
                      <div className="column-inner">
                        { canSubmit ? (
                          <div className="column-body">
                            <Button size="sm" variant="outline-dark" onClick={ (e) => !e.preventDefault() && onShow(e, item) }>
                              <i className="fa fa-fw fa-ellipsis-h" />
                            </Button>
                            { !!show && (optItem?.get('_id') === item.get('_id')) && (
                              <Overlay
                                show
                                target={ show }
                                onHide={ () => !setShow(null) && setItem(null) }
                                container={ document?.body }
                                placement="bottom-end"
                                rootClose
                              >
                                <Popover className="dropdown-menu">
                                  <Dropdown.Header>
                                    Update Item
                                  </Dropdown.Header>
                                  
                                  { actions.map((action, i) => {
                                    // check action
                                    if (action === 'divider') return <Dropdown.Divider key={ `action-${item.get('_id')}-${i}` } />;

                                    // return item
                                    return (
                                      <Dropdown.Item
                                        key={ `action-${item.get('_id')}-${action.id}` }
                                        href={ action.href ? action.href(item) : null }
                                        onClick={ action.onClick ? () => action.onClick(item) : null }
                                        className={ action.variant ? `text-${action.variant}` : '' }
                                      >
                                        { action.icon && (
                                          <i className={ `fa-${action.icon} me-2` } />
                                        ) }
                                        { action.content }
                                      </Dropdown.Item>
                                    );
                                  }) }
                                </Popover>
                              </Overlay>
                            ) }
                          </div>
                        ) : (
                          <div className="column-body">
                            <button className="btn btn-sm btn-outline-secondary" type="button">
                              <i className="fa fa-ellipsis-h" />
                            </button>
                          </div>
                        ) }
                      </div>
                    </div>
                  </div>
                );
              }) }
            </SimpleBar>
          </div>
        );
      } }
    </DashupUIContext.Consumer>
  );
};

// export default page menu
export default (ctx) => {
  // use context
  DashupUIContext = ctx;

  // return actual component
  return DashupUIGridBody;
};