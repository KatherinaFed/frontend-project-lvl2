import path from 'path';
import genDiff from '../src/index.js';

// const getPathFixt = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
// const readFile = (filename) => fs.readFileSync(getPathFixt(filename), 'utf-8');

test('compare_json', () => {
  const pathFile1 = path.resolve(process.cwd(), '__fixtures__/file1.json');
  const pathFile2 = path.resolve(process.cwd(), '__fixtures__/file2.json');

  const expected = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

  expect(genDiff(pathFile1, pathFile2)).toEqual(expected);
});
