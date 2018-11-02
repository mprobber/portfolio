// @flow
import React from 'react';

type Props = {
  id: string,
};

const VimeoEmbed = ({ id }: Props) => (
  <iframe
    src={`https://player.vimeo.com/video/${id}`}
    width="640"
    height="360"
    frameBorder="0"
    allowFullScreen
  />
);

export default VimeoEmbed;
