import React from 'react';
import PropTypes from 'prop-types';

function YoutubeEmbed({ url }) {
  return (
    <iframe
      data-testid="video"
      width="100%"
      height="460"
      src={ `https://www.youtube.com/embed/${url.split('v=')[1]}` }
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write;
        encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  );
}

YoutubeEmbed.propTypes = {
  url: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
