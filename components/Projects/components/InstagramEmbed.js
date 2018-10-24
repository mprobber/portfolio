// @flow
import React from 'react';

type Props = {
  src: string,
};

const InstagramEmbed = ({ src }: Props) => (
  <div>
    <iframe
      allowtransparency="true"
      style={{ marginTop: -50, marginLeft: -10 }}
      frameBorder="0"
      height="710"
      scrolling="no"
      src={src}
      width="211"
    />
  </div>
);

export default InstagramEmbed;
