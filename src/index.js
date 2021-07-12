import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import parser from './parser.js';

const genDiff = (file1, file2) => {
  const absoluteFile1 = path.resolve(process.cwd(), `__fixtures__/${file1}`);

  const absoluteFile2 = path.resolve(process.cwd(), `__fixtures__/${file2}`);

  const format1 = path.extname(absoluteFile1).slice(1);
  const format2 = path.extname(absoluteFile2).slice(1);

  const readFile1 = fs.readFileSync(absoluteFile1, 'utf-8');
  const readFile2 = fs.readFileSync(absoluteFile2, 'utf-8');

  // функция parser
  const obj1 = parser(readFile1, format1);
  const obj2 = parser(readFile2, format2);

  const k1 = Object.keys(obj1);
  const k2 = Object.keys(obj2);
  const keys = _.sortBy(_.union(k1, k2));

  const compareObj = keys.map((k) => {
    let str = '';
    if (_.has(obj1, k) && _.has(obj2, k) && obj1[k] === obj2[k]) {
      str = `   ${k}: ${obj1[k]}\n`;
    }
    if (_.has(obj1, k) && !_.has(obj2, k)) {
      str = ` - ${k}: ${obj1[k]}\n`;
    }
    if (_.has(obj1, k) && _.has(obj2, k) && obj1[k] !== obj2[k]) {
      str = ` - ${k}: ${obj1[k]}\n  + ${k}: ${obj2[k]}\n`;
    }
    if (!_.has(obj1, k) && _.has(obj2, k)) {
      str = ` + ${k}: ${obj2[k]}\n`;
    }

    return str;
  });

  const resStr = compareObj.join(' ');
  return `{\n ${resStr}}`;
};

export default genDiff;
