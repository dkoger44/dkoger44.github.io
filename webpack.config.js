const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebPack = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry:{
        main: path.resolve(__dirname, './src/app.js')
    },
    output:{
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'docs')
    },
    devServer: {
        contentBase: "./dist",
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Personal Website"
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use:['style-loader', 'css-loader']
            },
            {
                test: /\.(gif|png|jpg|jpeg|svg)$/i,
                type: 'asset/resource'
            }
        ]
    }
};
