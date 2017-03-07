const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.BannerPlugin(`Last update: ${new Date().toString()}`),
    new ExtractTextPlugin('[name].css'),
    new HtmlwebpackPlugin({
        title: 'RSUITE Affix',
        filename: 'index.html',
        template: 'docs/index.html',
        inject: true,
        hash: true
    })
];
