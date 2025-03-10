const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: 'development', // Add this line. Use 'production' for production builds
    entry: './app/src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'index.js',
        publicPath: '/',
        clean: true,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        fallback: {
            os: require.resolve('os-browserify/browser'),
            crypto: require.resolve('crypto-browserify'),
            stream: false,
            vm: false,
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'app/public/index.html'),
        },
        historyApiFallback: true,
        hot: true,
        port: 3000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/public/index.html',
            inject: 'body',
        }),
        new Dotenv(),
    ],
};
