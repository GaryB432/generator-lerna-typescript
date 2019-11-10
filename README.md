# generator-lerna-typescript

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

> Get started with Lerna using TypeScript

## Installation

First, install [Yeoman](http://yeoman.io) and generator-lerna-typescript using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-lerna-typescript
```

Then generate your new project:

```bash
yo lerna-typescript
```

Your project will be generated with a sample package. Generate another new package whenever you want with:

```bash
yo lerna-typescript:package @myscope/my-new-package
```

Build your project:

```bash
lerna run build
```

Test your project:

```bash
npm test
```

## License

ISC © [Gary Bortosky]()


[npm-image]: https://badge.fury.io/js/generator-lerna-typescript.svg
[npm-url]: https://npmjs.org/package/generator-lerna-typescript
[travis-image]: https://travis-ci.com/GaryB432/generator-lerna-typescript.svg?branch=master
[travis-url]: https://travis-ci.com/GaryB432/generator-lerna-typescript
[daviddm-image]: https://david-dm.org/GaryB432/generator-lerna-typescript.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/GaryB432/generator-lerna-typescript
