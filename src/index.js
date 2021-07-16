import fs from 'fs';
import path from 'path';
import parser from './parser.js';
import compare from './compareObjects.js';
import style from './formatters/stylish.js';

const genDiff = (file1, file2) => {
  const absoluteFile1 = path.resolve(process.cwd(), `__fixtures__/${file1}`);
  const absoluteFile2 = path.resolve(process.cwd(), `__fixtures__/${file2}`);

  const format1 = path.extname(absoluteFile1).slice(1);
  const format2 = path.extname(absoluteFile2).slice(1);

  const readFile1 = fs.readFileSync(absoluteFile1, 'utf-8');
  const readFile2 = fs.readFileSync(absoluteFile2, 'utf-8');

  const obj1 = parser(readFile1, format1);
  const obj2 = parser(readFile2, format2);

  const getDiff = compare(obj1, obj2);

  const showDiff = style(getDiff);
  return showDiff;
};

export default genDiff;
