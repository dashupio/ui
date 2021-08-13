
import React, { useState } from 'react';
import { OverlayTrigger, Tooltip, Modal, Button } from 'react-bootstrap';

// let context
let DashupUIContext = null;

// create dashup grid body
const DashupUIGridBulk = (props = {}) => {
  // remove
  const [remove, setRemove] = useState(false);

  // return JSX
  return (
    <DashupUIContext.Consumer>
      { ({ saving, columns, selected, canSubmit, renderField, onRemoveBulk }) => {
        // return jsx
        return canSubmit && (selected?.total || props.selected?.total || 0) ? (
          <>
            <div className="grid-bulk">
              <div className="mt-3 mb-2">
                <b>{ (selected?.total || props.selected?.total || 0).toLocaleString() } Items Selected</b>
              </div>
              <div className="grid-body">
                <div className="grid-row">
                  <div className="grid-column grid-column-add" onClick={ (e) => props.onSelect('clear') }>
                    <div className="column-inner">
                      <OverlayTrigger
                        key={ `tooltip-deselect` }
                        overlay={
                          <Tooltip id={ `deselect-tooltip` }>
                            Deselect All
                          </Tooltip>
                        }
                        placement="right"
                      >
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="selected" checked={ true } onChange={ (e) => {} } />
                        </div>
                      </OverlayTrigger>
                    </div>
                  </div>

                  { props.item ? (
                    <div className="grid-column-scroll">
                      { columns.map((column, i) => {
                        // return jsx
                        return (
                          <div key={ `bulk-row-${column.id}` } className="grid-field" style={ {
                            maxWidth  : `${column.basis}%`,
                            flexBasis : `${column.basis}%`,
                          } }>
                            { (renderField || props.renderField)(props.item, column, selected || props.selected, saving) }
                          </div>
                        );
                      }) }
                    </div>
                  ) : (
                    <div className="grid-column-scroll" />
                  ) }

                  <div className="grid-column grid-column-edit">
                    <div className="column-inner align-items-center justify-content-center">
                      <div className="column-body">
                        <button className="btn btn-sm btn-outline-danger" onClick={ (e) => setRemove(true) }>
                          <i className="fa fa-trash" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            { remove && (
              <Modal show onHide={ (e) => setRemove(null) }>
                <Modal.Header closeButton>
                  <Modal.Title>
                    Removing <b>{ (selected?.total || props.selected?.total || 0).toLocaleString() } items</b>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p className="lead">
                    Are you sure you want to remove <b>{ (selected?.total || props.selected?.total || 0).toLocaleString() }</b> items?
                  </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={ (e) => !setRemove(null) && e.preventDefault() }>
                    Close
                  </Button>
                  <Button variant="danger" className="ms-2" disabled={ saving } onClick={ (e) => onRemoveBulk() }>
                    { saving ? 'Removing...' : 'Confirm' }
                  </Button>
                </Modal.Footer>
              </Modal>
            ) }
          </>
        ) : <div />;
      } }
    </DashupUIContext.Consumer>
  );
};

// export default page menu
export default (ctx) => {
  // use context
  DashupUIContext = ctx;

  // return actual component
  return DashupUIGridBulk;
};