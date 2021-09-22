

// import dependencies
import moment from 'moment';
import React, { useState, useEffect } from 'react';
import { View, Chat, Page, Modal, Tabs, Tab } from '../';

// let context
let DashupContext = null;

// create menu component
const DashupUIPageConfig = (props = {}) => {
  // tabs
  let [tab, setTab] = useState(null);

  // return JSX
  return (
    <DashupContext.Consumer>
      { (data) => {
        // destruct
        const { type, page, dashup, getPageStruct } = data;

        // get struct
        const struct = getPageStruct();

        // check struct
        if (!struct) return null;

        // tabs
        const tabs = struct.data?.tabs || ['Config', 'Connects'];

        // check tab
        if (!tab) tab = tabs[0];

        // return jsx
        return (
          <Modal size="xl" show={ !!props.show } onHide={ props.onHide } enforceFocus={ false }>
            { !!props.show && (
              <Modal.Body className="card p-0">
                <div className="row g-0">
                  <div className="col-lg-8 d-flex flex-column has-shadow">
                    
                    <div className="card-header py-3 border-bottom flex-0">
                      <h5 className="modal-title">
                        <i className={ `me-2 fa-fw fa-${page.get('icon') || 'pencil fa'}` } />
                        { page.get('name') || page.get('_id') }
                      </h5>
                      <button type="button" className="btn btn-link ms-auto d-inline d-lg-none" onClick={ props.onHide }>
                        <i className="fa fa-times" />
                      </button>
                    </div>

                    { struct && (
                      <div className="card-body flex-0 border-bottom">
                        <i className={ `me-2 ${struct.icon} fa-fw` } />
                        { struct.title }
                      </div>
                    ) }
                    
                    { props.children || (
                      <div className="card-body flex-0 border-bottom">
                        <Tabs
                          id="page-config"
                          onSelect={ (k) => setTab(k) }
                          activeKey={ tab }
                        >
                          { tabs.map((tab, i) => {
                            // return jsx
                            return (
                              <Tab key={ `page-config-${tab}` } eventKey={ tab } title={ `${tab.charAt(0).toUpperCase()}${tab.slice(1)}` } className="pt-4">
                                { `${tab}`.toLowerCase() === 'connects' ? (
                                  <Page.Connect page={ page } dashup={ dashup } />
                                ) : (props[tab] || (
                                  <View

                                    { ...{
                                      ...data,

                                      type   : 'page',
                                      view   : `${tab}`.toLowerCase(),
                                      struct : type,
                                    } }
                                    />
                                )) }                      
                              </Tab>
                            );
                          }) }
                        </Tabs>
                      </div>
                    ) }
                    
                  </div>
                  <div className="col-lg-4 d-flex flex-column">
                    <div className="modal-sidebar">
                      <div className="card-header d-flex">
                        <div className="d-inline-block me-auto">
                          <small className="d-block">
                            Created At
                          </small>
                          <div>
                            { moment(page.get('_meta.created')).format('Do MMM, h:mma') }
                          </div>
                        </div>
                        <button type="button" className="btn btn-link ms-auto" onClick={ props.onHide }>
                          <i className="fa fa-times" />
                        </button>
                      </div>
                      
                      <div className="card-body flex-1" />
                      
                      <div className="card-footer chat-sm d-flex flex-column border-top border-secondary h-75 py-3">
                        <Chat size="sm" dashup={ dashup } page={ page } thread={ `${page.get('_id')}.config` }>
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
                </div>
              </Modal.Body>
            ) }
          </Modal>
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
  return DashupUIPageConfig;
};