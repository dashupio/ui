
import React from 'react';
import moment from 'moment';
import markdown from 'simple-markdown';
import defaultRules from './rules';
import { Chip, Avatar, useTheme, Stack, Tooltip, Box, Icon, View, ToggleButton } from '../';

// import message
import DashupUIChatEmbed from './Embed';

// let context
let Embed = null;
let DashupUIContext = null;

// create dashup grid body
const DashupUIChatMessage = (props = {}) => {
  // theme
  const theme = useTheme();

  // get embeds
  const getEmbeds = () => {
    // return embeds
    return (props.message?.embeds || []).filter((e) => e && e.data && e.type);
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
        // check dashup
        if (!dashup) return;

        // page
        const page = node.trigger === '#' ? dashup.page(node.id) : null;
        
        // let color
        let color = page?.get('color');
        let parent = (page && (page?.get('parent') || 'root') !== 'root') ? dashup.page(page?.get('parent')) : null;

        // check page
        if (page) {
          // get parentmost color
          while (parent && !color) {
            // get new parent
            const newParent = ((parent.get('parent') || 'root') !== 'root') ? dashup.page(parent.get('parent')) : null;
            color = newParent?.get('color');

            // set parent
            parent = newParent;
          }
        }

        // url
        const url = node.trigger === '#' ? `/app/${node.id}` : null;

        // return jsx
        return (
          <Chip
            sx={ {
              mx              : .5,
              color           : color?.hex && theme.palette.getContrastText(color.hex),
              cursor          : 'pointer',
              fontWeight      : 'bold',
              backgroundColor : color?.hex,
            } }
            key={ state.key }
            size="small"
            label={ node.display }
            avatar={ (
              <Avatar
                name={ node.display }
                bgColor={ color?.hex }
              >
                { page?.get('icon') ? (
                  <Icon icon={ page.get('icon') } sx={ {
                    color : color?.hex && theme.palette.getContrastText(color.hex),
                  } } />
                ) : null }
              </Avatar>
            ) }
            onClick={ () => url && eden.router.go(url) }
            contentEditable={ false }
          />
        );
      },
    };

    defaultRules.codeBlock = {
      ...markdown.defaultRules.codeBlock,

      match : markdown.inlineRegex(/^```(([a-z0-9-]+?)\n+)?\n*([^]+?)\n*```/i),
      parse : function (capture, parse, state) {
        return {
          lang : (capture[2] || '').trim(),
          content : capture[3] || '',
          inQuote : state.inQuote || false
        };
      },
      react : (node, output, state) => {
        return (
          <Box key={ state.key } sx={ {
            mt : 0.5,
            mb : 0.5,
            
            '& .CodeMirror.cm-s-one-dark' : {
              height   : 'auto',
              maxWidth : 480,
              minWidth : 480,
            }
          } }>
            <View
              key={ state.key }
              view="code"
              type="field"
              struct="code"

              value={ node.content }
              dashup={ dashup }

              options={ {
                readOnly : 'nocursor',
              } }
            />
          </Box>
        );
      }
    }

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

  // button sx
  const buttonSx = {
    paddingLeft : 1,
    paddingRight : 1,
  };

  // is mine
  const isMine = props.message?.by?.id === (typeof eden !== 'undefined' ? eden : {})?.user?.get('_id');

  // render body
  const renderBody = (data) => {
    // check removed
    if (props.message.removed) return <Box />;

    // return jsx
    return (
      <Box mt={ inThread() ? 0 : (props.size === 'sm' ? 1 : 1.5) } sx={ {
        position : 'relative',

        '&:hover .updating' : {
          opacity : 1,
          display : 'block',
        }
      } }>
        <Box className="updating" sx={ {
          display  : 'none',
          opacity  : 0,
          position : 'absolute',

          top    : -5,
          left   : 0,
          right  : 0,
          bottom : -5,

          background   : 'rgba(0, 0, 0, 0.15)',
          borderRadius : 2,
        } } />
        { !!(((data.page && data.dashup?.can(data.page, 'manage')) || data.dashup?.can('admin')) || isMine) && (
          <Box
            sx={ {
              right           : 2,
              zIndex          : 1,
              bottom          : '100%',
              padding         : 1,
              display         : 'none',
              position        : 'absolute',
              alignItems      : 'center',
              borderRadius    : 2,
              flexDirection   : 'row',
              justifyContent  : 'end',
              backgroundColor : theme.palette.mode === 'dark' ? 'darker.main' : 'lighter.main',
            } }
            className="updating"
            >
            <Stack direction="row" spacing={ 1 }>
              <Tooltip title="Remove Message">
                <ToggleButton value="trash" size="small" onClick={ (e) => (props.onRemove || data.onRemove)(props.message) } selected color="error" sx={ buttonSx }>
                  <Icon type="fas" icon="trash" fontSize="small" />
                </ToggleButton>
              </Tooltip>
            </Stack>
          </Box>
        ) }
        <Stack spacing={ 2 } direction="row">
          { inThread() ? (
            <Box minWidth={ data.size === 'sm' ? 25 : 40 } />
          ) : (
            <Avatar src={ props.message?.by?.avatar } name={ props.message?.by?.name } sx={ {
              width : data.size === 'sm' ? 25 : 40,
            } } />
          ) }
          <Stack spacing={ .5 }>
            { !inThread() && (
              <Stack spacing={ 1 } direction="row" alignItems="center">
                <Box sx={ { fontWeight : 'bold' } }>
                  { props.message.by.name }
                </Box>
                <Tooltip title={ moment(props.message.created_at).format('LL') }>
                  <Box fontSize="small">
                    { moment(props.message.created_at).fromNow() }
                  </Box>
                </Tooltip>
              </Stack>
            ) }
            <Box sx={ {
              wordBreak  : 'break-word',
              whiteSpace : 'pre-line',
            } }>
              { parseContent(data.dashup, props.message.parsed || props.message.message) }
            </Box>
            { !!getEmbeds().length && (
              <Stack spacing={ 2 } direction="row" flexWrap="wrap">
                { getEmbeds().map((embed, i) => {
                  // return jsx
                  return (
                    <Embed key={ `embed-${i}` } embed={ embed } message={ props.message } noChat={ props.noChat } />
                  );
              }) }
              </Stack>
            ) }
          </Stack>
        </Stack>
      </Box>
    );
  }

  // return jsx
  return props.noChat ? renderBody(props) : (
    <DashupUIContext.Consumer>
      { (data) => {
        // render body
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
  return DashupUIChatMessage;
};