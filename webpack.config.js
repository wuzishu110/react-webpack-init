const { resolve } = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'index.js',
        path: resolve(__dirname, 'dist'),
        publicPath: '/'
    },

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    externals: {
        // 打包过程遇到以下依赖导入，不会打包对应库代码，而是调用window上的React和ReactDOM
        // import React from 'react'
        // import ReactDOM from 'react-dom'
        // 'react': 'React',
        // 'react-dom': 'ReactDOM'
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                use: 'babel-loader'
            },
            {
                test: /\.less$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },
    devServer: {
        port: 3000,
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'index.css'
        })
    ]
};