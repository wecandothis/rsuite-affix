const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [

    {
        test: /\.js$/,
        loaders: [
            'babel?babelrc'
        ],
        exclude: /node_modules/
    }, {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
    },
    {
        test: /\.(jpg|png)$/,
        loader: 'url?limit=8192'
    }, {
        test: /\.md$/,
        loader: 'html!markdown'
    }
];
