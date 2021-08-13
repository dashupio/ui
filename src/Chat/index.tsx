
// import dependencies
import { Modal, Button } from 'react-bootstrap';
import React, { useState, useEffect, createContext } from 'react';

// import local modules
import Input from './Input';
import Embed from './Embed';
import Thread from './Thread';
import Message from './Message';

// create context
const DashupUIContext = createContext();

// create menu component
const DashupUIChat = (props = {}) => {
  //s tate
  let [messages, setMessages] = useState(props.messages || []);
  const [remove, setRemove] = useState(null);
  const [update, setUpdate] = useState(null);
  const [removing, setRemoving] = useState(false);
  const [listening, setListening] = useState(null);

  // get messages
  const getMessages = () => {
    // return messages
    return Array.from((props.messages || messages).values()).sort((a, b) => {
      // sort
      if (new Date(a.created_at) > new Date(b.created_at)) return 1;
      if (new Date(a.created_at) < new Date(b.created_at)) return -1;

      // return 0
      return 0;
    });
  };

  // get ctx
  const getCtx = () => {
    // return
    return {
      // by
      by : typeof eden !== 'undefined' ? {
        id     : eden?.user?.get('id'),
        name   : eden?.user?.get('name'),
        avatar : eden?.user?.get('avatar.0.thumbs.1x-sq.url'),
      } : null,

      // variables
      dashup : props.dashup,
      thread : props.thread,

      // chat
      messages : getMessages(),

      onUpdate  : setUpdate,
      onRemove  : setRemove,
      onMessage : (m) => onMessages([m]),

      canAdmin : props.canAdmin || (props.page && props.dashup?.can(props.page, 'manage')),
    };
  };

  // create context
  const [ctx, setCtx] = useState(getCtx());

  // on messages
  const onMessages = (list = []) => {
    // loop
    list.forEach((message) => {
      // get found
      const found = messages.find((m) => m.id === message.id || (m.temp && m.temp === message.temp));

      // check messages
      if (found) {
        // set value
        Object.keys(message).forEach((k) => found[k] = message[k]);
      } else {
        // set message
        messages.push(message);
      }
    });

    // set messages
    setMessages([...messages]);
  };

  // remove message
  const onRemove = async (e) => {
    // send remove
    setRemoving(true);

    // listen
    await props.dashup.action({
      type   : 'page',
      page   : props.page && props.page.get('_id'),
      struct : 'channel',
    }, 'remove', props.thread, remove.id);

    // send remove
    setRemove(null);
    setRemoving(false);
  };

  // on remove
  const onRemoveMessage = (list = []) => {
    // remove found
    messages = messages.filter((m) => !list.find((r) => r.id === m.id));

    // set messages
    setMessages([...messages]);
  };

  // use effect
  useEffect(() => {
    // check messages
    if (typeof props.messages !== 'undefined') return;

    // add event listener
    props.dashup.socket.on(`messages.${props.thread}`, onMessages);
    props.dashup.socket.on(`messages.${props.thread}.remove`, onRemoveMessage);

    // thread
    if (listening !== props.thread) {
      // listen
      props.dashup.action({
        type   : 'page',
        page   : props.page && props.page.get('_id'),
        struct : 'channel',
      }, 'listen', props.thread).then(onMessages);

      // set listening
      setListening(true);
    }

    // return unlisten
    return () => {
      // add event listener
      props.dashup.socket.removeListener(`messages.${props.thread}`, onMessages);
      props.dashup.socket.removeListener(`messages.${props.thread}.remove`, onRemoveMessage);
    };
  }, [props.thread]);

  // messages effect
  useEffect(() => {
    // get ctx
    setCtx(getCtx());
  }, [typeof props.messages !== 'undefined' ? props.messages : messages]);

  // return jsx
  return (
    <DashupUIContext.Provider value={ ctx }>
      { props.children } 
      
      { !!remove && (
        <Modal show onHide={ (e) => setRemove(null) }>
          <Modal.Header closeButton>
            <Modal.Title>
              Removing Message
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className="lead">
              Are you sure you want to remove this message?
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={ (e) => !setRemove(null) && e.preventDefault() }>
              Close
            </Button>
            <Button variant="danger" className="ms-2" disabled={ removing } onClick={ (e) => onRemove(e) }>
              { removing ? 'Removing...' : 'Confirm' }
            </Button>
          </Modal.Footer>
        </Modal>
      ) }
    </DashupUIContext.Provider>
  );
};

// create field
DashupUIChat.Input = Input(DashupUIContext);
DashupUIChat.Embed = Embed(DashupUIContext);
DashupUIChat.Thread = Thread(DashupUIContext);
DashupUIChat.Message = Message(DashupUIContext);

// export default
export default DashupUIChat;