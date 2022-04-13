const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const outputPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');
const nodeModulesPath = path.resolve(__dirname, 'node_modules/');

module.exports = {
    entry: './src/index',
    mode: 'development',
    output: {
        path: outputPath,
        publicPath: '/',
        globalObject: 'this',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        modules: [nodeModulesPath, srcPath]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                include: srcPath,
                exclude: /node_modules/,
                use: 'ts-loader?configFile=tsconfig.json'
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ],
                include: srcPath,
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(srcPath, 'index.html'),
            filename: 'index.html',
            path: outputPath,
        }),
    ],
    optimization: {
        emitOnErrors: false,
        runtimeChunk: 'single',
    },
    devtool: 'eval-source-map',
    stats: 'errors-only',
    devServer: {
        host: '0.0.0.0',
        port: 3000,
        historyApiFallback: true,
    }
};
