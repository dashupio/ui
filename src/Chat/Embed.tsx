
import moment from 'moment';
import React, { useState } from 'react';
import { Box, Card, Icon, Stack, colors, Link, Avatar, CardMedia, CardHeader, CardContent, Typography, CircularProgress } from '@dashup/ui';

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
  // render body
  const renderBody = (data) => {

    // check type
    if (props.embed.type === 'note') return (
      <Card variant="outlined">
        <CardHeader
          title="Note"
          avatar={ (
            <Avatar bgColor={ colors[props.embed.color] }>
              <Icon type="fas" icon="sticky-note" />
            </Avatar>
          ) }
        />
        <CardContent>
          { props.embed.data?.body }
        </CardContent>
        <Box />
      </Card>
    );

    // check type
    if (props.embed.type === 'sms') return (
      <Card variant="outlined">
        <CardHeader
          title={ props.embed.data?.title }
          avatar={ (
            <Avatar bgColor={ colors[props.embed.color] }>
              <Icon type="fas" icon="sms" />
            </Avatar>
          ) }
        />
        <CardContent>
          { props.embed.data?.body }
        </CardContent>
        <Box />
      </Card>
    );

    // check type
    if (props.embed.type === 'email') return (
      <Card variant="outlined">
        <CardHeader
          title={ props.embed.data?.title }
          avatar={ (
            <Avatar bgColor={ colors[props.embed.color] }>
              <Icon type="fas" icon="envelope-open-text" />
            </Avatar>
          ) }
          subheader={ props.embed.data?.subject }
        />
        <CardContent>
          <Box dangerouslySetInnerHTML={ { __html : props.embed.data?.body } } />
        </CardContent>
        <Box />
      </Card>
    );

    // return card
    return (
      <Card sx={ {
        width    : data.size === 'small' ? 240 : 360,
        maxWidth : data.size === 'small' ? '100%' : 360,
      } }>
        <CardHeader
          title={ props.embed.data?.title }
          avatar={ (
            !!props.embed.data?.favicon?.url && (
              <Avatar variant="rounded" bgColor="rgba(0,0,0,0)" src={ props.embed.data?.favicon?.url } name={ props.embed.data?.provider?.name } />
            )
          ) }
          subheader={ (
            <Stack spacing={ 1 } direction="row" sx={ {
              alignItems : 'center',
            } }>
              { !!props.embed?.data?.provider?.url && (
                <Link href={ props.embed.data.provider.url } target="_blank" title={ props.embed.data.provider.name }>
                  { props.embed.data.provider.name }
                </Link>
              ) }
              { !!props.embed.data?.author?.url && (
                <Link href={ props.embed.data.author.url } target="_blank" title={ props.embed.data.author.name }>
                  { props.embed.data.author.name }
                </Link>
              ) }
              { !!props.embed.data?.duration && (
                <Typography fontSize="small">
                  { getDuration(props.embed.data.duration) }
                </Typography>
              ) }
            </Stack>
          ) }
        />
        { !!props.embed.loading && (
          <CardContent sx={ {
            py             : 3,
            display        : 'flex',
            alignItems     : 'center',
            justifyContent : 'center',
          } }>
            <CircularProgress />
          </CardContent>
        ) }
        { !!props.embed.data?.html && (
          <CardMedia
            sx={ {
              '& .embed-responsive-item' : {
                width  : '100%',
                height : '100%',
              },
              '& img' : {
                margin    : 'auto',
                maxWidth  : '100%',
                maxHeight : '100%',
              },

              display        : 'flex',
              textAlign      : 'center',
              alignItems     : 'center',
              justifyContent : 'center',
            } }
            height={ 194 }
            component={ Box }

            dangerouslySetInnerHTML={ { __html : props.embed.data.html } }
          />
        ) }
        <Box />
      </Card>
    );
  };

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
  DashupUIContext = ctx;

  // return actual component
  return DashupUIChatEmbed;
};