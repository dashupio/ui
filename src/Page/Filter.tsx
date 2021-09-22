
// import dependencies
import React, { useState } from 'react';
import { Query, colors, Tooltip, OverlayTrigger, Dropdown, Button, DropdownButton } from '../';

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
const DashupUIPageFilter = (props = {}) => {
  // state
  const [filter, setFilter] = useState(false);

  // has user
  const hasTags = (page) => {
    // get user
    if (props.tags) return typeof props.hasTags === 'function' ? props.hasTags() : true;

    // check page
    return !!(props.tags || page.get('data.tag') || []).length;
  };

  // has user
  const hasUser = (page) => {
    // get user
    if (props.users) return typeof props.hasUser === 'function' ? props.hasUser() : true;

    // check page
    return !!(props.users || page.get('data.user') || []).length;
  };

  // get tags
  const getTags = (page, fields) => {
    // find in page
    return fields.filter((f) => (props.tags || page.get('data.tag') || []).includes(f.uuid));
  };

  // return JSX
  return (
    <DashupContext.Consumer>
      { ({ page, dashup, setUser, getFields, getFieldStruct }) => {
        // get fields
        const fields = (props.getFields || getFields)();

        // get tags
        const tags = props.onTag && (props.getTags || getTags)(page, fields);

        // get sort field
        const sortField = page.get('data.sort.field') && fields.find((f) => f.uuid === page.get('data.sort.field'));

        // return jsx
        return (
          <>
            <div className="page-filter d-flex flex-wrap flex-0 mx--1 expand-lg mb-lg-3 justify-content-end">

              { !!props.onSearch && (
                <div className="col-12 col-lg-3 mx-lg-1 mb-3 mb-lg-0">
                  <div className="input-group input-group-search flex-1">
                    <input
                      onChange={ (e) => debounce(props.onSearch, 500)(e.target.value) }
                      className="form-control border-white"
                      defaultValue={ page.get('data.search') || '' }
                      />
                    <span className="input-group-text text-body bg-white border-white">
                      <i className="fa fa-search" />
                    </span>
                  </div>
                </div>
              ) }
              
              <div className="d-none d-lg-flex col flex-1" />

              { !!hasUser(page) && eden?.user?.exists() && (
                <div className="flex-column mx-1 mb-2 mb-lg-0">
                  <OverlayTrigger
                    overlay={
                      <Tooltip>
                        { page.get('user.filter.me') ? 'Show All' : 'Show Mine' }
                      </Tooltip>
                    }
                    placement="top"
                  >
                    <div className="btn-group"  data-toggle="tooltip" title="Filter by Mine">
                      <button className={ `btn ms-lg-1 btn-${page.get('user.filter.me') ? 'primary' : 'light'}` } onClick={ (e) => setUser('filter.me', !page.get('user.filter.me')) }>
                        <i className={ `fa fa-fw fa-${page.get('user.filter.me') ? 'user' : 'users'} me-2`} />
                        { page.get('user.filter.me') ? 'My Items' : 'All Items' }
                      </button>
                    </div>
                  </OverlayTrigger>
                </div>
              ) }

              { !!props.onSort && (
                <div className="flex-row mx-1 mb-2 mb-lg-0">
                  <OverlayTrigger
                    overlay={
                      <Tooltip>
                        { page.get('data.sort') ? `Sorted ${page.get('data.sort.way') === 1 ? 'ascending' : 'descending'}` : 'Sort By' }
                      </Tooltip>
                    }
                    placement="top"
                  >
                    <DropdownButton className="d-inline-block" variant={ page.get('data.sort') ? 'primary' : 'light' } title={ (
                      <i className={ `fa fa-fw fa-${page.get('data.sort') ? (
                        page.get('data.sort.way') === 1 ? 'sort-up' : 'sort-down'
                      ) : 'sort'}` } />
                    ) }>
                      <Dropdown.Header>
                        Sort By
                      </Dropdown.Header>
                      { fields.map((field, i) => {
                        // return jsx
                        return (
                          <Dropdown.Item
                            key={ `sort-${field.uuid}` }
                            onClick={ () => props.onSort({ field : field.uuid }) }
                          >
                            { field.label }
                          </Dropdown.Item>
                        );
                      }) }
                      <Dropdown.Divider />
                      <Dropdown.Item
                        key={ `sort-created` }
                        onClick={ () => props.onSort({ field : 'custom', sort : 'created_at' }) }
                      >
                        Created At
                      </Dropdown.Item>
                      <Dropdown.Item
                        key={ `sort-updated` }
                        onClick={ () => props.onSort({ field : 'custom', sort : 'updated_at' }) }
                      >
                        Updated at
                      </Dropdown.Item>
                    </DropdownButton>
                  </OverlayTrigger>

                  { !!page.get('data.sort.sort') && (
                    <Button variant="secondary ms-1" onClick={ (e) => props.onSort(page.get('data.sort')) }>
                      { page.get('data.sort.sort') === 'created_at' ? 'Created At' : '' }
                      { page.get('data.sort.sort') === 'updated_at' ? 'Updated At' : '' }
                      { page.get('data.sort.sort') !== 'created_at' && page.get('data.sort.sort') !== 'updated_at' ? page.get('data.sort.sort') : '' }
                    </Button>
                  ) }

                  { !!sortField && !!page.get('data.sort') && !page.get('data.sort.sort') && (
                    <Button variant="secondary ms-1" onClick={ (e) => props.onSort(page.get('data.sort')) }>
                      { sortField.label }
                    </Button>
                  ) }
                </div>
              ) }

              { !!props.onTag && hasTags(page) && (
                <div className="flex-row mx-1 mb-2 mb-lg-0">
                  <OverlayTrigger
                    overlay={
                      <Tooltip>
                        Filter by Tag
                      </Tooltip>
                    }
                    placement="top"
                  >
                    <DropdownButton className="d-inline-block" variant={ (page.get('user.filter.tags') || []).length ? 'primary' : 'light' } title={ (
                      <i className={ `fa fa-fw fa-tag` } />
                    ) }>
                      <Dropdown.Header>
                        Filter by Tag
                      </Dropdown.Header>
                      { tags.map((tag, i) => {
                        // return jsx
                        return (
                          <React.Fragment key={ `tag-${tag.uuid}` }>
                            { i !== 0 && <Dropdown.Divider /> }
                            { (tag.options || []).map((option, i) => {
                              // return jsx
                              return (
                                <Dropdown.Item
                                  key={ `tag-${tag.uuid}-${option.value}` }
                                  onClick={ () => props.onTag(tag, option) }
                                >
                                  { option.color && (
                                    <span className="badge me-2" style={ {
                                      background : colors[option.color] || option.color?.hex || option.color,
                                    } }>
                                      &nbsp;
                                    </span>
                                  ) }
                                  { option.label }
                                </Dropdown.Item>
                              );
                            }) }
                          </React.Fragment>
                        );
                      }) }
                    </DropdownButton>
                  </OverlayTrigger>
                  
                  { (page.get('user.filter.tags') || []).map((tag, i) => {
                    // get field
                    const field = tags.find((f) => f.uuid === tag?.field);

                    // check field
                    if (!field) return null;

                    // get option
                    const option = (field.options || []).find((opt) => opt.value === tag?.value) || {};

                    // jsx
                    return (
                      <OverlayTrigger
                        key={ `filter-${tag?.field}-${tag?.value}`}
                        overlay={
                          <Tooltip>
                            { field.label || field.name }: { option.label || tag?.value }
                          </Tooltip>
                        }
                        placement="top"
                      >
                        <Button
                          style={ {
                            color       : option.color?.hex && option.color?.drk ? '#fff' : '#000',
                            background  : colors[option.color] || option.color?.hex || option.color,
                            borderColor : colors[option.color] || option.color?.hex || option.color,
                          } }
                          variant=""
                          onClick={ (e) => props.onTag(field, option || tag) }
                          className="ms-1"
                        >
                          { option.label || tag?.value }
                        </Button>
                      </OverlayTrigger>
                    );
                  }) }
                </div>
              ) }

              { !!props.onFilter && (
                <div className="flex-row mx-1 mb-2 mb-lg-0" onClick={ (e) => setFilter(!filter) }>
                  <OverlayTrigger
                    overlay={
                      <Tooltip>
                        { filter ? 'Close Filter' : 'Filter View' }
                      </Tooltip>
                    }
                    placement="top"
                  >
                    <Button variant={ (page.get('user.query') ? page.get('user.query') : '[]').length > 2 || filter ? 'primary' : 'light' }>
                      <i className={ `fa fa-fw fa-${filter ? 'times' : 'filter'}` } />
                    </Button>
                  </OverlayTrigger>
                </div>
              ) }
            </div>
            { !!filter && !!props.onFilter && (
              <div className="flex-0">
                <Query
                  page={ page }
                  query={ props.query || page.get('user.query') }
                  dashup={ dashup }
                  fields={ fields }
                  onChange={ props.onFilter }
                  isString={ props.isString }
                  getFieldStruct={ getFieldStruct }
                  />
              </div>
            ) }
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
  return DashupUIPageFilter;
};