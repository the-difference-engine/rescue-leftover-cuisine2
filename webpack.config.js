const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: { main: './frontend/src/application.js' },
    output: { 
        path: path.resolve(__dirname, 'frontend/packs'),
        filename: '[name].[chunkhash].js'
    },
    plugins: [
        new CleanWebpackPlugin('frontend/packs', {}),
        new MiniCssExtractPlugin(
            {
                filename: 'style.[chunkhash].css',
            }
        ),
        // new HtmlWebpackPlugin({
        //     inject: false,
        //     hash: true,
        //     template: './frontend/src/index.html',
        //     filename: 'index.html'
        // }),
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
                            publicPath: './src/styles/style.css'
                        }
                    },
                    "css-loader",
                    "postcss-loader",
                    // "style-loader"
                ]
            }
        ]
    }
}