
import shortid from 'shortid';
import SimpleBar from 'simplebar-react';
import InfiniteScroll from 'react-infinite-scroll-component';
import React, { useEffect, useRef, useState } from 'react';

// import message
import DashupUIChatMessage from './Message';
import { Box, Typography, CircularProgress } from '../';

// let context
let Message = null;
let DashupUIContext = null;

// create dashup grid body
const DashupUIChatThread = (props = {}) => {
  // messages
  const messages = props.messages || [];

  // use state
  const [id] = useState(shortid());
  const [key, setKey] = useState(null);

  // scroll ref
  const scrollRef = useRef(null);

  // use effect
  useEffect(() => {
    // check key
    if (key === (messages[0]?.id || messages[0]?.temp)) return;

    // set key
    setKey(messages[0]?.id || messages[0]?.temp);

    // scroll down
    if (scrollRef.current?.getScrollElement()) scrollRef.current.getScrollElement().scrollTop = 0;
  }, [messages[0]?.id || messages[0]?.temp]);

  // return jsx
  return (
    <Box flex={ 1 } position="relative">
      <Box position="absolute" top={ 0 } left={ 0 } right={ 0 } bottom={ 0 } sx={ {
        '& .simplebar-scrollbar' : {
          bottom : 0,
        }
      } }>
        <SimpleBar ref={ scrollRef } style={ {
          width  : '100%',
          height : '100%',
        } } scrollableNodeProps={ {
          id,
          style : {
            display       : 'flex',
            flexDirection : 'column-reverse',
          }
        } }>
          { !!scrollRef.current?.getScrollElement() && (
            <InfiniteScroll
              next={ props.onNext }
              style={ {
                display       : 'flex',
                flexDirection : 'column-reverse',
              } }
              inverse={ true }
              hasMore={ props.hasMore }
              dataLength={ (messages || []).length }

              loader={ (
                <Box display="flex" py={ 3 } justifyContent="center" alignItems="center">
                  <CircularProgress />
                </Box>
              ) }
              endMessage={ (
                <Typography variant="h5" sx={ {
                  textAlign : 'center',
                } } gutterBottom>
                  { !(messages || []).length ? (
                    'Nothing here yet, say hi!'
                  ) : (
                    'Yay! You have seen it all.'
                  ) }
                </Typography>
              ) }
              scrollableTarget={ id }
            >
              { messages.map((m, i) => {
                // return jsx
                return (
                  <Message
                    key={ `message-${m.temp || m.id}` }
                    prev={ messages[i + 1] }
                    next={ messages[i - 1] }
                    message={ m }
                  />
                );
              }) }
            </InfiniteScroll>
          ) }
        </SimpleBar>
      </Box>
    </Box>
  );
};

// wrapper
const DashupUIChatWrapper = (props = {}) => {
  
  // return jsx
  return (
    <DashupUIContext.Consumer>
      { (data) => {
        // return jsx
        return (
          <DashupUIChatThread { ...data } { ...props } />
        )
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
  return DashupUIChatWrapper;
};