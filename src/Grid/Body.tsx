
import React from 'react';
import SimpleBar from 'simplebar-react';
import { Dropdown } from 'react-bootstrap';

// let context
let DashupUIContext = null;

// create dashup grid body
const DashupUIGridBody = (props = {}) => {

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
            <SimpleBar className="grid-body p-relative">
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
                          
                          <Dropdown className="column-body">
                            <Dropdown.Toggle variant="outline-dark" size="sm">
                              <i className="fa fa-ellipsis-h" />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
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

                            </Dropdown.Menu>
                          </Dropdown>
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