

// import dependencies
import moment from 'moment';
import React, { useRef, useState } from 'react';
import { Color, Modal, Chat, View, Tabs, Tab } from '../';

// colors
import colors from '../colors';

// create menu component
const DashupUIBlockConfig = (props = {}) => {
  // tabs
  const [tab, setTab] = useState('config');
  const [color, setColor] = useState(false);

  // refs
  const colorRef = useRef(null);

  // get struct
  const struct = props.getBlockStruct(props.block.type);

  // tabs
  const tabs = struct?.data?.tabs || ['config'];

  // return JSX
  return !!props.block && !!struct ? (
    <>
      <Modal size="xl" show={ props.show } onHide={ props.onHide }>
        <Modal.Body className="card bg-light p-0">
          <div className="row g-0">
            <div className="col-lg-8 bg-white d-flex flex-column has-shadow">
              
              <div className="card-header py-3 border-bottom flex-0">
                <h5 className="modal-title">
                  <i className={ `me-2 ${struct.icon || 'fa fa-align-justify'}` } />
                  { props.block.label || `${struct.title} Block` }
                </h5>
                <button type="button" className="btn btn-link ms-auto d-inline d-lg-none" onClick={ props.onHide }>
                  <i className="fa fa-times" />
                </button>
              </div>

              { struct && (
                <div className="card-body flex-0 border-bottom">
                  <i className={ `me-2 ${struct.icon || 'fa fa-align-justify'}` } />
                  { struct.title } Block
                </div>
              ) }

              <div className="card-body flex-0">
                <div className="d-flex flex-row">
                  <div className="flex-0 me-3">
                    <div className="mb-3">
                      <label className="d-block form-label">
                        Color
                      </label>
                      <button ref={ colorRef } type="button" className="btn px-3" onClick={ () => setColor(true) } style={ {
                        background : colors[props.block.color] || props.block.color?.hex,
                      } }>
                        &nbsp;
                      </button>
                    </div>
                  </div>
                  <div className="flex-1">
                    <label className="form-label">
                      Label
                    </label>
                    <input className="form-control" value={ props.block.label || '' } onChange={ (e) => props.setBlock(props.block, 'label', e.target.value, true) } />
                  </div>
                </div>
              </div>
              
              <div className="card-body flex-0 border-bottom">
                <Tabs
                  id="block-config"
                  onSelect={ (k) => setTab(k) }
                  activeKey={ `${tab}`.toLowerCase() }
                >
                  { tabs.map((tab, i) => {
                    // return jsx
                    return (
                      <Tab key={ `block-config-${tab}`.toLowerCase() } eventKey={ `${tab}`.toLowerCase() } title={ `${tab.charAt(0).toUpperCase()}${tab.slice(1)}` } className="pt-4">
                        <View
                          { ...{
                            ...props,

                            type   : 'block',
                            view   : tab,
                            struct : props.block.type,
                          } }
                        />                 
                      </Tab>
                    );
                  }) }
                </Tabs>
              </div>

            </div>
            <div className="col-lg-4 d-flex flex-column">
              <div className="card-header bg-transparent d-flex">
                <div className="d-inline-block me-auto">
                  <small className="d-block">
                    Created At
                  </small>
                  <div>
                    { moment(props.block._meta?.created || new Date()).format('Do MMM, h:mma') }
                  </div>
                </div>
                <button type="button" className="btn btn-link ms-auto" onClick={ props.onHide }>
                  <i className="fa fa-times" />
                </button>
              </div>
              
              <div className="card-body flex-1" />
              
              <div className="card-footer chat-sm bg-transparent d-flex flex-column border-top h-75 py-3">
                <Chat size="sm" dashup={ props.dashup } page={ props.page } thread={ `${props.page.get('_id')}.${props.block.uuid}` }>
                  <div className="d-flex flex-column flex-1">
                    <div className="flex-1 fit-content">
                      <Chat.Thread />
                    </div>
                    <div className="flex-0">
                      <Chat.Input />
                    </div>
                  </div>
                </Chat>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>


      { !!color && <Color target={ colorRef } show color={ colors[props.block.color] || props.block?.hex || 'transparent' } colors={ Object.values(colors) } onHide={ () => setColor(false) } onChange={ (hex) => props.setBlock(props.block, 'color', hex.hex === 'transparent' ? null : hex) } /> }
    </>
  ) : null;
};

// export default page menu
export default DashupUIBlockConfig;