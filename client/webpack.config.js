const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html'
});

// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        './src/index.tsx',
    ],
    output: {
        filename: 'app.js',
        path: __dirname + '/dist'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                loaders: ["style-loader", "typings-for-css-modules-loader?modules&namedExport&sass", "sass-loader"]
            },
            {
                test: /\.(png|jpe?g|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/[name].[ext]',
                }
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: "awesome-typescript-loader"
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {enforce: "pre", test: /\.js$/, loader: "source-map-loader"}
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        // new webpack.WatchIgnorePlugin([
        //     /scss\.d\.ts$/
        // ]),
        htmlWebpackPlugin
    ],
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // }
};