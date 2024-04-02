const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: "production",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.[name].[contenthash].js",
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        port: 3000,
        hot: true,
        open: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    process.env.NODE_ENV === "production"
                        ? MiniCssExtractPlugin.loader
                        : "style-loader", "css-loader",
                ],
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[name][ext]',
                },
            }
        ],
    },
    resolve: {
        extensions: ["*", ".js", ".jsx", ".ts", ".tsx", ".json"],
        alias: {
            '@components': path.resolve(__dirname, 'src/components')
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: 'index.html',
            debug: true,
        }),
        new MiniCssExtractPlugin({ filename: "styles.css" }),
        new CleanWebpackPlugin({
            // cleanOnceBeforeBuildPatterns: ['**/*', '!assets/*', '!.old-bundles/**'],
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'public',
                    to: '',
                    globOptions: {
                        ignore: ['index.html'],
                    },
                },
                // {
                    // from: 'dist',
                    // to: 'old-bundles',
                    // globOptions: {
                    //     ignore: [
                    //         'index.html',
                    //         '**/assets/**',
                    //         '**/.old-bundles/**',
                    //         'bundle.*.js',
                    //     ],
                    // },
                // },
            ],
        }),
        // new ESLintPlugin({
        //     extensions: ['js', 'jsx']
        // })
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({}),
        ],
        splitChunks: {
            chunks: 'all'
        }
    },
    performance: {
        maxAssetSize: 244 * 1024,
        maxEntrypointSize: 244 * 1024,
    },
};
