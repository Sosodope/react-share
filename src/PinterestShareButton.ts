import PropTypes from 'prop-types';

import assert from 'assert';

import objectToGetParams from './utils/objectToGetParams';
import createShareButton from './utils/createShareButton';

function pinterestLink(
  url: string,
  { media, description }: { media: string; description?: string },
) {
  assert(url, 'pinterest.url');
  assert(media, 'pinterest.media');

  return (
    'https://pinterest.com/pin/create/button/' +
    objectToGetParams({
      url,
      media,
      description,
    })
  );
}

const PinterestShareButton = createShareButton<{ media: string; description?: string }>(
  'pinterest',
  pinterestLink,
  props => ({
    media: props.media,
    description: props.description,
  }),
  {
    media: PropTypes.string.isRequired,
    description: PropTypes.string,
  },
  {
    windowWidth: 1000,
    windowHeight: 730,
  },
);

export default PinterestShareButton;
