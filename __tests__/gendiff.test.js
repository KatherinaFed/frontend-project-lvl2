import path from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';

const stylishPath = path.resolve(process.cwd(), '__fixtures__/stylish.txt');
const expectedStylish = fs.readFileSync(stylishPath, 'utf-8');

const plainPath = path.resolve(process.cwd(), '__fixtures__/plain.txt');
const expectedPlain = fs.readFileSync(plainPath, 'utf-8');

const jsonPath = path.resolve(process.cwd(), '__fixtures__/json.txt');
const expectedJson = fs.readFileSync(jsonPath, 'utf-8');

// Compare JSON Files
test('JSON stylish', () => {
  expect(genDiff('file1.json', 'file2.json')).toEqual(expectedStylish);
});

// Compare YAML/YML Files
test('YAML stylish', () => {
  expect(genDiff('file1.yml', 'file2.yml')).toEqual(expectedStylish);
});

// Compare JSON Files (plain)
test('JSON plain', () => {
  expect(genDiff('file1.json', 'file2.json', 'plain')).toEqual(expectedPlain);
});

// Compare YAML/YML Files (plain)
test('YAML plain', () => {
  expect(genDiff('file1.yml', 'file2.yml', 'plain')).toEqual(expectedPlain);
});

// Compare JSON Files (json)
test('JSON json', () => {
  expect(genDiff('file1.json', 'file2.json', 'json')).toEqual(expectedJson);
});

// Compare YAML/YML Files (json)
test('YAML json', () => {
  expect(genDiff('file1.yml', 'file2.yml', 'json')).toEqual(expectedJson);
});
