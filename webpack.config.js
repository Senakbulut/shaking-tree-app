const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //extra css plugin

module.exports = {
    output: { //options related to how webpack emits results
        path: path.join(__dirname, '/dist'), //the target directory for all output files and absolute path
        filename: 'index.bundle.js', //the filename template for entry chunks
    },
    devServer: {
        port: 3000, //port number to development server
        watchContentBase: true,
    },
    module: {
        rules: [ //rules for modules 
            {
                test: /\.(js|jsx)$/, //For files ending in .js
                exclude: /node_modules/, // node_modules are not included
                use: { // options for the loader 
                    loader: 'babel-loader' //the loader which should be applied, it'll be resolved relative to the context
                }
            },
            {
                test: /\.scss$/, //For files ending in .scss
                use: [ 
                    MiniCssExtractPlugin.loader, // loaders for scss
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test:/\.sass$/, //For files ending in .sass
                use: [
                    'style-loader', //loaders for sass
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test:/\.css$/, //For files ending in .css
                use: [
                    'style-loader', //loaders for css
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin()], //additional plugins
};
