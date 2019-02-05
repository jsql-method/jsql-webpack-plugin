"use strict";

const webpack = require("webpack");
const JsqlWebpack = require("./JsqlWebpack");

module.exports = {
    entry: "./JsqlWebpack.js",
    output: {
        filename: "bundle.js"
    },
    plugins: [
        new JsqlWebpack(
            {
                apiKey: '==iSqF8rKvVeSgqudKDOXpjiFgGMJh1PbeouIz9IW/YQ==9CI8ox66gogpoSXm6yrU',
                src: 'scr',
                dist: 'dist',
                watcher: ''
            }
        )
    ]
};