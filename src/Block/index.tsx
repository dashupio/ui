
// import dependencies
import React from 'react';
import { View, Tooltip, OverlayTrigger } from '../';

// import local
import Menu from './Menu';
import Config from './Config';

// create menu component
const DashupUIBlock = (props = {}) => {

  // struct
  const struct = props.getBlockStruct && props.getBlockStruct(props.block.type);

  // return jsx
  return (
    <div className={ `dashup-block w-100 h-100${props.updating ? ' block-updating' : ''}` }>
      { props.updating && (
        <div className="block-hover">
          <div className="d-flex align-items-center">
            <div className="me-2">
              <div className="btn-group"> 
                <button className="btn btn-sm btn-info" onClick={ (e) => props.onConfig(props.block) }>
                  { props.block.label || struct?.title }
                </button>
              </div>
            </div>
            <div className="ms-auto">
              <div className="btn-group">
                <OverlayTrigger
                  overlay={
                    <Tooltip>
                      Block Config
                    </Tooltip>
                  }
                  placement="top"
                >
                  <button className="btn btn-sm btn-primary" onClick={ (e) => props.onConfig(props.block) }>
                    <i className="fa fa-ellipsis-h" />
                  </button>
                </OverlayTrigger>
                <OverlayTrigger
                  overlay={
                    <Tooltip>
                      Clone Block
                    </Tooltip>
                  }
                  placement="top"
                >
                  <button className="btn btn-sm btn-primary" onClick={ (e) => props.onClone(props.block) }>
                    <i className="fa fa-clone" />
                  </button>
                </OverlayTrigger>
                <OverlayTrigger
                  overlay={
                    <Tooltip>
                      Remove Block
                    </Tooltip>
                  }
                  placement="top"
                >
                  <button className="btn btn-sm btn-danger" onClick={ (e) => props.onRemove(props.block) }>
                    <i className="fa fa-trash" />
                  </button>
                </OverlayTrigger>
              </div>
            </div>
          </div>
        </div>
      ) }
      <View type="block" view="view" struct={ props.block.type } { ...props } />
    </div>
  );
};

// set children blocks
DashupUIBlock.Menu = Menu;
DashupUIBlock.Config = Config;

// export default
export default DashupUIBlock;