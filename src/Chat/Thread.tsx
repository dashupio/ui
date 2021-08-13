
import SimpleBar from 'simplebar-react';
import React, { useState, useRef } from 'react';

// import message
import DashupUIChatMessage from './Message';

// let context
let Message = null;
let DashupUIContext = null;

// key
let key = null;

// create dashup grid body
const DashupUIChatThread = (props = {}) => {
  // scroll ref
  const scrollRef = useRef(null);

  // scroll down
  const scrollDown = () => {
    // scroll down
    if (!scrollRef.current) return;

    // get element
    const scrollElement = scrollRef.current?.getScrollElement();

    // check element
    if (!scrollElement) return;

    // scroll down
    scrollElement.scrollTop = scrollElement.scrollHeight;
  };

  // key
  const getKey = (messages = []) => {
    // return key
    return messages.map((m) => m.id || m.temp).join(':');
  };

  // return jsx
  return (
    <DashupUIContext.Consumer>
      { (data) => {
        // messages
        const messages = props.messages || data.messages || [];

        // check messages
        if (getKey(messages) !== key) {
          scrollDown();
          setTimeout(scrollDown, 100);

          // key
          key = getKey(messages);
        }

        // return jsx
        return (
          <div className="w-100 h-100">
            <SimpleBar ref={ scrollRef } className="h-100">
              { messages.map((m, i) => {
                // return jsx
                return (
                  <div key={ `message-${m.id}` }>
                    <Message
                      prev={ messages[i - 1] }
                      next={ messages[i + 1] }
                      message={ m }
                    />
                  </div>
                );
              }) }
            </SimpleBar>
          </div>
        );
      } }
    </DashupUIContext.Consumer>
  );
};

// export default page menu
export default (ctx) => {
  // use context
  Message = DashupUIChatMessage(ctx);
  DashupUIContext = ctx;

  // return actual component
  return DashupUIChatThread;
};