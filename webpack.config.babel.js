import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'

const srcPath = path.resolve(__dirname, './src/view');
const distPath = path.resolve(__dirname, './app/public');

let config = {
    entry: {
        'main': './src/view/index.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {}
    },
    output: {
        filename: 'js/[name].min.js',
        path: distPath
    },
    module: {
        rules: [{
            test: /\.scss/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            })
        },{
            test: /\.css/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader']
            })
        },{
            test: /\.(png|jpg|jpeg)$/,
            use: ['url-loader']
        }, {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'react']
                }
            }
        }]
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     title: "Nemo's blog"
        // }),
        new ExtractTextPlugin({
            filename: 'css/main.min.css',
            allChunks: true,
        }),
        new CleanWebpackPlugin([distPath]),
    ]
}

export default config