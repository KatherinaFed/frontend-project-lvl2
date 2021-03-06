## Hexlet tests and linter status:
[![Maintainability](https://api.codeclimate.com/v1/badges/7b0f4a5d3858c6ea7a12/maintainability)](https://codeclimate.com/github/KatherinaFed/frontend-project-lvl2/maintainability) [![Github actions](https://github.com/KatherinaFed/frontend-project-lvl2/actions/workflows/github-actions.yml/badge.svg)](https://github.com/KatherinaFed/frontend-project-lvl2/actions/workflows/github-actions.yml) [![Test Coverage](https://api.codeclimate.com/v1/badges/7b0f4a5d3858c6ea7a12/test_coverage)](https://codeclimate.com/github/KatherinaFed/frontend-project-lvl2/test_coverage) [![Actions Status](https://github.com/KatherinaFed/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/KatherinaFed/frontend-project-lvl2/actions)

## Setup
```sh
$ make install
```

## Run "gendiff <filepath1> <filepath2>"
You can use formats: *json*, *plain*, *stylish = (default)*;
```sh
$ gendiff filepath1.(json/yml) filepath2.(json/yml)
$ gendiff -f <format> filepath1.(json/yml) filepath2.(json/yml)
```

## Run tests
```sh
$ make test
$ make test-coverage
```

## Examples:

https://asciinema.org/a/axo8l9UjByElDSlGUTuPDA1To - Comparing STYLISH (default) format (json/yml).

https://asciinema.org/a/xf3wlYALsF821X1gR1xXWdWYn - Comparing PLAIN format (json/yml).

https://asciinema.org/a/cgzgo5eW0JzPD8fdnJkRKiRRb - Comparing JSON format (json/yml).