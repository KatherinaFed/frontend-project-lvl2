import yml from 'js-yaml';

const getParse = (file, fileFormat) => {
  const mapParser = {
    json: JSON.parse,
    yml: yml.safeLoad,
    yaml: yml.safeLoad,
  };

  const format = mapParser[fileFormat];

  return format(file);
};

export default getParse;
