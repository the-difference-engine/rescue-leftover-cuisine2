const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');

module.exports = {
    entry: { main: './src/index.js' },
    output: { 
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    plugins: [
        new MiniCssExtractPlugin(
            {
                filename: '[name].[chunkhash].css',
                disable: false,
                allChunks: true
            }
        ),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: './src/style.css'
                        }
                    },
                    "css-loader"
                ]
            }
        ]
    }
}