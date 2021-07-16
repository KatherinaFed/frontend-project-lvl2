import _ from 'lodash';

const stringify = (value, spaces) => {
  if (_.isString(value) || _.isNumber(value) || _.isNull(value) || _.isBoolean(value)) {
    return value;
  }

  const indent = ' '.repeat(spaces + 6);
  const indentBraces = ' '.repeat(spaces + 2);

  const result = _.keys(value).map((key) => {
    if (typeof value[key] === 'object') {
      return `${indent}${key}: ${stringify(value[key], spaces + 4)}\n`;
    }

    return `${indent}${key}: ${value[key]}\n`;
  });

  return `{\n${result.join('')}${indentBraces}}`;
};

const getStylish = (nodes) => {
  const innerIter = (node, space = 2) => {
    const added = '+ ';
    const deleted = '- ';

    const indent = ' '.repeat(space);
    const indentBraces = ' '.repeat(space + 2);

    const {
      type, name, value, beforeValue, afterValue, nestedValue,
    } = node;

    if (type === 'added') {
      return `\n${indent}${added}${name}: ${stringify(value, space)}`;
    }
    if (type === 'deleted') {
      return `\n${indent}${deleted}${name}: ${stringify(value, space)}`;
    }
    if (type === 'nested') {
      return `\n${indentBraces}${name}: {${nestedValue.map((i) => innerIter(i, space + 4)).join('')}\n${indentBraces}}`;
    }
    if (type === 'changed') {
      return `\n${indent}${deleted}${name}: ${stringify(beforeValue, space)}\n${indent}${added}${name}: ${stringify(afterValue, space)}`;
    }

    return `\n${indentBraces}${name}: ${stringify(value, space)}`;
  };

  return innerIter(nodes);
};

const stylish = (data) => {
  const lines = data.map((i) => getStylish(i)).join('');
  return `{${lines}\n}`;
};

export default stylish;
