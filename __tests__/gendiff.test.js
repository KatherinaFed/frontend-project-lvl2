import genDiff from '../src/index.js';

// Compare JSON Files
test('compare_json', () => {
  const expected = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

  expect(genDiff('file1.json', 'file2.json')).toEqual(expected);
});

// Compare YAML/YML Files
test('compare_yaml/yml', () => {
  const expected = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

  expect(genDiff('file1.yml', 'file2.yml')).toEqual(expected);
});
