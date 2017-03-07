const path = require('path');
const markdownLoader = require('markdownloader').renderer;
const loaders = require('./webpack/loaders');
const plugins = require('./webpack/defaultPlugins');

console.log(markdownLoader.renderer);

let output = {
    path: path.resolve(__dirname, 'assets'),
    filename: 'bundle.js'
};

if (process.env.NODE_ENV === 'development') {
    output.publicPath = '/assets/';
}

const config = {
    entry: [
        path.join(__dirname, 'docs/index')
    ],
    output,
    module: {
        loaders
    },
    plugins,
    markdownLoader
};

module.exports = config;
