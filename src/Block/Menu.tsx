
// import dependencies
import SimpleBar from 'simplebar-react';
import { Offcanvas } from 'react-bootstrap';
import React, { useState } from 'react';

// create dashup grid body
const DashupUIBlockMenu = (props = {}) => {
  // selected
  const [selected, setSelected] = useState(null);

  return (
    <Offcanvas show={ props.show } onHide={ props.onHide }>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          { props.title || 'Grid Blocks' }
        </Offcanvas.Title>
      </Offcanvas.Header>
      <div className="w-100 h-100 d-flex flex-column">
        <div className="p-3 lead">
          Select one of these blocks and click "Add Block" to add it to your grid.
        </div>
        <div className="flex-1 fit-content">
          <SimpleBar className="p-3">
            { (props.available || []).map((action, i) => {
              // return actions
              return (
                <a
                  key={ `action-${action.type}` }
                  href="#!"
                  onClick={ (e) => !setSelected(action.type) && e.preventDefault() }
                  className={ `card border border-${selected === action.type ? 'primary text-primary' : 'secondary text-body'} mb-2` }
                  >
                  <div className="card-body">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">
                        { action.title }
                      </h5>
                    </div>
                    <p className="m-0">{ action.description }</p>
                  </div>
                </a>
              );
            }) }
          </SimpleBar>
        </div>
        { !!selected && (
          <div className="p-3 flex-0 btn-offcanvas">
            <button className="btn btn-primary btn-lg w-100" onClick={ (e) => props.onBlock(selected) }>
              Add Block
            </button>
          </div>
        ) }
      </div>
    </Offcanvas>
  );
};

// export default page menu
export default DashupUIBlockMenu;

