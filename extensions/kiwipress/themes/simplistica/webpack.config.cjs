const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',  // Entry point for Webpack
    output: {
    filename: 'simplistica.js',   // Output file
    path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
    extensions: ['.ts', '.tsx', '.js'],  // Resolve TypeScript and JavaScript files
    },
    module: {
    rules: [
        {
        test: /\.tsx?$/,                  // Compile TypeScript files
        use: 'ts-loader',
        exclude: /node_modules/,
        },
    ],
    },
    plugins: [
    new HtmlWebpackPlugin({
      template: './dist/index.html',     // Inject into index.html
    }),
    ],
    devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3000,                         // Dev server port
    hot: true,                          // Enable hot module replacement
    },
};
