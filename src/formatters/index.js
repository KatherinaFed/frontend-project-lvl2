import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const getFormat = (data, formatName) => {
  const mapFormats = {
    stylish,
    plain,
    json,
  };

  const format = mapFormats[formatName];

  return format(data);
};

export default getFormat;
