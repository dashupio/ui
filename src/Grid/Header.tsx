
// import react
import View from '@dashup/view';
import { v4 as uuid } from 'uuid';
import { ReactSortable } from 'react-sortablejs';
import React, { useRef, useState } from 'react';
import { Popover, Overlay, Dropdown, Modal, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

// let context
let DashupUIContext = null;

// create dashup grid body
const DashupUIGridHeader = (props = {}) => {
  // use state
  const [basis, setBasis] = useState(null);
  const [update, setUpdate] = useState(null);
  const [rename, setRename] = useState(null);
  const [remove, setRemove] = useState(null);
  const [resize, setResize] = useState(null);
  const [showColumn, setShowColumn] = useState(false);

  // header
  const column = useRef(null);
  const header = useRef(null);

  // fix basis
  const fixBasis = (columns) => {
    // original values
    const minWidth = 5;

    // check columns
    columns.forEach((col) => {
      // set basis
      if (!col.basis) col.basis = parseFloat((100 / columns.length).toFixed(2));
      if (col.basis < minWidth) col.basis = minWidth;
    });

    // total basis
    const totalBasis = columns.reduce((accum, col) => {
      return accum + col.basis;
    }, 0);

    // fit into basis properly
    if (totalBasis !== 100) {
      // check columns
      columns.forEach((col) => {
        // set basis
        col.basis = parseFloat(((col.basis / totalBasis) * 100).toFixed(2));
      });
    }

    // return columns
    return columns;
  };

  // on add column
  const onAdd = async (e, { title, field = 'custom', sort = null, view = null, columns, setColumns }) => {
    // prevent
    e.preventDefault();
    e.stopPropagation();

    // create new column
    const column = {
      view,
      title,
      id    : uuid(),
      sort  : sort,
      field : field,
      order : columns.length + 1
    };

    // push column
    columns.push(column);
    (props.setColumns || setColumns)(fixBasis(columns));

    // set column
    if (field === 'custom') setUpdate(column);
  };

  // on remove
  const onRemove = async (e, column, { columns, setColumns }) => {
    // remove
    (props.setColumns || setColumns)(fixBasis(columns.filter((c) => c.id !== column.id)));
  };

  // on save
  const onSave = (e, column, { columns, setColumns }) => {
    // set columns
    (props.setColumns || setColumns)(fixBasis(columns));

    // check rename
    if (rename) setRename(null);
    if (update) setUpdate(null);
  };

  // on end
  const onEnd = (e, { columns, setColumns }) => {
    // item
    const { item, target, newIndex } = e;

    // get item id
    const id = item.getAttribute('data-column');

    // find children
    const children = [...(target.childNodes)].map((node) => {
      // check id
      return node.getAttribute && node.getAttribute('data-column');
    }).filter((idX) => idX !== id);

    // splice in
    children.splice(newIndex, 0, id);

    // new columns
    const newColumns = children.map((child) => columns.find((c) => c.id === child));

    // set order
    newColumns.forEach((col, i) => col.order = i);

    // set columns
    (props.setColumns || setColumns)(fixBasis(newColumns));
  };

  // begin resize
  const beginResize = (e, i, column, { columns, setColumns }) => {
    // check target
    if (!e.target.getAttribute('class').includes('column-resize')) return;

    // original values
    const minWidth  = 5;
    const maxWidth  = 100 - ((columns.length - 1) * minWidth);
    const origPageX = e.pageX;
    const origBasis = column.basis;

    // set change
    let change = 0;

    // temp basis
    const tempBasis = columns.reduce((accum, col) => {
      // add basis
      accum[col.id] = col.basis || minWidth;

      // return accum
      return accum;
    }, {});

    // column moving
    setBasis(tempBasis);
    setResize(column.id);

    // mouse move
    const mouseMove = (e) => {
      // header width
      const headerWidth = header.current.scrollWidth;

      // update change
      const changeX = origPageX - e.pageX;

      // check width
      if (!headerWidth || !changeX) return;

      // check width of change
      change = (parseFloat(((changeX / headerWidth) * 100).toFixed(2)) || 0) * -1;

      // no change
      if (i === (columns.length - 1) && change < 0) change = 0;

      // create new basis
      let newBasis = parseFloat((origBasis + change > maxWidth ? maxWidth : origBasis + change).toFixed(2));
      if (newBasis < minWidth) newBasis = minWidth;

      // remove basis from all others
      let currentR = newBasis - origBasis;
      let currentI = i + 1;
      let currentP = columns[currentI];

      // remove max evenly from next column in order
      while (currentP && currentR != 0) {
        // remove from next basis
        let nextB = (currentP.basis - currentR) > maxWidth ? maxWidth : (currentP.basis - currentR);
        if (nextB < minWidth) nextB = minWidth;

        // set css on other columns
        tempBasis[currentP] = nextB;

        // remove from current R
        currentR = currentR - (currentP.basis - nextB);
        currentI = currentI + 1;
        currentP = columns[currentI];
      }

      // update basis
      tempBasis[column.id] = newBasis - currentR;
      
      // new basis
      setBasis({ ...tempBasis });
    };

    // mouse end
    const mouseEnd = async (e) => {
      // remove listeners
      document.removeEventListener('mouseup', mouseEnd);
      document.removeEventListener('mousemove', mouseMove);

      // update basis
      columns.forEach((column) => {
        // set basis
        if (tempBasis[column.id]) column.basis = tempBasis[column.id];
      });

      // set columns
      await (props.setColumns || setColumns)(fixBasis(columns));
      setBasis(null);
      setResize(null);
    };

    // on mousemove
    document.addEventListener('mouseup', mouseEnd)
    document.addEventListener('mousemove', mouseMove);
  };

  // remove jsx
  const removeJsx = ({ columns, setColumns }) => {
    // return jsx
    return remove && (
      <Modal show={ !!remove } onHide={ (e) => setRemove(null) }>
        <Modal.Header closeButton>
          <Modal.Title>
            Removing <b>{ remove.title }</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="lead">
            Are you sure you want to remove <b>{ remove.title }</b>?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={ (e) => !setRemove(null) && e.preventDefault() }>
            Close
          </Button>
          <Button variant="danger" className="ms-2" onClick={ (e) => !setRemove(null) && onRemove(e, remove, { columns, setColumns }) }>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  // update jsx
  const updateJsx = ({ dashup, columns, setColumns }) => {
    // return jsx
    return update && (
      <Modal show={ !!update } onHide={ (e) => onSave(e, update, { columns, setColumns }) }>
        <Modal.Header closeButton>
          <Modal.Title>
            Updating <b>{ update.title }</b>  
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label className="form-label">
              Column Title
            </label>
            <input className="form-control" defaultValue={ update.title } onChange={ (e) => update.title = e.target.value } />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Column Sort
            </label>
            <input className="form-control" defaultValue={ update.sort } onChange={ (e) =>  update.sort = e.target.value } />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Column Display
            </label>
            { !!(dashup || props.dashup) && (
              <View
                type="field"
                view="code"
                struct="code"

                value={ update.view }
                dashup={ dashup || props.dashup }
                onChange={ (v) => update.view = v }
              />
            ) }
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={ (e) => onSave(e, update, { columns, setColumns }) }>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  // render column
  const renderColumn = (column, i, { canAlter, sort, columns, setColumns, setSort }) => {
    // return JSX
    return (
      <div
        key={ `colum-header-${column.id}` }
        data-column={ column.id }
        className={ `grid-column grid-column-header${column.id === resize ? ' column-moving' : ''}${column.id === (rename && rename.id) ? ' active' : ''}` }
        style={ {
          maxWidth  : `${(basis && basis[column.id]) || column.basis}%`,
          flexBasis : `${(basis && basis[column.id]) || column.basis}%`,
        } }>
        <div className="column-inner">
          <div className="column-body">
            { column.id === (rename && rename.id) ? (
              <input className="column-body-inner" defaultValue={ column.title } onChange={ (e) => column.title = e.target.value } onBlur={ (e) => onSave(e, column, { columns, setColumns }) } autoFocus />
            ) : (
              <div className={ `column-body-inner${canAlter ? ' moves' : ''}` }>
                { column.title }
              </div>
            ) }
          </div>

          <OverlayTrigger
            overlay={
              <Tooltip>
                Sort by Column
              </Tooltip>
            }
            placement="top"
          >
            <button className={ `btn btn-sm btn-light column-btn ms-2 me-0${sort.id === column.id ? ' active' : ''}` } onClick={ (e) => setSort(column) }>
              { sort.id !== column.id ? (
                <i className="fa fa-arrows-v" />
              ) : (
                sort.way === 1 ? (
                  <i className="fa fa-arrow-up" />
                ) : (
                  <i className="fa fa-arrow-down" />
                )
              ) }
            </button>
          </OverlayTrigger>

          { column.id === (rename && rename.id) ? (
            <div className="btn-group ms-0 me-0">
              <button className="btn btn-sm btn-light column-btn" onClick={ (e) => onSave(e, column, { columns, setColumns }) }>
                <i className="fa fa-check" />
              </button>
              <button className="btn btn-sm btn-light column-btn" onClick={ (e) => !setRename(null) && e.preventDefault() }>
                <i className="fa fa-times" />
              </button>
            </div>
          ) : (
            canAlter && (
              <Dropdown className="btn-group dropdown ms-0 me-0">
                <OverlayTrigger
                  overlay={
                    <Tooltip>
                      Update Column
                    </Tooltip>
                  }
                  placement="top"
                >
                  <Dropdown.Toggle variant="light" size="sm" className="column-btn">
                    <i className="fa fa-cog" />
                  </Dropdown.Toggle>
                </OverlayTrigger>

                <Dropdown.Menu>
                  <Dropdown.Header>
                    Update Column
                  </Dropdown.Header>

                  <Dropdown.Item onClick={ (e) => !setRename(column) && e.preventDefault() }>
                    Rename column
                  </Dropdown.Item>
                  { column.field === 'custom' && (
                    <Dropdown.Item onClick={ (e) => !setUpdate(column) && e.preventDefault() }>
                      Update column
                    </Dropdown.Item>
                  )  }
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={ (e) => !setRemove(column) && e.preventDefault() } className="text-danger">
                    <i className="me-2 fa fa-trash" />
                    Remove column
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            )
          ) }

          { canAlter && (
            <div className="column-resize" data-column={ column.id } onMouseDown={ (e) => beginResize(e, i, column, { columns, setColumns }) } />
          ) }
          
        </div>
      </div>
    );
  };

  // return JSX
  return (
    <DashupUIContext.Consumer>
      { ({ sort, dashup, selected, canAlter, canSubmit, columns, available, setSort, setColumns }) => {
        return (
          <div className="grid-header" ref={ header }>
            <div className="grid-column grid-column-add" onClick={ (e) => props.onSelect && props.onSelect('all') }>
              <div className="column-inner">
                { canSubmit && props.onSelect && (
                  <OverlayTrigger
                    key={ `tooltip-grid` }
                    overlay={
                      <Tooltip id={ `select-all-tooltip` }>
                        { (selected || props.selected || {}).type === 'all' ? 'Deselect All' : 'Select All' }
                      </Tooltip>
                    }
                    placement="right"
                  >
                    <div className="column-body">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="selected" checked={ props.selected?.type === 'all' } onChange={ () => {} } />
                      </div>
                    </div>
                  </OverlayTrigger>
                ) }
              </div>
            </div>
            
            { canAlter ? (
              <ReactSortable
                list={ columns || [] }
                onEnd={ (e) => onEnd(e, { columns, setColumns }) }
                handle=".moves"
                setList={ () => {} }
                className="grid-column-scroll"
              >
                { (columns || []).map((column, i) => {
                  // return jsx
                  return renderColumn(column, i, { canAlter, sort, columns, setSort, setColumns });
                }) }
              </ReactSortable>
            ) : (
              <div className="grid-column-scroll">
                { (columns || []).map((column, i) => {
                  // return jsx
                  return renderColumn(column, i, { canAlter, sort, columns, setSort, setColumns });
                }) }
              </div>
              ) }
              
            <div className="grid-column grid-column-add">
              <div className="column-inner">
                { canAlter ? (
                  <>
                    <OverlayTrigger
                      key={ `tooltip-column` }
                      overlay={
                        <Tooltip id={ `column-add-tooltip` }>
                          Add Column
                        </Tooltip>
                      }
                      placement="left"
                    >
                      <div className="column-body" onClick={ () => setShowColumn(true) } ref={ column }>
                        <Button variant="outline-dark" size="sm" id="grid-column-add">
                          <i className="fa fa-columns" />
                        </Button>
                      </div>
                    </OverlayTrigger>

                    <Overlay show={ showColumn } target={ column.current } onHide={ () => setShowColumn(false) } rootClose placement="bottom-end">
                      <Popover className="dropdown-menu dropdown-menu-edit p-0">
                        <Dropdown.Header>
                            Add Column
                          </Dropdown.Header>

                          { (available || []).map((column, i) => {
                            // return jsx
                            return (
                              <Dropdown.Item key={ `add-column-${column.uuid}` } onClick={ (e) => onAdd(e, {
                                field : column.uuid  || column.key,
                                title : column.label || column.title,
        
                                columns,
                                setColumns,
                              }) }>
                                { column.title || column.label }
                              </Dropdown.Item>
                            );
                          }) }

                          <Dropdown.Divider />
                          <Dropdown.Item onClick={ (e) => onAdd(e, {
                            sort  : 'created_at',
                            view  : '{{date _meta.created_at}}',
                            title : 'Created At',

                            columns,
                            setColumns,
                          }) }>
                            <i className="fa fa-calendar-day me-2" />
                            Created At
                          </Dropdown.Item>
                          <Dropdown.Item onClick={ (e) => onAdd(e, {
                            sort  : 'updated_at',
                            view  : '{{date _meta.updated_at}}',
                            title : 'Updated At',

                            columns,
                            setColumns,
                          }) }>
                            <i className="fa fa-calendar-alt me-2" />
                            Updated At
                          </Dropdown.Item>
                          <Dropdown.Item onClick={ (e) => onAdd(e, {
                            view  : '',
                            title : 'Custom Column',

                            columns,
                            setColumns,
                          }) }>
                            <i className="fa fa-function me-2" />
                            Custom
                          </Dropdown.Item>
                      </Popover>
                    </Overlay>
                  </>
                ) : (
                  <div className="column-body">
                    <button className="btn btn-sm btn-outline-secondary" type="button">
                      <i className="fa fa-columns" />
                    </button>
                  </div>
                ) }
              </div>
            </div>

            { updateJsx({ dashup, columns, setColumns }) }
            { removeJsx({ columns, setColumns }) }
          </div>
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
  return DashupUIGridHeader;
};