"use strict";

const webpack = require("webpack");
const JsqlWebpack = require("./jsql-webpack");

module.exports = {
    entry: "./test/test.js",
    output: {
        filename: "./test/dist/test.min.js"
    },
    plugins: [
        new JsqlWebpack(
            {
                apiKey: 'dawid.senko@jsql.it',
                src: 'test/test.js',
                dist: 'test/dist/test.min.js',
                devKeyFileName: 'test-key.key',
                debug: true,
                env: 'local'
            }
        )
    ]
};