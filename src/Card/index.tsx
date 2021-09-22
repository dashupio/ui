
// import dependencies
import React, { useState, useEffect, useRef } from 'react';
import { Hbs, View, colors, Overlay, Popover, OverlayTrigger, Tooltip, Dropdown } from '../';

// create menu component
const DashupUICard = (props = {}) => {
  // use state
  const [count, setCount] = useState(0);
  const [updated, setUpdated] = useState(new Date());
  const [tagOpen, setTagOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);

  // refs
  const tagRef = useRef(null);
  const userRef = useRef(null);

  // add listeners
  useEffect(() => {
    // check page
    if (!props.page) return;

    // on update
    const onUpdate = () => {
      // updated
      setUpdated(new Date());
    };

    // on update
    props.dashup.action({
      type   : 'page',
      struct : 'channel',
    }, 'count', props.item.get('_id')).then(setCount);
    props.dashup.socket.on(`count.${props.item.get('_id')}`, setCount);

    // on update
    props.item.on('update', onUpdate);

    // return unlisten
    return () => {
      // off
      props.item.removeListener('update', onUpdate);
      props.dashup.socket.off(`count.${props.item.get('_id')}`, setCount);
    };
  }, [props.item && props.item.get('_id'), props.page && props.page.get('_id')]);

  // get color
  const getColor = () => {
    // color tag
    const colorTag = hasTags() && getTags(getTagFields().find((t) => getTags(t).length))[0];

    // get color
    return colorTag?.color ? {
      color      : colorTag.color?.hex && colorTag.color?.drk ? '#fff' : '#000',
      background : colors[colorTag.color] || colorTag.color?.hex || colorTag.color,
    } : null;
  };

  // get tag types
  const getTagFields = () => {
    // check get field
    if (!props.getField) return [];

    // set types
    let types = typeof props.tag !== 'undefined' ? props.tag : (props.page.get('data.tag') || []);
    if (!Array.isArray(types)) types = [types];

    // return fields
    return types.map((f) => props.getField(f)).filter((f) => f);
  };

  // get user types
  const getUserFields = () => {
    // check get field
    if (!props.getField) return [];
    
    // set types
    let types = typeof props.user !== 'undefined' ? props.user : (props.page.get('data.user') || []);
    if (!Array.isArray(types)) types = [types];

    // return fields
    return types.map((f) => props.getField(f)).filter((f) => f);
  }

  // get tags
  const getTags = (tagField) => {
    // tag field
    if (!tagField) return [];

    // get options
    const options = tagField.options || [];

    // check options
    if (!options.length) return [];

    // get value
    let val = props.item.get(tagField.name || tagField.uuid) || [];

    // set value
    if (!Array.isArray(val)) val = [val].filter((v) => v);

    // tags
    return options.filter((t) => {
      // return has tag
      return val.includes(t.value);
    });
  };

  // get users
  const getUsers = (userField) => {
    // check options
    if (!userField) return [];

    // get value
    let val = props.item.get(userField.name || userField.uuid) || [];

    // set value
    if (!Array.isArray(val)) val = [val].filter((v) => v);

    // tags
    return val;
  };

  // get short name
  const getName = (user) => {
    // get name
    const name = `${user.name || ''}`.trim() || 'N A';

    // return name
    return `${(name.split(' ')[0] || '')[0] || ''}${(name.split(' ')[1] || '')[0] || ''}`;
  };

  // get avatar
  const getAvatar = (user) => {
    // return avatar
    return ((((user.avatar || [])[0] || {}).thumbs || {})['1x-sq'] || {}).url;
  };

  // has tags
  const hasTags = () => {
    // check page
    if (!props.page) return;

    // tag uuid
    return !!(props.tag || props.page.get('data.tag') || []).length;
  }

  // has user
  const hasUser = () => {
    // check page
    if (!props.page) return;

    // tag uuid
    return !!(props.user || props.page.get('data.user') || []).length;
  };

  // on tag
  const onUser = (field, value) => {
    // get tag value
    props.item.set(field.name || field.uuid, value);
    props.item.save();
  };

  // on tag
  const onTag = (field, value) => {
    // get tag value
    let tagVal = (props.item.get(field.name || field.uuid) || []);

    // check array
    if (!Array.isArray(tagVal)) tagVal = [tagVal].filter((t) => t && typeof t === 'string');

    // check includes
    if (tagVal.includes(value)) {
      tagVal = tagVal.filter((v) => v !== value);
    } else {
      tagVal.push(value);
    }

    // set and save
    props.item.set(field.name || field.uuid, field.multiple ? tagVal : tagVal.pop());
    props.item.save();
  };

  // users jsx
  const usersJsx = hasUser() && getUserFields().map((type, a) => {
    // return jsx
    return (
      <div ref={ userRef } key={ `user-${type.uuid}` }>
        { getUsers(type).map((user, i) => {
          // return jsx
          return (
            <OverlayTrigger
              key={ `user-${type.uuid}-${user.id || user._id}` }
              overlay={
                <Tooltip>
                  { `${type.label}: ${user.name}`}
                </Tooltip>
              }
              placement="top"
            >
              <button  className="btn btn-sm btn-circle me-1" style={ {
                backgroundImage : getAvatar(user) ? `url(${getAvatar(user)})` : null,
              } } onClick={ () => setUserOpen(type) }>
                { getAvatar(user) ? '' : getName(user) }
              </button>
            </OverlayTrigger>
          )
        }) }

        <OverlayTrigger
          overlay={
            <Tooltip>
              Add { type.label }
            </Tooltip>
          }
          placement="top"
        >
          <button className="btn btn-sm btn-outline-dark btn-circle" id={ `user-${props.item.get('_id')}` } onClick={ () => setUserOpen(type) }>
            <i className="fa fa-plus" />
          </button>
        </OverlayTrigger>
      </div>
    );
  });

  // return jsx
  return (!props.item || props.item.get('archived')) ? null : (
    <div className={ `card card-sm card-task${getColor() ? ' has-color' : ''}${props.size === 'sm' ? ' w-100 h-100 m-0' : ''}` } data-id={ props.item.get('_id') } style={ {
      background : props.background,

      ...(props.style || {}),
    } } id={ `card-${props.item.get('_id')}` }>
      { getColor() && (
        <div className="color-strip" style={ getColor() } />
      ) }

      { props.size !== 'sm' && hasTags() && (
        <div className="card-header tags p-2 pb-1">
          { getTagFields().map((type, a) => {
            // return jsx
            return (
              <div key={ `tag-${type.uuid}` } ref={ tagRef }>
                { getTags(type).map((tag, i) => {
                  // hex
                  const hex = colors[tag.color] || tag.color?.hex || tag.color;

                  // return jsx
                  return (
                    <OverlayTrigger
                      key={ `tag-${type.uuid}-${tag.value}` }
                      overlay={
                        <Tooltip>
                          { `${type.label}: ${tag.label}`}
                        </Tooltip>
                      }
                      placement="top"
                    >
                      <button className={ `btn btn-sm${colors[tag.color] ? ` btn-${tag.color}` : ''} me-1` } onClick={ () => setTagOpen(true) } style={ {
                        color      : tag.color?.hex ? (tag.color?.drk ? '#fff' : '#000') : null,
                        background : hex ? `${hex}cc` : null,
                      } }>
                        { tag.label }
                      </button>
                    </OverlayTrigger>
                  );
                }) }

                <OverlayTrigger
                  overlay={
                    <Tooltip>
                      Add { type.label }
                    </Tooltip>
                  }
                  placement="top"
                >
                  <button className="btn btn-sm btn-outline-dark me-2" id={ `tag-${props.item.get('_id')}` } onClick={ () => setTagOpen(true) }>
                    <i className="fa fa-tag" />
                  </button>
                </OverlayTrigger>
              </div>
            );
          }) }
        </div>
      ) }

      <div onClick={ (e) => props.onClick(props.item) } className={ `card-body py-1 px-2${props.size !== 'sm' && hasTags() ? ' pt-2' : ''}${props.size === 'sm' ? ' align-items-center' : ''}` }>
        { !!props.repeat && (
          <OverlayTrigger
            overlay={ props.repeat }
          >
            <i className="fa fa-repeat pe-2" />
          </OverlayTrigger>
        ) }
        <Hbs template={ props.template } data={ props.item ? props.item.toJSON() : {} } isInline={ props.size === 'sm' } />
      </div>

      { props.size !== 'sm' && (
        <div className="card-footer tags p-2 pt-1">
          { usersJsx }

          <OverlayTrigger
            overlay={
              <Tooltip>
                Discuss Item
              </Tooltip>
            }
            placement="top"
          >
            <button className={ `btn btn-sm btn-${props.item.get('_alert.important') && !props.item.get('_alert.all') ? '' : 'outline-dark'}${props.item.get('_alert.important') ? 'primary' : ''}${props.item.get('_alert.all') && !props.item.get('_alert.important') ? 'info' : ''} ms-auto` } id={ `chat-${props.item.get('_id')}` } onClick={ (e) => props.onItem(props.item) }>
              { !!count && (
                <span className="me-2">
                  { count.toLocaleString() }
                </span>
              ) }
              <i className="fa fa-comments" />
            </button>
          </OverlayTrigger>
        </div>
      ) }

      <Overlay show={ tagOpen } target={ tagRef.current } onHide={ () => setTagOpen(false) } rootClose placement="bottom-start">
        <Popover className="dropdown-menu dropdown-menu-edit p-2">
          { getTagFields().map((field, i) => {
            // return jsx
            return (
              <React.Fragment key={ `tag-${field.uuid}` }>
                { i !== 0 && (
                  <Dropdown.Divider />
                ) }
                <div className="tags">
                  { (field.options || []).map((opt, a) => {
                    // return jsx
                    return (
                      <button
                        key={ `opt-${opt.value}` }
                        style={ {
                          color      : opt.color?.hex && (opt.color?.drk ? '#fff' : '#000'),
                          background : colors[opt.color] || opt.color?.hex || opt.color,
                        } }
                        onClick={ () => onTag(field, opt.value) }
                        className={ `btn w-100${a !== 0 ? ' mt-2' : ''}` }
                        >
                        { opt.label }
                      </button>
                    );
                  }) }
                </div>
              </React.Fragment>
            );
          }) }
        </Popover>
      </Overlay>

      <Overlay show={ !!userOpen } target={ userRef.current } onHide={ () => setUserOpen(false) } rootClose placement="bottom-start">
        <Popover className="dropdown-menu popover-grid">
          <View
            view="input"
            type="field"
            struct="user"
            dashup={ props.dashup }

            field={ userOpen }
            value={ props.item && props.item.get(userOpen?.name || userOpen?.uuid) }

            noLabel
            onChange={ onUser }
            menuIsOpen
          />
        </Popover>
      </Overlay>
    </div>
  );
};

// export default
export default DashupUICard;