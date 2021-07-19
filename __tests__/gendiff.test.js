import path from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';

const jsonPath = path.resolve(process.cwd(), '__fixtures__/json.txt');
const expectedJson = fs.readFileSync(jsonPath, 'utf-8');

const plainPath = path.resolve(process.cwd(), '__fixtures__/plain.txt');
const expectedPlain = fs.readFileSync(plainPath, 'utf-8');

// Compare JSON Files
test('compare_json', () => {
  expect(genDiff('file1.json', 'file2.json')).toEqual(expectedJson);
});

// Compare YAML/YML Files
test('compare_yaml/yml', () => {
  expect(genDiff('file1.yml', 'file2.yml')).toEqual(expectedJson);
});

// Compare JSON Files (plain)
test('compare_json_plain', () => {
  expect(genDiff('file1.json', 'file2.json', 'plain')).toEqual(expectedPlain);
});

// Compare YAML/YML Files (plain)
test('compare_yaml/yml_plain', () => {
  expect(genDiff('file1.yml', 'file2.yml', 'plain')).toEqual(expectedPlain);
});
