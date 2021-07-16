import _ from 'lodash';

const compareObjects = (obj1, obj2) => {
  const keysOfObjects = _.sortBy(_.union(_.keys(obj1), _.keys(obj2)));

  const result = keysOfObjects.map((k) => {
    if (!_.has(obj1, k)) { // ADDED
      return {
        type: 'added',
        name: k,
        value: obj2[k],
      };
    }
    if (!_.has(obj2, k)) { // DELETED
      return {
        type: 'deleted',
        name: k,
        value: obj1[k],
      };
    }
    if (_.isPlainObject(obj1[k]) && _.isPlainObject(obj2[k])) { // NESTED
      return {
        type: 'nested',
        name: k,
        nestedValue: compareObjects(obj1[k], obj2[k]),
      };
    }
    if (_.has(obj1, k) && _.has(obj2, k) && obj1[k] !== obj2[k]) { // CHANGED
      return {
        type: 'changed',
        name: k,
        beforeValue: obj1[k],
        afterValue: obj2[k],
      };
    }

    return { // UNCHANGED
      type: 'unchanged',
      name: k,
      value: obj1[k],
    };
  });

  return result;
};

export default compareObjects;
