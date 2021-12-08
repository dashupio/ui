
// import react
import { Box, CircularProgress } from '../';
import React, { createContext, useRef, useState, useEffect } from 'react';

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
  // state
  const [refreshing, setRefreshing] = useState(false);

  // state
  let shownConfig = useRef(false);

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

  // has all default values
  const missingRequire = () => {
    // check required
    const { require = [] } = props;

    // get require
    const filtered = require.filter((r) => !props.page.get(r.key));

    // missing require
    return filtered;
  };

  // on refresh
  const onRefresh = (to = 200) => {
    // set refreshing
    setRefreshing(true);

    // done
    setTimeout(() => {
      setRefreshing(false);
      updateCtx();
    }, to);
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
      onShare   : props.onShare,
      onConfig  : props.onConfig,
      onSearch  : props.onSearch,
      onRefresh : props.onRefresh || onRefresh,

      // set methods
      setData : props.setData,
      setUser : props.setUser,
      setPage : props.setPage,

      // render body
      missingRequire : missingRequire(),

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

  // missing require
  useEffect(() => {
    // shown config
    if (shownConfig.current) return;

    // check missing require
    if (!ctx.onConfig) return;

    // if missing require
    if (!missingRequire().length) return;

    // show config
    ctx.onConfig();

    // set true
    shownConfig.current = true;
  }, [ctx.onConfig, missingRequire()]);

  // return page
  return (
    <DashupUIContext.Provider value={ ctx }>
      { (props.loading || refreshing) ? (
        <Box flex={ 1 } alignItems="center" justifyContent="center" display="flex">
          <CircularProgress />
        </Box>
      ) : (
        <Box flex={ 1 } display="flex" flexDirection="column">
          { props.children }
        </Box>
      ) }
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