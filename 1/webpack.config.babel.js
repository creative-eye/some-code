/**
 * Copied from another source, lot of useless code here
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let local_machine = 'localhost';

module.exports = function (env) {
    if (env && env.local !== undefined) {
        local_machine = env.local;
    }
    return {
        devtool: 'inline_sourcemap',
        target: 'web',
        devServer: {
            historyApiFallback: true,
            port: 3000,
            hot: true,
            inline: true,
            progress: true,
            publicPath: '/',
            public: local_machine + ':3000',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
                'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
            },
        },
        entry: {
            app: ['babel-polyfill', path.join(__dirname, './src/js/app.js')]
        },
        output: {
            path: path.resolve(__dirname, 'build'),
            publicPath: 'http://' + local_machine + ':3000/',
            filename: '[name].js',
            chunkFilename: '[name].js'
        },
        //resolve these types of extensions
        resolve: {
            modules: ['node_modules', './src'],
            extensions: ['.js'],
        },

        //modules to load
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015', 'stage-0'],
                        plugins: ['transform-class-properties', 'transform-decorators-legacy']
                    }
                },
                {
                    test: /\.css$/,
                    loader: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]'
                },
                {
                    test: /\.(jpe?g|png|gif)$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {limit: 1000}
                        },
                        'image-webpack-loader'
                    ]
                },
                {
                    test: /\.svg$/,
                    loader: 'svg-inline-loader'
                }
            ]
        },
        plugins: [
            new webpack.optimize.ModuleConcatenationPlugin(),

            //template for creating html file that will update on each module export
            new HtmlWebpackPlugin({
                template: path.join(__dirname, './src/index.html'),
                filename: 'index.html',
                inject: false,
            }),

            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': `'dev'`,
                }
            }),
        ],
    };
};
