import _ from 'lodash';

const getValue = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (_.isString(value)) {
    return `'${value}'`;
  }

  return value;
};

const getPlain = (nodes) => {
  const innerIter = (node, keyName) => {
    const {
      type, name, value, beforeValue, afterValue, nestedValue,
    } = node;

    const currPath = `${keyName}${name}`;

    if (type === 'added') {
      return `Property '${currPath}' was added with value: ${getValue(value)}\n`;
    }
    if (type === 'deleted') {
      return `Property '${currPath}' was removed\n`;
    }
    if (type === 'nested') {
      return nestedValue.map((i) => innerIter(i, `${currPath}.`)).join('');
    }
    if (type === 'changed') {
      return `Property '${currPath}' was updated. From ${getValue(beforeValue)} to ${getValue(afterValue)}\n`;
    }
    if (type === 'unchanged') {
      return '';
    }

    throw new Error(`Unexpected type ${type}`);
  };

  return innerIter(nodes, '');
};

const plain = (data) => {
  const lines = data.map((i) => getPlain(i)).join('');
  return lines.trim();
};

export default plain;
