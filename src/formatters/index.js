import stylish from './stylish.js';
import plain from './plain.js';

const getFormat = (data, formatName) => {
  const mapFormats = {
    stylish,
    plain,
  };

  const format = mapFormats[formatName];

  return format(data);
};

export default getFormat;
