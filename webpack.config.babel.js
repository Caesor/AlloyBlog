import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'

const srcPath = path.resolve(__dirname, './src/view');
const distPath = path.resolve(__dirname, './app/view');

let config = {
    entry: {
        'main': './src/view/main.js'
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
            use: ['style', 'css', 'sass']
        },{
            test: /\.css/,
            use: ['style', 'css']
        },{
            test: /\.(png|jpg|jpeg)$/,
            use: ['url']
        }, {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react']
                }
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Nemo's blog"
        }),
        new CleanWebpackPlugin([distPath]),
    ]
}

export default config