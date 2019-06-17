const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist', 'js')
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    devServer: {
        port: 9000,
        contentBase: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html')
        })
    ]
}