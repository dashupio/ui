

// import dependencies
import View from '@dashup/view';
import Select from '../Select';
import shortid from 'shortid';
import React, { useEffect, useState } from 'react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

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
const DashupUIPageConnect = (props = {}) => {
  // state
  const [updated, setUpdated] = useState(new Date());
  const [updating, setUpdating] = useState(null);
  const [removing, setRemoving] = useState(null);

  // get type
  const getType = (page, available) => {
    // get type
    return [...available].filter((connect) => (connect.categories || []).includes(page.get('type'))).map((connect) => {
      // return value
      return {
        icon  : connect.icon,
        value : connect.type,
        label : connect.title,

        selected : connect.type === updating?.type,
      };
    });
  };

  // set connect
  const setConnect = (key, value, { page, setPage }) => {
    // set to updating
    updating[key] = value;

    // set page
    page.set('connects', [...page.get('connects')]);
    debounce(setPage, 500)('connects', page.get('connects'));
    setUpdated(new Date());
  };

  // set connect
  const onRemove = (page, setPage) => {
    // new connects
    const newConnects = (page.get('connects') || []).filter((c) => c.uuid !== removing.uuid);

    // set page
    page.set('connects', newConnects);
    debounce(setPage, 500)('connects', newConnects);
    
    // remove
    setUpdating(null);
    setRemoving(null);
  };

  // on create
  const onCreate = (page, setPage) => {
    // set connect
    const connect = {
      uuid : shortid(),
    };

    // add to connects
    const connects = page.get('connects') || [];

    // add connect
    connects.push(connect);

    // set connects
    page.set('connects', connects);

    // set connect
    setUpdating(connect);
    debounce(setPage, 500)('connects', page.get('connects'));
  };

  // use effect
  useEffect(() => {
    // page
    const onUpdate = () => {
      // check updating
      if (updating) {
        // set values
        const realUpdating = (props.page.get('connects') || []).find((c) => c.uuid === updating.uuid);

        // set values
        if (realUpdating) setUpdating(realUpdating);
      }

      // set updated
      setUpdated(new Date());
    };

    // on update
    props.page.on('connects', onUpdate);

    // return done
    return () => {
      // remove listener
      props.page.removeListener('connects', onUpdate);
    };
  }, [props.page && props.page.get('_id'), updating?.uuid]);

  // return JSX
  return (
    <DashupContext.Consumer>
      { (data) => {
        // destruct
        const { page, available, dashup, setPage, getConnectStruct } = data;

        // get connects
        const connects = page.get('connects') || [];

        // get struct
        const struct = updating ? getConnectStruct(updating) : null;

        // return jsx
        return (
          <>
            <div className="flex-1">
              { removing ? (
                  <div className="py-5 text-center">
                    Are you sure you want to remove this connector?
                  </div>
                ) : (
                  updating ? (
                    <>
                      <div className="mb-3">
                        <label className="form-label">
                          Connect Type
                        </label>
                        <Select options={ getType(page, available?.connects) } value={ getType(page, available?.connects).filter((c) => c.selected) } onChange={ (value) => setConnect('type', value?.value, { page, setPage }) } />
                      </div>
                      { !!updating.type && (
                        <>
                          <div className="mb-3">
                            <label className="form-label">
                              Connect Name
                            </label>
                            <input className="form-control" type="text" onChange={ (e) => setConnect('name', e.target.value, { page, setPage }) } defaultValue={ updating.name } />
                          </div>
                          <View
                            { ...data }

                            type="connect"
                            view="config"
                            struct={ updating.type }
                            connect={ updating }
                            setConnect={ (key, value) => setConnect(key, value, { page, setPage }) }
                          />
                        </>
                      ) }
                    </>
                  ) : (
                  (connects || []).length ? connects.map((connect, i) => {
                    // return jsx
                    return (
                      <div key={ `connect-${i}` } className="card mb-2">
                        <div className="card-body d-flex align-items-center">
                          <OverlayTrigger
                            overlay={
                              <Tooltip>
                                { getConnectStruct(connect.type)?.title }
                              </Tooltip>
                            }
                            placement="top"
                          >
                            <span className="btn btn-primary me-2">
                              <i className={ `fa fa-fw fa-${getConnectStruct(connect.type)?.icon}` } />
                            </span>
                          </OverlayTrigger>
                          <div className="flex-1">
                            { connect.name || connect.uuid }
                          </div>
                          <OverlayTrigger
                            overlay={
                              <Tooltip>
                                Update Connect
                              </Tooltip>
                            }
                            placement="top"
                          >
                            <Button variant="primary" className="ms-2" onClick={ () => setUpdating(connect) }>
                              <i className="fa fa-fw fa-ellipsis-h" />
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            overlay={
                              <Tooltip>
                                Remove Connect
                              </Tooltip>
                            }
                            placement="top"
                          >
                            <Button variant="danger" className="ms-2" onClick={ () => setRemoving(connect) }>
                              <i className="fa fa-fw fa-trash" />
                            </Button>
                          </OverlayTrigger>
                        </div>
                      </div>
                    );
                  }) : (
                    <div className="py-5 text-center">
                      This page has no connects, click below to create one.
                    </div>
                  )
                )
              ) }
            </div>
            <div className="mt-3 d-flex">
              { removing ? (
                <>
                  <Button variant="info" className="me-auto" onClick={ (e) => setRemoving(null) }>
                    Cancel
                  </Button>
                  <Button variant="danger" className="ms-auto" onClick={ (e) => onRemove(page, setPage) }>
                    Confirm
                  </Button>
                </>
              ) : (
                updating ? (
                  <>
                    <Button variant="danger" className="me-auto" onClick={ (e) => setRemoving(updating) }>
                      Remove
                    </Button>
                    <Button variant="info" className="ms-auto" onClick={ (e) => setUpdating(null) }>
                      Back
                    </Button>
                  </>
                ) : (
                  <Button variant="success" className="ms-auto" onClick={ (e) => onCreate(page, setPage) }>
                    Create Connect
                  </Button>
                )
              ) }
            </div>
          </>
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
  return DashupUIPageConnect;
};