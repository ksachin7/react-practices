const path = require("path");
const BundleAnalyzerPlugin =
    require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.[contenthash].js",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    process.env.NODE_ENV === "production"
                        ? MiniCssExtractPlugin.loader
                        : "style-loader",
                    "css-loader",
                ],
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
                // use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.svg$/,
                use: ["file-loader"],
            },
        ],
    },

    resolve: {
        extensions: [".js", ".jsx"],
    },

    plugins: [
        new BundleAnalyzerPlugin(),
        new MiniCssExtractPlugin({ filename: "styles.css" }),
        new HtmlWebpackPlugin({ template: "./public/index.html" }),
    ],

    devServer: {
        static: path.join(__dirname, "public"),
        port: 9000,
        // ... other devServer options ...
        open: true, // Optional: Set this to true if you want the server to open the browser automatically.
        // openPage: '', // Optional: Specify the page to open in the browser. For example, '/index.html'.
    },
};
