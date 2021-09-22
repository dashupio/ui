
// import dependencies
import SimpleBar from 'simplebar-react';
import { Offcanvas } from '../';
import { ReactSortable } from 'react-sortablejs';
import React, { useRef, useState, useEffect } from 'react';

// import on end
import onEnd from './drag';

// let context
let DashupUIContext = null;

// create dashup grid body
const DashupUIFormMenu = (props = {}) => {
  // state
  const [search, setSearch] = useState('');

  // colors
  const colors = ['primary', 'info', 'success', 'warning', 'danger'];
  
  // use ref
  const searchRef = useRef(null);

  // use effect
  useEffect(() => {
    // focus on search ref
    searchRef.current?.focus();
  }, []);

  return (
    <DashupUIContext.Consumer>
      { (data) => {
        // available
        data.available.sort((a, b) => {
          // return sort
          return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
        }).forEach((item, i) => {
          // i
          let t = i;

          // while
          while (t > (colors.length - 1)) {
            t = t - colors.length;
          }

          // color
          item.color = item.color || colors[t];
        });

        // return jsx
        return (
          <Offcanvas backdrop={ false } show={ props.show } onHide={ props.onHide }>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                { props.title || 'Form Fields' }
              </Offcanvas.Title>
            </Offcanvas.Header>
            <div className="w-100 h-100 d-flex flex-column">
              <div className="p-3 lead">
                Drag one of these fields into the form where you need it.
              </div>
              <div className="p-3">
                <input className="form-control" ref={ searchRef } placeholder="Filter Fields" type="search" onChange={ (e) => setSearch(e.target.value) } value={ search } />
              </div>
              <div className="flex-1 fit-content">
                <SimpleBar className="p-3">
                  <ReactSortable
                    id={ `${data.id}-menu` }
                    list={ data.available.sort((a, b) => {
                      // return sort
                      return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
                    }) }
                    group={ data.id }
                    onEnd={ (e) => onEnd(e, data.fields, data.setFields, data.onSaving, data.onConfig, props.onHide) }
                    setList={ () => {} }
                  >
                    { (data.available || []).sort((a, b) => {
                      // return sort
                      return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
                    }).map((field, i) => {
                      // search
                      if (search && search.length) {
                        // search string
                        const str = `${field.type} ${field.title} ${field.description}`.toLowerCase();

                        // check search
                        if (search.toLowerCase().split(' ').filter((t) => t.length).find((tag) => {
                          // find in value
                          return !str.includes(tag);
                        })) return (
                          <div key={ `field-${field.type}` } className="d-none" />
                        );
                      }

                      // return fields
                      return (
                        <div key={ `field-${field.type}` } className="card border border-secondary mb-2 cursor-move" data-type={ field.type }>
                          <div className="card-body d-flex">
                            <div className="row">
                              <div className="flex-0">
                                <i className={ `${field.icon} h4 fa-fw mx-3 my-3${field.color ? ` text-${field.color}` : ''}` } />
                              </div>
                              <div className="col d-flex flex-1 align-items-center">
                                <div className="w-100">
                                  <h5 className="mb-1">
                                    { field.title }
                                  </h5>
                                  <p className="m-0">{ field.description }</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    }) }
                  </ReactSortable>
                </SimpleBar>
              </div>
            </div>
          </Offcanvas>
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
  return DashupUIFormMenu;
};

