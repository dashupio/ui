
// import simple markdown
import React from 'react';
import markdown from 'simple-markdown';

// rules
const rules = {
  // default rules
  u          : markdown.defaultRules.u,
  em         : markdown.defaultRules.em,
  text       : markdown.defaultRules.text,
  strong     : markdown.defaultRules.strong,
  escape     : markdown.defaultRules.escape,
  newline    : markdown.defaultRules.newline,
  inlineCode : markdown.defaultRules.inlineCode,
  blockQuote : markdown.defaultRules.blockQuote,

  // fix code block
  codeBlock : {
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
        <code key={ state.key }>
          { node.content }
        </code>
      );
    }
  },

  // fix link
  autolink : {
    ...markdown.defaultRules.autolink,

    parse : capture => {
      return {
        content : [{
          type : 'text',
          content : capture[1]
        }],
        target : capture[1]
      };
    },
    react : (node, output, state) => {
      return (
        <a href={ markdown.sanitizeUrl(node.target) } target={ node.target.includes('//') && !node.target.includes('dashup.dev') ? '_BLANK' : null } key={ state.key }>
          { output(node.content, state) }
        </a>
      );
    }
  },

  // fix url
  url : {
    ...markdown.defaultRules.url,

    parse : capture => {
      return {
        content : [{
          type : 'text',
          content : capture[1]
        }],
        target : capture[1]
      };
    },
    react : (node, output, state) => {
      return (
        <a href={ markdown.sanitizeUrl(node.target) } target={ node.target.includes('//') && !node.target.includes('dashup.dev') ? '_BLANK' : null } key={ state.key }>
          { output(node.content, state) }
        </a>
      );
    }
  },
  
  // fix line break
  br : {
    ...markdown.defaultRules.br,

    match : markdown.anyScopeRegex(/^\n/)
  },

  // fix strike
  strike : {
    ...markdown.defaultRules.del,

    match : markdown.inlineRegex(/^~~([\s\S]+?)~~(?!_)/)
  },
};

// default rules
export default rules;