import './emoji.css';

import uuid from 'shortid';
import Prism from 'prismjs';
import urlRegex from 'url-regex';
import { Picker } from 'emoji-mart';
import { Slate, Editable, withReact, ReactEditor } from 'slate-react';
import { Text, Editor, Transforms, Range, createEditor } from 'slate';
import React, { useMemo, useRef, useState, useCallback, useEffect } from 'react';
import { Paper, Chip, Stack, Box, useTheme, ToggleButton, ToggleButtonGroup, Avatar, Icon, Popover, MenuItem, ListItemIcon, ListItemText } from '../';

// prism
;Prism.languages.markdown=Prism.languages.extend("markup",{}),Prism.languages.insertBefore("markdown","prolog",{blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},code:[{pattern:/^(?: {4}|\t).+/m,alias:"keyword"},{pattern:/``.+?``|`[^`\n]+`/,alias:"keyword"}],title:[{pattern:/\w+.*(?:\r?\n|\r)(?:==+|--+)/,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#+.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])([\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:/(^|[^\\])(\*\*|__)(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,lookbehind:!0,inside:{punctuation:/^\*\*|^__|\*\*$|__$/}},italic:{pattern:/(^|[^\\])([*_])(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,lookbehind:!0,inside:{punctuation:/^[*_]|[*_]$/}},url:{pattern:/!?\[[^\]]+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[[^\]\n]*\])/,inside:{variable:{pattern:/(!?\[)[^\]]+(?=\]$)/,lookbehind:!0},string:{pattern:/"(?:\\.|[^"\\])*"(?=\)$)/}}}}),Prism.languages.markdown.bold.inside.url=Prism.util.clone(Prism.languages.markdown.url),Prism.languages.markdown.italic.inside.url=Prism.util.clone(Prism.languages.markdown.url),Prism.languages.markdown.bold.inside.italic=Prism.util.clone(Prism.languages.markdown.italic),Prism.languages.markdown.italic.inside.bold=Prism.util.clone(Prism.languages.markdown.bold); // prettier-ignore

// import message
import DashupUIChatEmbed from './Embed';

// let context
let Embed = null;
let trigger = null;
let DashupUIContext = null;

// create withmentions hook
const withMentions = (editor) => {
  // is inline
  const { isInline, isVoid } = editor;

  // add is inline
  editor.isInline = element => {
    return element.type === 'mention' ? true : isInline(element);
  };

  // add is void
  editor.isVoid = element => {
    return element.type === 'mention' ? true : isVoid(element);
  };

  // return editor
  return editor;
};

// leaf
const Leaf = ({ attributes, children, leaf }) => {
  return (
    <span
      { ...attributes }
      style={ {
        fontStyle      : leaf.italic ? 'italic' : null,
        fontWeight     : leaf.bold ? 'bold' : null,
        textDecoration : leaf.underlined ? 'underline' : '',
      } }
      className={ leaf.code ? 'pre' : null }>
      { children }
    </span>
  );
};

// create mention
const Mention = ({ attributes, children, element }) => {
  // theme
  const theme = useTheme();

  // dashup
  const dashup = (typeof eden === 'undefined' ? null : eden).dashup;

  // page
  const page = element.trigger === '#' ? dashup?.page(element.mention?.id) : null;
  
  // let color
  let color = page?.get('color');
  let parent = (page && (page?.get('parent') || 'root') !== 'root') ? dashup?.page(page?.get('parent')) : null;

  // check page
  if (page) {
    // get parentmost color
    while (parent && !color) {
      // get new parent
      const newParent = ((parent.get('parent') || 'root') !== 'root') ? dashup?.page(parent.get('parent')) : null;
      color = newParent?.get('color');

      // set parent
      parent = newParent;
    }
  }

  // set color
  const actualColor = element.mention?.color || color;

  // return jsx
  return (
    <Chip
      { ...attributes }
      contentEditable={ false }

      sx={ {
        color           : actualColor?.hex && theme.palette.getContrastText(actualColor.hex),
        fontWeight      : 'bold',
        backgroundColor : actualColor?.hex,
      } }

      size="small"
      label={ element.mention.display }
      avatar={ (
        element.mention.image ? (
          <Avatar name={ element.mention.display } src={ element.mention.image } />
        ) : (
          !!element.mention.icon && (
            <Avatar
              name={ element.mention.display } 
              sx={ {
                backgroundColor : actualColor?.hex,
              } }
            >
              <Icon type="fas" icon={ element.mention.icon } sx={ {
                color : actualColor?.hex && theme.palette.getContrastText(actualColor.hex),
              } } />
            </Avatar>
          )
        )
      ) }
    />
  );
};

// create element
const Element = (props = {}) => {
  // return type
  return props.element.type === 'mention' ? <Mention { ...props } /> : <p { ...props.attributes }>{ props.children }</p>;
};

// create embeds
const allEmbeds = {};

// chat input
const DashupUIChatInput = (props = {}) => {
  // theme
  const theme = useTheme();

  // editor
  const editor = useMemo(() => withMentions(withReact(createEditor())), []);

  // empty state
  const emptyState = [{
    type     : 'paragraph',
    children : [{ text : '' }]
  }];

  // all embeds
  let [embedId] = useState(uuid());

  // set all embeds
  if (!allEmbeds[embedId]) allEmbeds[embedId] = [];

  // set embeds
  const [long, setLong] = useState(false);
  const [emoji, setEmoji] = useState(null);
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState(emptyState);
  const [items, setItems] = useState([]);
  const [embeds, setEmbeds] = useState(allEmbeds[embedId]);
  const [mention, setMention] = useState(null);
  const [posting, setPosting] = useState(false);
  const [emojiRef, setEmojiRef] = useState(null);
  const [mentionRef, setMentionRef] = useState(null);
  const [emojiSearch, setEmojiSearch] = useState('');

  // picker ref
  const pickerRef = useRef(null);

  // render methods
  const renderLeaf = useCallback(props => <Leaf {...props} />, []);
  const renderElement = useCallback(props => <Element {...props} />, []);

  // decorate
  const decorate = useCallback(([node, path]) => {
    // ranges
    const ranges = []

    // is text
    if (!Text.isText(node)) {
      return ranges;
    }

    // get length
    const getLength = (token) => {
      if (typeof token === 'string') {
        return token.length;
      } else if (typeof token.content === 'string') {
        return token.content.length;
      } else {
        return token.content.reduce((l, t) => l + getLength(t), 0);
      }
    };

    // tokens
    const tokens = Prism.tokenize(node?.text, Prism.languages.markdown);

    // start
    let start = 0;

    // loop tokens
    for (const token of tokens) {
      const length = getLength(token);
      const end = start + length;

      if (typeof token !== 'string') {
        ranges.push({
          [token.type] : true,

          focus  : { path, offset : end },
          anchor : { path, offset : start },
        });
      }

      // end
      start = end;
    }

    // return ranges
    return ranges;
  }, []);

  // const toText
  const toText = (children) => {
    // map children
    return children.map((child) => {
      // empty child
      if (!child) return;

      // if text
      if (child.text) return child.text;
      if (child.mention) return `${child.trigger}[${child.mention.display}](${child.mention.id})`;
      if (child.type === 'paragraph') return `${toText(child.children)}\n`;

      // if children
      if (child.children) return `${toText(child.children)}`;
    }).filter((i) => i).join('');
  };
  
  // on send
  const onSend = async (e, data) => {
    // prevent default
    e.preventDefault();
    e.stopPropagation();

    // value to string
    const text = toText(value || []);

    // validate
    if (posting || long) return;

    // set posting
    setPosting(true);

    // message
    const newMessage = {
      by      : data.by,
      temp    : uuid(),
      embeds  : [],
      subject : data.thread,
      message : text,

      created_at : new Date(),
      updated_at : new Date(),
    };
    allEmbeds[embedId] = [];
    setEmbeds([...allEmbeds[embedId]]);

    // set embeds
    Transforms.select(editor, Editor.start(editor, []));

    // set value
    setValue(emptyState);
    
    // on send
    if (props.onSend) {
      // on send
      await props.onSend(e, newMessage);
    } else {
      // emit message
      data.onMessage(newMessage);
      
      // call join
      const message = await data.dashup.action({
        type   : 'page',
        struct : 'channel',
      }, 'send', newMessage);

      // check if success
      if (!message && typeof eden !== 'undefined') {
        // alert error message
        eden.alert.error('Failed to send');
      }
    }

    // update
    setPosting(false);
  };

  // load embed
  const loadEmbed = async (d, url) => {
    // call join
    const data = await d.dashup.action({
      type   : 'page',
      struct : 'channel',
    }, 'embed', url);
    
    // remove from embeds if fail
    if (!data || !data.type) {
      // disable embed
      allEmbeds[embedId] = allEmbeds[embedId].filter((e) => e.url !== url);

      // return update
      return setEmbeds([...allEmbeds[embedId]]);
    }

    // get embed
    const embed = allEmbeds[embedId].find((e) => e.url === url);

    // check embed
    if (!embed) return;

    // set data
    embed.data    = data;
    embed.loading = false;
    
    // set embeds
    setEmbeds([...allEmbeds[embedId]]);
  };

  // on key down
  const onKeyDown = (e, data) => {
    // check mention ref
    if (mention && mentionRef) {
      // check mention ref
      if (e.key === 'ArrowUp') {
        // prevent default
        e.preventDefault();

        // set index
        setIndex(index === 0 ? 0 : index - 1);
      } else if (e.key === 'ArrowDown') {
        // prevent default
        e.preventDefault();

        // set index
        setIndex(index >= (items.length - 1) ? index : index + 1);
      } else if (['Tab', 'Enter'].includes(e.key)) {
        // prevent default
        e.preventDefault();

        // set index
        onMention(items[index]);
      } else if (e.key === 'Escape') {
        setMention(null);
      }
    } else {
      // check key code
      if (e.keyCode !== 13 || e.shiftKey) return true;

      // prevent default
      e.preventDefault();

      // do on comment
      return onSend(e, data);
    }
  };

  // on keyup
  const onChange = (data, value) => {
    // set value
    setValue(value);

    // check sending
    if (posting) return;

    // try/catch
    try {
      // get selection
      const { selection } = editor;

      // check selection
      if (selection && Range.isCollapsed(selection)) {
        // get out
        const [start] = Range.edges(selection);
        const wordBefore = Editor.before(editor, start, {
          unit : 'word',
        });
        const before = wordBefore && Editor.before(editor, wordBefore);
        const beforeRange = before && Editor.range(editor, before, start);
        const beforeText = beforeRange && Editor.string(editor, beforeRange);

        // check before text
        if (beforeText) {
          // emoji picker
          if (beforeText.split('')[0] === ':') {
            // set emoji picker
            setMention(null);
            setEmojiSearch(beforeText.split('').slice(1).join(''));

            // set emoji
            return setEmoji(beforeRange);
          }

          // find match in text
          trigger = (typeof eden === 'undefined' ? [] : eden.chat?.triggers() || []).find((m) => {
            // find trigger
            return beforeText.split('')[0] === m.trigger;
          });

          // check found
          if (trigger) {
            // search
            trigger.search(beforeText.split('').slice(1).join('')).then((items) => {
              // set items
              setItems([...items].reverse());
              setIndex(items.length - 1);
            });

            // mention
            setEmoji(null);
            setEmojiSearch('');
            return setMention(beforeRange);
          }
        }
      }

      // unset
      setEmoji(null);
      setMention(null);
      setEmojiSearch('');
    } catch (e) {}

    // load embeds
    const entries = (toText(value).match(urlRegex()) || []);
    
    // loop entries
    entries.forEach((entry) => {
      // get embeds
      if (!allEmbeds[embedId].find((e) => e.url === entry)) {
        // set entry
        allEmbeds[embedId].push({
          url     : entry,
          data    : {},
          loading : loadEmbed(data, entry),
        });
      }
    });

    // remove old
    allEmbeds[embedId] = allEmbeds[embedId].filter((e) => entries.includes(e.url));
    
    // embeds
    setEmbeds([...allEmbeds[embedId]]);
  };

  // insert mention
  const onEmoji = (data) => {
    console.log(data); return;
    // select target
    Transforms.select(editor, mention);

    // mention
    const insertMention = {
      type     : 'mention',
      mention  : data,
      trigger  : trigger?.trigger,
      children : [{
        text : ''
      }],
    };

    // set mention
    setMention(null);
  
    // insert nodes
    Transforms.insertNodes(editor, insertMention);
    Transforms.move(editor);
  };

  // insert mention
  const onMention = (data) => {
    // select target
    Transforms.select(editor, mention);

    // mention
    const insertMention = {
      type     : 'mention',
      mention  : data,
      trigger  : trigger?.trigger,
      children : [{
        text : ''
      }],
    };

    // set mention
    setMention(null);
  
    // insert nodes
    Transforms.insertNodes(editor, insertMention);
    Transforms.move(editor);
  };

  // use effect
  useEffect(() => {
    // try/catch
    try {
      // check mention
      if (!mention) {
        // set index
        setIndex(0);
        setMentionRef(null);

        // check index
        return;
      }

      // dom range
      const domRange = ReactEditor.toDOMRange(editor, mention);

      // set ref
      setMentionRef(domRange?.endContainer?.parentNode);
    } catch (e) {}
  }, [mention]);

  // use effect
  useEffect(() => {
    // try/catch
    try {
      // check mention
      if (!emoji) {
        // set index
        setIndex(0);
        setEmojiRef(null);

        // check index
        return;
      }

      // dom range
      const domRange = ReactEditor.toDOMRange(editor, emoji);

      // set ref
      setEmojiRef(domRange?.endContainer?.parentNode);
    } catch (e) {}
  }, [emoji]);

  // use effect
  useEffect(() => {

    // done
    return () => {
      delete allEmbeds[embedId];
    };
  }, [embedId]);

  // set search
  useEffect(() => {
    // input
    const input = document.querySelector('.emoji-mart-search > input');

    // check view
    if (!input) return;

    // set value
    input.value = emojiSearch;

    // trigger enter
    const event = new KeyboardEvent('keydown', {
      key     : 'Enter',
      which   : 13,
      keyCode : 13,
    });

    // dispatch
    input.dispatchEvent(event);
  }, [emojiSearch]);

  // create body
  const renderBody = (data) => {
    // return jsx
    return (
      <>
        { !!embeds.length && (
          <Stack spacing={ 2 } mb={ 3 } direction="row" flexWrap="wrap">
            { embeds.map((embed, i) => {
              // return jsx
              return (
                <Embed embed={ embed } key={ `embed-${i}` } />
              );
            }) }
          </Stack>
        ) }

        <Paper>
          <Stack spacing={ 1 } direction="row" alignItems="center" pr={ 2 }>
            <Box flex={ 1 } px={ 2 } py={ 1 } sx={ {
              '& .chat-control' : {
                wordBreak : 'break-word',
              },
            } }>
              <Slate
                value={ value }
                editor={ editor }
                onChange={ (v) => onChange(data, v) }
              >
                <Editable
                  className="chat-control"
                  decorate={ decorate }
                  onKeyDown={ (e) => onKeyDown(e, data) }
                  renderLeaf={ renderLeaf }
                  renderElement={ renderElement }
                />
              </Slate>
            </Box>
            <ToggleButtonGroup size="small">
              <ToggleButton value="image" selected>
                <Icon type="fas" icon="image" fixedWidth />
              </ToggleButton>
              { !props.disableEmoji && (
                <ToggleButton value="smile" selected onClick={ (e) => !setEmoji(true) && setEmojiRef(e.target) }>
                  <Icon type="fas" icon="smile" fixedWidth />
                </ToggleButton>
              ) }
            </ToggleButtonGroup>
            <ToggleButton size="small" value="send" selected color="primary" onClick={ (e) => onSend(e, data) }>
              <Icon type="fas" icon="play" fixedWidth />
            </ToggleButton>
          </Stack>
        </Paper>

        <Popover
          open={ !!mentionRef }
          onClose={ () => setMentionRef(null) }
          anchorEl={ mentionRef }
          transformOrigin={ {
            vertical   : 'bottom',
            horizontal : 'right',
          } }
          anchorOrigin={ {
            vertical   : 'top',
            horizontal : 'right',
          } }
          hideBackdrop
          disableAutoFocus
          disableEnforceFocus
        >
          { items.map((item, i) => {
            // return jsx
            return (
              <MenuItem key={ `item-${item.id}` } onClick={ (e) => onMention(item) } selected={ index === i }>
                { item.icon && (
                  <ListItemIcon>
                    <Icon type="fas" icon={ item.icon } />
                  </ListItemIcon>
                ) }
                <ListItemText>
                  { item.display }
                </ListItemText>
              </MenuItem>
            );
          }) }
        </Popover>

        <Popover
          open={ !!emojiRef }
          onClose={ () => setEmojiRef(null) }
          anchorEl={ emojiRef }
          transformOrigin={ {
            vertical   : 'bottom',
            horizontal : 'right',
          } }
          anchorOrigin={ {
            vertical   : 'top',
            horizontal : 'right',
          } }
          disableAutoFocus
          disableEnforceFocus
        >
          <Box sx={ {
            '& .emoji-mart' : {
              border          : 0,
              backgroundColor : theme.palette.background.paper,
            },
            '& .emoji-mart-bar' : {
              borderColor : theme.palette.divider,
            },
            '& .emoji-mart-search input' : {
              marginBottom    : 1,
              backgroundColor : 'transparent!important',
            },
            '& .emoji-mart-category-label span' : {
              backgroundColor : `${theme.palette.background.paper}!important`,
            },
          } }>
            <Picker
              ref={ pickerRef }
              title="Dashup"
              theme={ theme.palette.mode }
              color={ theme.palette.primary.main }
              onSelect={ console.log }
            />
          </Box>
        </Popover>
      </>
    );
  };

  // return jsx
  return props.noChat ? renderBody(props) : (
    <DashupUIContext.Consumer>
      { (data) => {
        // return jsx
        return renderBody(data);
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
  return DashupUIChatInput;
};

