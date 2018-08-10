const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: { main: './frontend/src/index.js' },
    output: { 
        path: path.resolve(__dirname, 'frontend/pack'),
        filename: '[name].[chunkhash].js'
    },
    plugins: [
        new CleanWebpackPlugin('frontend/pack', {}),
        new MiniCssExtractPlugin(
            {
                filename: 'style.[chunkhash].css',
            }
        ),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './frontend/src/index.html',
            filename: 'index.html'
        }),
        new WebpackMd5Hash()
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
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: './src/style.css'
                        }
                    },
                    "css-loader",
                    "postcss-loader"
                ]
            }
        ]
    }
}