
// import simple markdown
import React from 'react';
import { Box, Link } from '../';
import markdown from 'simple-markdown';

// rules
const rules = {
  // default rules
  u          : markdown.defaultRules.u,
  em         : markdown.defaultRules.em,
  text       : markdown.defaultRules.text,
  strong     : markdown.defaultRules.strong,
  escape     : markdown.defaultRules.escape,
  inlineCode : markdown.defaultRules.inlineCode,
  blockQuote : markdown.defaultRules.blockQuote,

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
        <Link href={ markdown.sanitizeUrl(node.target) } target={ node.target.includes('//') && !node.target.includes('dashup.com') ? '_BLANK' : null } key={ state.key }>
          { output(node.content, state) }
        </Link>
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
        <Link href={ markdown.sanitizeUrl(node.target) } target={ node.target.includes('//') && !node.target.includes('dashup.com') ? '_BLANK' : null } key={ state.key }>
          { output(node.content, state) }
        </Link>
      );
    }
  },

  // fix strike
  strike : {
    ...markdown.defaultRules.del,

    match : markdown.inlineRegex(/^~~([\s\S]+?)~~(?!_)/)
  },
};

// default rules
export default rules;