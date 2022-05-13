const path = require('path');
const htmlWebpackPluginOptions = require('html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPLugin = require('copy-webpack-plugin')

module.exports ={
    entry: './src/index.js',
    output: {
        path : path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    resolve: {
        extensions : ['.js']
    },
    module : {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use : {
                    loader : 'babel-loader',
                } 
            }

        ]

    },
    plugins:[
        new HtmlWebpackPlugin(
            {
                inject: true,
                template : './Public/index.html',
                filename : './index.html'
            }
        ),
        new CopyWebpackPLugin({
            patterns: [{ from: './src/Styles/style.css',
            to: '' }],
        })
    ]
    
}