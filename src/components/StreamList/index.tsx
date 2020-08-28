import React from 'react';

import streamThumbnail from '../../images/stream_thumbnail.jpg';

import { 
  List,
  StreamContainer,
  StreamThumbnail,
  StreamColumn,
  StreamRow,
  StreamHeader,
  StreamDescription,
  StreamCategory,
  StreamAvatar,
  StreamUsername,
  TagRow,
  TagView,
  TagText,
 } from './styles';

const StreamList: React.FC = () => {
  const StreamItem: React.FC = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail} />

      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar />

            <StreamUsername numberOfLines={1}>gagigante</StreamUsername>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>Playing something funny</StreamDescription>

          <StreamCategory numberOfLines={1}>Gaming</StreamCategory>
        </StreamRow>

        <TagRow>
          <TagView>
            <TagText>Portuguese</TagText>
          </TagView>

          <TagView>
            <TagText>Mobile</TagText>
          </TagView>
        </TagRow>
      </StreamColumn>
    </StreamContainer>
  );

  return (
    <List>
      <StreamItem />

      <StreamItem />

      <StreamItem />
    </List>
  );
}

export default StreamList;