
// import react
import { Button } from 'react-bootstrap';
import React, { createContext, useState, useEffect } from 'react';

// import local modules
import Body from './Body';
import Menu from './Menu';
import Item from './Item';
import Share from './Share';
import Filter from './Filter';
import Config from './Config';
import Connect from './Connect';

// create context
const DashupUIContext = createContext({});

// create page base
const DashupUIPage = (props = {}) => {
  // set config
  const [config, setConfig] = useState(false);
  const [importing, setImporting] = useState(false);
  const [defaulted, setDefaulted] = useState(false);

  // get color
  const getColor = () => {
    // return light
    if (!props.page) return;

    // parent
    let color = props.page.get('color');
    let parent = !props.page.get('parent') || props.page.get('parent') === 'root' ? null : props.dashup.page(props.page.get('parent'));

    // while
    while (parent && !color) {
      color = parent.get('color');
      parent = !parent.get('parent') || parent.get('parent') === 'root' ? null : props.dashup.page(parent.get('parent'));
    }

    // return color
    return color;
  };

  // get ctx
  const getCtx = () => {
    // return
    return {
      id        : props.page && props.page.get('_id'),
      page      : props.page,
      type      : props.page && props.page.get('type'),
      icon      : props.icon || (props.page && props.page.get('icon')) || 'pencil fa',
      color     : props.color || getColor(),
      title     : props.title || (props.page && props.page.get('name')),
      guest     : props.guest,
      noFit     : props.noFit,
      dashup    : props.dashup,
      loading   : props.loading,
      centered  : props.centered,
      available : props.available,

      // on logic
      onSearch : props.onSearch,

      // set methods
      setData : props.setData,
      setUser : props.setUser,
      setPage : props.setPage,

      // get logic
      getField         : props.getField,
      getForms         : props.getForms,
      getQuery         : props.getQuery,
      getModels        : props.getModels,
      getFields        : props.getFields,
      getStruct        : props.getStruct,
      getBlockStruct   : props.getBlockStruct,
      getPageStruct    : props.getPageStruct,
      getFieldStruct   : props.getFieldStruct,
      getActionStruct  : props.getActionStruct,
      getConnectStruct : props.getConnectStruct,
    };
  };

  // update ctx
  const updateCtx = () => {
    // set ctx
    setCtx(getCtx());
  };

  // create context
  const [ctx, setCtx] = useState(getCtx());

  // add listeners
  useEffect(() => {
    // check page
    if (ctx.id !== (props.page && props.page.get('_id'))) {
      // update ctx
      updateCtx();
    }

    // check page
    if (!props.page) return;

    // add listeners
    props.page.on('type', updateCtx);
    props.page.on('icon', updateCtx);
    props.page.on('name', updateCtx);
    props.page.on('color', updateCtx);
    props.dashup.on('active', updateCtx);

    // end effect
    return () => {
      // add listeners
      props.page.removeListener('type', updateCtx);
      props.page.removeListener('icon', updateCtx);
      props.page.removeListener('name', updateCtx);
      props.page.removeListener('color', updateCtx);
      props.dashup.removeListener('active', updateCtx);
    };
  }, [props.page && props.page.get('_id')]);

  // has all default values
  const missingRequire = () => {
    // check required
    const { require = [] } = props;

    // get require
    const filtered = require.filter((r) => !props.page.get(r.key));

    // missing require
    return filtered.length ? filtered : false;
  };

  // struct
  const struct = props.getPageStruct && props.getPageStruct();
      
  // on import
  const onImport = async (e) => {
    // prevent default
    e.preventDefault();
    e.stopPropagation();

    // loading
    setImporting(true);

    // load from url
    const { data } = await eden.router.post(`/api/${props.dashup.get('_id')}/page/${props.page.get('_id')}/default`, {
      default : struct.data.default,
      section : props.dashup.get('section') ? props.dashup.get('section').get('_id') : null,
    });

    // replace info
    props.dashup.set('pages', data.pages);

    // exported
    setConfig(false);
    setDefaulted(false);
    setImporting(false);
  };

  // return page
  return (
    <DashupUIContext.Provider value={ ctx }>
      <div className={ `page page-${props.type || (props.page && props.page.get('type')) || 'default'} flex-1` }>
        { missingRequire() ? (
          <>
            <DashupUIPage.Menu onConfig={ (e) => setConfig(true) } />
            { struct?.data?.default && !defaulted ? (
              <DashupUIPage.Config show={ !!(config || missingRequire()) } onHide={ (e) => !setConfig(false) && setDefaulted(true) }>
                <div className="card-body flex-0">
                  { struct.data.default.title }
                </div>
                <div className="card-body flex-1">
                  
                  { (struct.data.default.pages || []).map((page, i) => {
                    // return jsx
                    return (
                      <div key={ `page-${i}` } className="card card-permission mb-2">
                        <div className="card-body d-flex align-items-center ">
                          <span className={ `btn p-2 btn-sm btn-primary me-2` }>
                            <i className={ `fa fa-fw fa-${page.icon || props.getPageStruct(page.type).icon}` } />
                          </span>
                          <span className="flex-1">
                            { props.getPageStruct(page.type).title }
                          </span>
                        </div>
                      </div>
                    );
                  }) }

                </div>
                <div className="card-footer d-flex border-top border-secondary py-3">
                  <Button variant="danger" onClick={ (e) => !setConfig(false) && setDefaulted(true) }>
                    Close
                  </Button>
                  <Button variant="success" className="ms-auto" disabled={ importing } onClick={ (e) => onImport(e) }>
                    { importing ? 'Importing Default Pages...' : 'Import Default Pages' }
                  </Button>
                </div>
              </DashupUIPage.Config>
            ) : (
              <DashupUIPage.Config show={ config } onHide={ (e) => setConfig(false) } />
            ) }
            { missingRequire().map(({ key, label, variant = 'info' }) => {
              // return jsx
              return (
                <a
                  key={ `missing-${key}` }
                  href="#!"
                  className={ `alert alert-${variant} mb-3` }
                  onClick={ (e) => !setConfig(true) && e.preventDefault() }>
                  Click here to configure the <b>{ label }</b> for this page.
                </a>
              );
            }) }
          </>
        ) : (
          props.loading ? (
            <div className={ `page-body body-${props.type} d-flex flex-1 align-items-center` }>
              <div className="w-100 text-center">
                <i className="h1 fa fa-spinner fa-spin" />
              </div>
            </div>
          ) : props.children
        ) }
      </div>
    </DashupUIContext.Provider>
  );
};

// set menu
DashupUIPage.Body = Body(DashupUIContext);
DashupUIPage.Menu = Menu(DashupUIContext);
DashupUIPage.Item = Item(DashupUIContext);
DashupUIPage.Share = Share(DashupUIContext);
DashupUIPage.Filter = Filter(DashupUIContext);
DashupUIPage.Config = Config(DashupUIContext);
DashupUIPage.Connect = Connect(DashupUIContext);

// export default
export default DashupUIPage;