jsql-webpack-plugin
=====================

A simple webpack plugin to change sql queries to hash. Required version of webpack 4 or higher.

### Usage

```
npm install jsql-webpack --save-dev
```
Then in webpack.config.js

```
var jsqlWebpackPlugin = require('jsql-webpack');
```
and webpack.config.js plugin section with options

```
plugins: [
  new jsqlWebpackPlugin(
      {
          apiKey: '',
          src: '',
          dist: '',
          watcher: ''
      }
  )
]
```
