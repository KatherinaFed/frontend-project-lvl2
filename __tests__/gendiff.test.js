import path from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';

const expectedPath = path.resolve(process.cwd(), '__fixtures__/expected.txt');
const expected = fs.readFileSync(expectedPath, 'utf-8');

// Compare JSON Files
test('compare_json', () => {
  expect(genDiff('file1.json', 'file2.json')).toEqual(expected);
});

// Compare YAML/YML Files
test('compare_yaml/yml', () => {
  expect(genDiff('file1.yml', 'file2.yml')).toEqual(expected);
});
