
import React from 'react';
import moment from 'moment';
import markdown from 'simple-markdown';
import defaultRules from './rules';
import { v4 as uuid } from 'uuid';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

// import message
import DashupUIChatEmbed from './Embed';

// let context
let Embed = null;
let DashupUIContext = null;

// create dashup grid body
const DashupUIChatMessage = (props = {}) => {

  // get embeds
  const getEmbeds = () => {
    // return embeds
    return (props.message?.embeds || []).filter((e) => e && e.data && e.data.type);
  };

  // in thread
  const inThread = () => {
    // return in thread
    return props.message?.by?.id === props.prev?.by?.id || (!props.message?.by?.id && props.message?.by?.name === props.prev?.by?.name);
  };

  // parse content
  const parseContent = (dashup, text = '') => {
    
		// state
		const state = {
			inline  : true,
			inQuote : false
    };
    
    // add rules
    defaultRules.tags = {
      order : markdown.defaultRules.strong.order,
      match : function (source) {
        return /^[@#]\[([^\]]+)\]\(([^\)]+)\)/.exec(source);
      },
      parse : function (capture, parse, state) {
        // get capture
        const [replace, display, id] = capture;

        // return tag
        return {
          id,
          display,
          replace,
          trigger : replace[0],
        };
      },
      react : (node, output, state) => {
        // page
        const page = node.trigger === '#' ? dashup.page(node.id) : null;

        // get parent
        const parent = page && (page.get('parent') || 'root') !== 'root' && dashup.page(page.get('parent'));

        // color
        const color = (page && page.get('color')) || (parent && parent.get('color'));

        // url
        const url = node.trigger === '#' ? `/app/${node.id}` : null;

        // return jsx
        return (
          <a
            key={ state.key }
            href={ url || '#!' }
            className={ `badge badge-tag${color ? '' : ' bg-light text-dark'}` }
            contentEditable={ false }
            
            style={ {
              color      : color?.hex ? (color?.drk ? '#fff' : '#000') : null,
              background : color?.hex,
            } }
          >
            { node.trigger === '@' ? (
              <i className="fa fa-at me-1" />
            ) : (
              page && page.get('icon') ? (
                <i className={ `fa fa-${page.get('icon')} me-1` } />
              ) : node.trigger
            ) }
            { node.display }
          </a>
        );
      },
    };

		// parser
		const parser = markdown.parserFor({
      ...defaultRules,

      ...(props.rules || {}),
    });

    // output
		const reactOutput = markdown.outputFor({
      ...defaultRules,

      ...(props.rules || {}),
    }, 'react');

		// return
    return reactOutput(parser(text || '', state), state);
  };

  // get short name
  const getName = (user) => {
    // get name
    const name = `${user.name || ''}`.trim() || 'N A';

    // return name
    return `${(name.split(' ')[0] || '')[0] || ''}${(name.split(' ')[1] || '')[0] || ''}`;
  };

  // return jsx
  return (
    <DashupUIContext.Consumer>
      { (data) => {
        // check removed
        if (props.message.removed) return <div />

        // return jsx
        return (
          <div className={ `message${inThread() ? ' in-thread' : ''}` }>
            <div className="message-avatar">
              <div  className={ `avatar rounded-circle${props.message?.by?.avatar ? '' : ' bg-secondary'}` } style={ {
                backgroundImage : props.message?.by?.avatar ? `url(${props.message.by.avatar})` : null,
              } }>
                { props.message?.by?.avatar ? '' : getName(props.message.by) }
              </div>
            </div>
            <div className="message-body">
              <div className="message-by">
                { !!props.message?.by?.name && (
                  <b className="me-2">
                    { props.message.by.name }
                  </b>
                ) }
                
                <OverlayTrigger
                  overlay={
                    <Tooltip>
                      { moment(props.message.created_at).format('LL') }
                    </Tooltip>
                  }
                  placement="top"
                >
                  <span className="text-muted">
                    { moment(props.message.created_at).fromNow() }
                  </span>
                </OverlayTrigger>
              </div>
              <div className="message-content">
                { parseContent(data.dashup, props.message.parsed || props.message.message) }
              </div>
              { !!getEmbeds().length && (
                <div className="mb-2 message-embeds">
                  { getEmbeds().map((embed, i) => {
                    // return jsx
                    return (
                      <div key={ `embed-${props.message.id}-${i}` } className="mt-2 card">
                        <div className="card-body">
                          <Embed embed={ embed } message={ props.message } />
                        </div>
                      </div>
                    );
                  }) }
                </div>
              ) }
            </div>

            { (!!data.canAdmin || props.message?.by?.id === data.dashup?.get('_meta.user')) && (
              <div className="message-hover">
                <div className="d-flex align-items-center">
                  <div className="ms-auto">
                    <div className="btn-group">
                      { /*
                      <OverlayTrigger
                        overlay={
                          <Tooltip>
                            Update Message
                          </Tooltip>
                        }
                        placement="top"
                      >
                        <button className="btn btn-sm btn-primary" onClick={ (e) => data.onUpdate(props.message) }>
                          <i className="fa fa-pencil" />
                        </button>
                      </OverlayTrigger>
                      */ }
                      <OverlayTrigger
                        overlay={
                          <Tooltip>
                            Remove Message
                          </Tooltip>
                        }
                        placement="top"
                      >
                        <button className="btn btn-sm btn-danger" onClick={ (e) => data.onRemove(props.message) }>
                          <i className="fa fa-trash" />
                        </button>
                      </OverlayTrigger>
                    </div>
                  </div>
                </div>
              </div>
            ) }
          </div>
        );
      } }
    </DashupUIContext.Consumer>
  );
};

// export default page menu
export default (ctx) => {
  // use context
  Embed = DashupUIChatEmbed(ctx);
  DashupUIContext = ctx;

  // return actual component
  return DashupUIChatMessage;
};