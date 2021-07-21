import fs from 'fs';
import path from 'path';

export const read = (file) => {
  const absolutePath = path.resolve(file);
  const readFile = fs.readFileSync(absolutePath, 'utf-8');

  return readFile;
};

export const extname = (file) => path.extname(file).slice(1);
