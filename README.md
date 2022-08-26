# Research patch-package

Researching and evaluating if
[patch-package](https://www.npmjs.com/package/patch-package)
is a feasible tool to use.

This project was initialized with
[Typescript Webpack Boilerplate](https://github.com/VD39/typescript-webpack-boilerplate).

## The results

| Pros                                                                                                                           | Cons                                                                                                                                                                                                     |
|--------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Enables quick modification or configuration change of an npm library which might not offer an API or something similar itself. | Deep knowledge of the respective library is required                                                                                                                                                     |
|                                                                                                                                | Patch files are difficult to read                                                                                                                                                                        |
|                                                                                                                                | Working within the _node_modules_ folder is cumbersome                                                                                                                                                   |
|                                                                                                                                | Complex libraries => complex patches                                                                                                                                                                     |
|                                                                                                                                | When updating a patched library there is no warranty that the patches continue to work as intended. The target files could have a changed structure so that the patches cannot be applied automatically. |
|                                                                                                                                | Transitive dependencies increase complexity yet again                                                                                                                                                    |
|                                                                                                                                | Repo has many open issues and unmerged PRs                                                                                                                                                               |
|                                                                                                                                | Anti Pattern                                                                                                                                                                                             |

Also, from [patch-package's readme](https://github.com/ds300/patch-package#isnt-this-dangerous):

> **Isn't this dangerous?**
> 
> Nope. The technique is quite robust. Here are some things to keep in mind though:  
> * It's easy to forget to run yarn or npm when switching between branches that do and don't have patch files.
> * Long lived patches can be costly to maintain if they affect an area of code that is updated regularly and you want to update the package regularly too.
> * Big semantic changes can be hard to review. Keep them small and obvious or add plenty of comments.
> * Changes can also impact the behaviour of other untouched packages. It's normally obvious when this will happen, and often desired, but be careful nonetheless.

### So should you use it?

For smaller DIY-type projects when you want to try things and do no harm, sure
go ahead.

If you're working on a complex project which involves many contributors, has
many and complex dependencies and which is used in production, I'd say no.  
The drawbacks clearly outweigh the benefits.  
For every dependency upgrade you do (be it major, minor or patch), chances are
your patches are not working anymore. Cumbersume manual labour would be
required to make the patches work again.

If you need a library to change its implementation, it's better to create an
issue (maybe already a PR) on that library's GitHub page and contribute to a
sustainable solution instead of a dirty quick fix.

If your requirements differ too much from what the library offers, it's better
to look for a different library or create one yourself.

----

## Typescript Webpack Boilerplate

[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/VD39/es6-webpack-boilerplate/blob/master/LICENSE, 'License')

A starter frontend boilerplate built with:

- [TypeScript](https://www.typescriptlang.org/)
- [Babel (7)](https://babeljs.io/)
- [Webpack (5)](https://webpack.js.org/)
- [PostCSS](https://postcss.org/)
- [Jest](https://jestjs.io/)
- [ESLint](https://eslint.org/)
- [Stylelint](https://stylelint.io/)

This also uses [lint-staged](https://github.com/okonet/lint-staged) for running pre-commit checks.

### Features

- Support for both TypeScript and JavaScript as needed.
- May be extended to be used with [React](https://reactjs.org/), [Vue.js](https://vuejs.org/), or [Angular](https://angular.io/).
- Minification of TypeScript/JavaScript and CSS processed files.
- Assets optimization.
- Webpack Dev Server plugin for local development.
- Webpack Bundle Analyzer for visualising script output and usage.

### Prerequisites

- [NodeJS](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

### Folder structure

```none
src
└── css
│    ├── all
│    └── styles.css
├── index.ts
public
├── assets
├── favicon.ico
└── index.html
```

- src
  - The entry typescript file is [index.ts](src/index.ts).
  - The [helpers/set-message](src/helpers/set-message) folder is a sample folder for how to test using Jest.
  - Local files are imported using the `'@'` alias. See [index.ts](src/index.ts) file for example.
- scr/css
  - Add your styles here and `@import` them to the entry [styles.css](src/css/styles.css) file.
- public
  - Edit the [index.html](public/index.html) in the public folder to suite your needs.
  - Replace the [favicon.ico](public/favicon.ico) with your own icon.
- public/assets.
  - Add your assets, to the [assets](public/assets) folder.

### Configuration

You may change the configuration for Webpack within the [webpack](webpack) folder.

### Setup

#### Install dependencies

Run:

```sh
  npm i
```

### Development

#### Server

Run:

```sh
  npm run serve
```

This will create a server at `http://localhost:9000/` or at the port number specified in the [webpack/configuration/config.js](webpack/configuration/config.js) file.

Automatically reloads after each file change.

#### Production build

Run:

```sh
  npm run build
```

Will output all build files into the `dist` folder.

### Testing (Jest)

Run:

```sh
  npm run test
```

or watch files

```sh
  npm run test:watch
```

### Linting

#### All files

Run:

```sh
  npm run lint:all
```

To fix all possible errors automatically run:

```sh
  npm run lint:all:fix
```

#### TypeScript (tsc)

Run:

```sh
  npm run lint:check-types
```

There is no automatic fix option for TypeScript.

#### TypeScript and JavaScript (ESLint)

Run:

```sh
  npm run lint:scripts
```

To fix all possible errors automatically run:

```sh
  npm run lint:scripts:fix
```

#### Styles (StyleLint)

Run:

```sh
  npm run lint:styles
```

To fix all possible errors automatically run:

```sh
  npm run lint:styles:fix
```

### Check bundle size

Run:

```sh
  npm run check-size
```

This will create a server at `http://localhost:8888/` or at the port number specified using the `-p or --port` option via the `cli`.

### License

[MIT](https://github.com/VD39/es6-webpack-boilerplate/blob/master/LICENSE)
