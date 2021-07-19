import { read, extname } from './extra.js';
import parser from './parser.js';
import compare from './compareObjects.js';
import format from './formatters/index.js';

const genDiff = (file1, file2, formatName = 'stylish') => {
  const readFile1 = read(file1);
  const readFile2 = read(file2);

  const format1 = extname(file1);
  const format2 = extname(file2);

  const obj1 = parser(readFile1, format1);
  const obj2 = parser(readFile2, format2);

  const getDiff = compare(obj1, obj2);

  const showDiff = format(getDiff, formatName);
  return showDiff;
};

export default genDiff;
