
import React, { useState } from 'react';
import moment from 'moment';
import dotProp from 'dot-prop';

// let context
let DashupUIContext = null;

// create dashup grid body
const DashupUIChatEmbed = (props = {}) => {
  // use state
  const [show, setShow] = useState(false);

  // get duration
  const getDuration = (time) => {
    // return duration
    const duration = moment.duration(time * 100);

    // humanize
    return duration.humanize();
  };

  // return jsx
  return (
    <DashupUIContext.Consumer>
      { (data) => {
        // return jsx
        return (
          <div className={ `row row-eq-height embed-${props.embed.data?.type}` }>
            { !props.embed.loading && !!dotProp.get(props.embed, 'data.images.0.url') && (
              <div className={ `d-flex align-items-center ${!props.message || !show ? 'col-md-4' : 'col-12 mb-2'}` }>
                <div className="embed text-center w-100">
                  { show && !! props.embed.data?.html ? (
                    <div className="ratio ratio-16x9 rounded" dangerouslySetInnerHTML={ { __html : props.embed.data.html } } />
                  ) : (
                    <div className="ratio ratio-16x9">
                      <a
                        href={ props.embed.data?.url }
                        target="_blank"
                        onClick={ (e) => !setShow(true) && e.preventDefault() }
                        className="rounded"
                        style={ {
                          backgroundImage : `url(${dotProp.get(props.embed, 'data.images.0.url')}`,
                        } } />
                    </div>
                  ) }
                </div>
              </div>
            ) }
            
            <div className={ `d-flex align-items-center ${dotProp.get(props.embed, 'data.images.0.url') ? 'col-md-8' : 'col'}` }>
              { props.embed.loading ? (
                <div className="w-100 embed-title">
                  <b>Loading...</b>
                </div>
              ) : (
                <div className="w-100">
                  <div className="embed-title text-overflow">
                    <a href={ props.embed.data?.url } target="_blank">
                      <b className="d-block">{ props.embed.data?.title }</b>
                    </a>
                  </div>
                  <div className="embed-meta d-flex align-items-center">
                    { !!props.embed.data?.provider && (
                      <>
                        { !!props.embed.data?.favicon?.url && (
                          <a href={ props.embed.data.provider.url } target="_blank" title={ props.embed.data.provider.name }>
                            <img className="icon me-2" src={ props.embed.data.favicon.url } />
                          </a>
                        ) }
                        <a href={ props.embed.data.provider.url } target="_blank" title={ props.embed.data.provider.name }>
                          { props.embed.data.provider.name }
                        </a>
                      </>
                    ) }
                    { !!props.embed.data?.provider && !!props.embed.data?.author?.name && (
                      <span className="sep mx-1">|</span>
                    ) }
                    { !!props.embed.data?.author && (
                      <a href={ props.embed.data.author.url } target="_blank">
                        { props.embed.data.author.name }
                      </a>
                    ) }
                    { !!props.embed.data?.duration && (
                      <span className="ms-2 text-muted">
                        { getDuration(props.embed.data.duration) }
                      </span>
                    ) }
                  </div>
                </div>
              ) }
            </div>
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
  return DashupUIChatEmbed;
};