
import React from 'react';
import moment from 'moment';
import markdown from 'simple-markdown';
import defaultRules from './rules';
import { Chip, Avatar, Stack, Tooltip, Box, Icon } from '../';

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
        // page
        const page = node.trigger === '#' ? dashup.page(node.id) : null;
        
        // let color
        let color = page?.get('color');
        let parent = page && (page.get('parent') || 'root') !== 'root' && dashup.page(page.get('parent'));

        // get parentmost color
        while (parent && !color) {
          // get new parent
          parent = parent && (parent.get('parent') || 'root') !== 'root' && dashup.page(parent.get('parent'));
          color = parent?.get('color');
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
                { !!page?.get('icon') && <Icon icon={ page.get('icon') } /> }
              </Avatar>
            ) }
            onClick={ () => url && eden.router.go(url) }
            contentEditable={ false }
          />
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

  // render body
  const renderBody = (data) => {
    // check removed
    if (props.message.removed) return <Box />;

    // return jsx
    return (
      <Box mt={ inThread() ? 0 : (props.size === 'sm' ? 1 : 1.5) }>
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
            <Box display="flex" flexDirection="row" alignItems="center" flexWrap="wrap">
              { parseContent(data.dashup, props.message.parsed || props.message.message) }
            </Box>
            { !!getEmbeds().length && (
              <Box>
                { getEmbeds().map((embed, i) => {
                  // return jsx
                  return (
                    <Embed embed={ embed } message={ props.message } noChat={ props.noChat } />
                  );
              }) }
              </Box>
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