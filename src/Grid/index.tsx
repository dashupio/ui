
// import react
import React, { createContext, useState, useEffect } from 'react';

// import local
import Body from './Body';
import Bulk from './Bulk';
import Group from './Group';
import Footer from './Footer';
import Header from './Header';
import Gallery from './Gallery';

// create context
const DashupUIContext = createContext();

// create page base
const DashupUIGrid = (props = {}) => {
  // get ctx
  const getCtx = ({ total = 0, items = [], loading = false }) => {
    // return
    return {
      // skip
      total,
      items,
      loading,
  
      sort  : props.sort || {},
      skip  : props.skip || 0,
      limit : props.limit || 25,
  
      // variables
      dashup    : props.dashup,
      saving    : props.saving,
      actions   : props.actions,
      columns   : props.columns,
      selected  : props.selected,
      available : props.available,
  
      // can
      canAlter   : props.canAlter,
      canSubmit  : props.canSubmit,
      fullHeight : props.fullHeight,
  
      // set methods
      setSkip    : props.setSkip,
      setSort    : props.setSort,
      setLimit   : props.setLimit,
      setColumns : props.setColumns,
  
      // event methods
      onRemoveBulk : props.onRemoveBulk,

      // render methods
      renderField : props.renderField,
    }
  };

  // create context
  const [ctx, setCtx] = useState(getCtx({ total : props.total, items : props.items }));

  // use effect
  useEffect(() => {
    // set ctx loading
    setCtx(getCtx({
      items   : ctx.items,
      total   : ctx.total,
      loading : ctx.loading,
    }));
  }, [props.saving, props.columns]);

  // use effect
  useEffect(() => {
    // set ctx loading
    setCtx(getCtx({
      items : ctx.items,
      total : ctx.total,
      loading : true,
    }));

    // let items
    let items, total;

    // on update
    const onUpdate = () => {
      // set ctx loading
      setCtx(getCtx({
        items   : items,
        total   : total,
        loading : false,
      }));
    };

    // load data
    props.loadData().then((data) => {
      // check listen on items
      if (data.items && data.items.on) {
        // set items
        items = data.items;
        total = data.total;

        // on update
        data.items.on('update', onUpdate);
      }

      // check data
      setCtx(getCtx({
        ...data,
        loading : false,
      }));
    });

    // return remove
    return () => {
      // check items
      if (items && items.removeListener) {
        items.removeListener('update', onUpdate);
        items.deafen();
      }
    };
  }, [props.id, props.skip, props.limit, props.sort?.way, props.sort?.sort || props.sort?.field, props.reload, props.updated]);

  // return page
  return (
    <div className={ `dashup-grid ${ctx.fullHeight ? 'd-flex flex-1' : 'w-100'}` }>
      <DashupUIContext.Provider value={ ctx }>
        { props.children }
      </DashupUIContext.Provider>
    </div>
  );
};

// set menu
DashupUIGrid.Body = Body(DashupUIContext);
DashupUIGrid.Bulk = Bulk(DashupUIContext);
DashupUIGrid.Group = Group(DashupUIContext);
DashupUIGrid.Header = Header(DashupUIContext);
DashupUIGrid.Footer = Footer(DashupUIContext);
DashupUIGrid.Gallery = Gallery(DashupUIContext);

// export default
export default DashupUIGrid;