# A reproducer repository for the SULU CMS JS Setup

## About `admin/assets` and `vendor`

The `admin/assets/package.json` and `vendor/**/package.json` can not be moved.
So the challange is that the `admin/assets` should behave like it's the
project root configuration. Each module in vendor should be possible to
define it babel plugins. E.g.: if a project uses flow it should add the
flow plugin to the `.babelrc` file of its project.

## Building

```bash
cd assets/admin
npm install
npm run build
```

Currently will errors with:

> Error: Cannot find module '@babel/plugin-proposal-decorators'

It seems to look for the babel plugin in a node_modules of vendor
instead of keep the resolve config of our webpack.config.js in mind:

```js
        resolve: {
            modules: ['node_modules', nodeModulesPath],
        },
        resolveLoader: {
            modules: ['node_modules', nodeModulesPath],
        },
```
