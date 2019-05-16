const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/app.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: [path.join(__dirname, 'build'), path.join(__dirname, 'images'), path.join(__dirname, 'css')]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Development',
            filename: 'index.html',
            template: './index.html'
        })
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader'
            }
        ]
    }
}